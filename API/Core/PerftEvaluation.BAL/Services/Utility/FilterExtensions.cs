using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;

namespace PerftEvaluation.BAL.Services {
    public static class FilterExtensions { //: IFilterExtensions {
        static IEnumerable<T> Filter<T> (this IEnumerable<T> collection, List<string> columnNames, string searchText, bool isAndCondition = false) {

            Dictionary<string, object> filters = new Dictionary<string, object> ();
            foreach (var item in columnNames) {
                filters.Add (item, searchText);
            }

            var type = typeof (T);
            var properties = type.GetProperties (BindingFlags.Public | BindingFlags.Instance);
            var queryable = collection.AsQueryable ();
            var instance = Expression.Parameter (type, "instance");

            var expressions = new Stack<Expression> ();

            foreach (var filter in filters) {
                var propertyName = filter.Key;
                var property = properties.FirstOrDefault (x => x.Name == propertyName);
                if (property == null)
                    continue;
                //Handle string type properties
                if (property.PropertyType == typeof (System.String)) {
                    var left = Expression.Property (instance, property);
                    var right = Expression.Constant (filter.Value, property.PropertyType);

                    var toLowerMethod = typeof (string).GetMethod ("ToLower", new Type[0]);

                    var lExp = Expression.Call (left, toLowerMethod);
                    var rExp = Expression.Call (right, toLowerMethod);

                    var mtdContains = typeof(string).GetMethod("Contains",new Type[] {typeof (string)});//OR property.PropertyType.GetMethods()[120];
                    var expr = Expression.Call (lExp, mtdContains, rExp); //If you want to filter by like clause

                    //var expr = Expression.Call (left, typeof (System.String).GetMethod ("Contains"), right, Expression.Constant (StringComparison.InvariantCultureIgnoreCase)); //If you want to filter by like clause
                    //var expr = Expression.Equal(left, right);//If you want to filter by equals

                    //Before null check
                    //expressions.Push(expr);

                    //after null check
                    var nullCheck = Expression.NotEqual (left, Expression.Constant (null, typeof (object)));
                    var finalExpression = Expression.AndAlso (nullCheck, expr);
                    expressions.Push (finalExpression);
                } else if (property.PropertyType == typeof (System.Int32) || property.PropertyType == typeof (System.Int64) || property.PropertyType == typeof (System.Decimal)) {
                    var left = Expression.Property (instance, property);

                    TypeConverter typeConverter = TypeDescriptor.GetConverter (property.PropertyType);
                    if (typeConverter.IsValid (Convert.ToString (filter.Value))) {
                        object propValue = typeConverter.ConvertFromString (Convert.ToString (filter.Value));
                        var right = Expression.Constant (propValue, property.PropertyType);
                        var expr = Expression.Equal (left, right); //If you want to filter by like clause

                        expressions.Push (expr);
                    }
                }

            }

            Expression call = null;
            Expression previousExpression = null;
            while (expressions.Count > 0) {
                var expr = expressions.Pop ();
                if (previousExpression == null) {
                    previousExpression = expr;
                    call = expr;
                } else {
                    if (isAndCondition) {
                        var and = Expression.AndAlso (previousExpression, expr);
                        call = and;
                        previousExpression = and;
                    } else {
                        var or = Expression.Or (previousExpression, expr);
                        call = or;
                        previousExpression = or;
                    }

                }
            }

            var whereCallExpression = Expression.Call (
                typeof (Queryable),
                "Where",
                new [] { queryable.ElementType },
                queryable.Expression,
                Expression.Lambda<Func<T, bool>> (call, new [] { instance }));

            return queryable.Provider.CreateQuery<T> (whereCallExpression);
        }
        public static IQueryable<T> SortAndFilter<T> (this IQueryable<T> collection, RequestModel requestModel, List<string> filterColumns = null) {
            if (!string.IsNullOrEmpty (requestModel.SortBy)) {
                collection = collection.OrderBy (requestModel.SortBy, requestModel.IsDescending).AsQueryable ();
            }
            //!string.IsNullOrEmpty(extendedClass.SearchText) && 
            if (filterColumns != null && filterColumns.Count () > 0) {
                collection = collection.Filter (filterColumns, requestModel.Filter).AsQueryable ();
            }
            return collection.AsQueryable ();
        }
        static IQueryable<T> OrderBy<T> (this IQueryable<T> collection, string attribute, bool IsDescending) {
            try {
                string orderMethodName = IsDescending == true ? "OrderByDescending" : "OrderBy";
                Type t = typeof (T);

                var param = Expression.Parameter (t);
                var property = t.GetProperty (attribute);
                if (property != null) {
                    return collection.Provider.CreateQuery<T> (
                        Expression.Call (
                            typeof (Queryable),
                            orderMethodName,
                            new Type[] { t, property.PropertyType },
                            collection.Expression,
                            Expression.Quote (
                                Expression.Lambda (
                                    Expression.Property (param, property),
                                    param))
                        ));
                }

                return collection;
            } catch // Probably invalid input, you can catch specifics if you want
            {
                //throw exception;
                //Logger.LogError (ex);
                return collection; // Return unsorted query
            }
        }
    }
}