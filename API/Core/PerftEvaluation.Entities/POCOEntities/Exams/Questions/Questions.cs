using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.Entities.POCOEntities
{
    public class Questions : BaseEntity
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "questions"; } }

        [BsonElement("examId"), BsonRepresentation(BsonType.ObjectId)]
        public string ExamId { get; set; }

        [BsonElement("categoryId"), BsonRepresentation(BsonType.ObjectId)]
        public string CategoryId { get; set; }

        [BsonElement("questionType")]
        public QuestionsEnum QuestionType { get; set; }

        [BsonElement("question")]
        public string Question { get; set; }

         public List<Options> Options {get;set;}
    }

    public class Options
    {
        [BsonElement("optionsId"), BsonRepresentation(BsonType.ObjectId)]
        public string OptionsId { get; set; }

        [BsonElement("option")] 
        public string Option { get; set; }

        [BsonElement("description")] 
        public string Description { get; set; }

        [BsonElement("isCorrect")] 
        public bool IsCorrect { get; set; }
     }
}
