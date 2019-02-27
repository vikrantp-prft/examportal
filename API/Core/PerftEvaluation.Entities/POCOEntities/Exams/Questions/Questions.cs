using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.Entities.POCOEntities {
    public class Questions : BaseEntity {
        [BsonExtraElements]
        public static string CollectionName { get { return "questions"; } }

        [BsonElement ("examId"), BsonRepresentation (BsonType.ObjectId)]
        [Required]
        public string ExamId { get; set; }

        [BsonElement ("categoryId"), BsonRepresentation (BsonType.ObjectId)]
        [Required]
        public string CategoryId { get; set; }

        [BsonElement ("questionType")]
        [Required]
        public QuestionsEnum QuestionType { get; set; }

        [BsonElement ("question")]
        [Required]
        public string Question { get; set; }

        public List<Options> Options { get; set; }
    }

    public class Options {
        [BsonElement ("optionId"), BsonRepresentation (BsonType.ObjectId)]
        public string OptionId { get; set; }
        

        [BsonElement ("option")]
        [Required]
        public string Option { get; set; }


        [BsonElement ("description")]
        public string Description { get; set; }


        [BsonDefaultValue(false)]
        [BsonElement ("isCorrect")]
        public bool IsCorrect { get; set; }


        [BsonDefaultValue(false)]
        [BsonElement ("isSelected")]
        public bool IsSelected { get; set; }
    }
}