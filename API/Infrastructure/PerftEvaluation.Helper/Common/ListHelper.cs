using PerftEvaluation.Entities.POCOEntities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PerftEvaluation.Helper.Common
{
    public class ListHelper
    {
        public List<Questions> ShuffleListBasedOnChar(List<Questions> questions)
        {
            Random random = new Random();
            int radomNum = random.Next(0, 9);

            var shiffleRecords = questions.OrderBy(q => q.Question.ToCharArray()[radomNum]);

            return shiffleRecords.ToList();
        }
    }
}
