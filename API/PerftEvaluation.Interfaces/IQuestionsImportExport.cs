using System;
using System.Data;
using System.IO;

namespace PerftEvaluation.Interfaces
{
    public interface IQuestionsImportExport
    {
        Stream ExportDataSet(DataSet ds);
        DataSet ReadExcel(Stream fileStream, bool readAllSheets);
    }
}
