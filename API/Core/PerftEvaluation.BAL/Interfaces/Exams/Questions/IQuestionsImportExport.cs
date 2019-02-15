using System.Data;
using System.IO;

namespace PerftEvaluation.BAL.Interfaces
{
    public interface IQuestionsImportExport
    {
           Stream ExportDataSet(DataSet ds);
           DataSet ReadExcel(Stream fileStream, bool readAllSheets);
    }
}