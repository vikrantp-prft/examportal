using System;
using System.Collections.Generic;

namespace PerftEvaluation.DTO {
    public static class DbFilters {
        public static List<string> UserFilters = new List<string> () {
            "FirstName",
            "LastName",
            "Email",
            "TeamId"
        };

        public static List<string> MasterFilters = new List<string> () {
            "Name",
            "Description",
            "MasterType"
        };

        public static List<string> ExamFilters = new List<string> () {
            "Title",
            "Description",
            "PassingMarks",
            "FromDate",
            "ToDate",
            "TotalQuestions"
        };

        public static List<string> QuestionFilters = new List<string> () {
            "Question"
        };

        public static List<string> ResultFilters = new List<string> () {
            "QuestionsAttempted"
        };
    }
}