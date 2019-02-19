using System;
using System.Reflection;

namespace PerftEvaluation.Test
{
    public class Utility
    {
        internal static T GetRandomPropertyValues<T>(T t)
        {
            Type type = typeof(T);
            foreach (var property in type.GetProperties())
            {
                if (property.GetType() == typeof(String))
                {
                    property.SetValue(t, Guid.NewGuid().ToString());

                }
                else if (property.GetType() == typeof(int))
                {
                    property.SetValue(t, new Random().Next(1, 9999));
                }

                else if (property.GetType() == typeof(DateTime))
                {
                    property.SetValue(t, DateTime.Now);
                }
            }

            return t;
        }

        internal static bool CompareToObjectProperties<T, U>(T t1, U t2)
        {
            bool exactSame = true;
            Type type1 = typeof(T);
            Type type2 = typeof(U);
            foreach (var property in type1.GetProperties())
            {
                PropertyInfo type2Property = type2.GetProperty(type1.Name);
                if (property.GetType() == typeof(String))
                {
                    if (property.GetValue(t1).ToString() != type2Property.GetValue(t2).ToString())
                    {
                        exactSame = false;
                        break;
                    }

                }
                else if (property.GetType() == typeof(int))
                {
                    if ((int)property.GetValue(t1) != (int)type2Property.GetValue(t2))
                    {
                        exactSame = false;
                        break;
                    }
                }
                else if (property.GetType() == typeof(DateTime))
                {
                    if ((DateTime)property.GetValue(t1) != (DateTime)type2Property.GetValue(t2))
                    {
                        exactSame = false;
                        break;
                    }
                }
            }

            return exactSame;
        }
    }
}
