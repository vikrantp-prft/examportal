using System;
using PerftEvaluation.BAL.Interfaces;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Web;

namespace PerftEvaluation.ExcelUtility
{
    public class ExcelOperations : IQuestionsImportExport
    {
        #region Variable declaration

        string cellValue = string.Empty;
        string columnName = string.Empty;

        #endregion Variable declaration

        public DataSet ReadExcel(Stream fileStream, bool readAllSheets)
        {
            DataSet dsExcelSheets = new DataSet();

            DataTable dt;

            try
            {
                using (SpreadsheetDocument spreadSheetDocument = SpreadsheetDocument.Open(fileStream, true))
                {

                    WorkbookPart workbookPart = spreadSheetDocument.WorkbookPart;
                    IEnumerable<Sheet> sheets = spreadSheetDocument.WorkbookPart.Workbook.GetFirstChild<Sheets>().Elements<Sheet>();
                    string relationshipId = sheets.First().Id.Value;
                    WorksheetPart worksheetPart = (WorksheetPart)spreadSheetDocument.WorkbookPart.GetPartById(relationshipId);
                    
                    // Get the valid sheets with data.
                    IEnumerable<OpenXmlElement> workSheet = worksheetPart.Worksheet.Where(w=> w.GetType() == typeof(SheetData));

                    foreach (SheetData currentSheet in workSheet)
                    {
                        dt = new DataTable();

                        dt = ConvertExcelSheetInDataTable(spreadSheetDocument, currentSheet);

                        dsExcelSheets.Tables.Add(dt);
                    }

                    // SheetData sheetData = workSheet.GetFirstChild<SheetData>();
                }
            }

            catch
            {
                throw;
            }
            return dsExcelSheets;
        }

        public Stream ExportDataSet(DataSet ds)
        {
            MemoryStream fileStream = new MemoryStream();

            string str = null;
            OpenSettings openSettings = new OpenSettings();

            using (var workbook = SpreadsheetDocument.Create(fileStream, DocumentFormat.OpenXml.SpreadsheetDocumentType.Workbook))
            {
                workbook.AddWorkbookPart();

                workbook.WorkbookPart.Workbook = new Workbook();
                workbook.WorkbookPart.Workbook.Sheets = new Sheets();
                Sheets sheets = workbook.WorkbookPart.Workbook.GetFirstChild<Sheets>();
                uint sheetId = 1;

                foreach (System.Data.DataTable table in ds.Tables)
                {
                    var sheetPart = workbook.WorkbookPart.AddNewPart<WorksheetPart>();
                    string relationshipId = workbook.WorkbookPart.GetIdOfPart(sheetPart);

                    string strTemp = table.TableName;
                    if (strTemp.Count() > 30)
                    {
                        strTemp = strTemp.Substring(0, 30) + "_";
                    }

                    Sheet sheet = new Sheet() { Id = relationshipId, SheetId = sheetId, Name = strTemp };

                    // Sheet sheet = new Sheet() { Id = relationshipId, SheetId = sheetId, Name = "123" + sheetId };
                    sheets.Append(sheet);

                    var sheetData = new SheetData();
                    sheetPart.Worksheet = new Worksheet(sheetData);

                    if (sheets.Elements<Sheet>().Count() > 0)
                    {
                        sheetId = sheets.Elements<Sheet>().Select(s => s.SheetId.Value).Max() + 1;
                    }

                    Row headerRow = new Row();

                    List<String> columns = new List<string>();
                    foreach (System.Data.DataColumn column in table.Columns)
                    {
                        columns.Add(column.ColumnName);

                        Cell cell = new Cell();
                        cell.DataType = CellValues.String;
                        //cell.DataType = CellValues.InlineString;
                        //cell.InlineString = new InlineString() { Text = new Text(column.ColumnName) };

                        cell.CellValue = new CellValue(column.ColumnName);
                        headerRow.AppendChild(cell);
                    }


                    sheetData.AppendChild(headerRow);

                    foreach (System.Data.DataRow dsrow in table.Rows)
                    {
                        Row newRow = new Row();
                        foreach (String col in columns)
                        {
                            try
                            {
                                Cell cell = new Cell();
                                cell.DataType = CellValues.String;
                                str = Convert.ToString(dsrow[col]).Replace("\0", "");

                                cell.CellValue = new CellValue(HttpUtility.HtmlDecode(str)); //
                                newRow.AppendChild(cell);
                            }
                            catch { }
                        }

                        sheetData.AppendChild(newRow);
                    }
                    sheetId++;
                }

                workbook.Close();
            }
            return fileStream;
        }

        #region Private Methods

        private DataTable ConvertExcelSheetInDataTable(SpreadsheetDocument document, SheetData sheetData)
        {
            DataTable dt = new DataTable();

            IEnumerable<Row> rows = sheetData.Descendants<Row>();
            DataRow tempRow = null;
            int columnIndex = 0;

            foreach (Cell cell in rows.ElementAt(0))
            {
                try
                {
                    columnName = GetCellValue(document, cell);
                    dt.Columns.Add(columnName);
                }
                catch (DuplicateNameException ex) // if there are columns with same name then create new column with different name
                {
                    dt.Columns.Add(columnName + columnIndex++); // Add incremental column name just to keep some uniqueness. 
                }
                catch { }
            }

            foreach (Row row in rows) //this will also include your header row...
            {
                tempRow = dt.NewRow();

                for (int i = 0; i < row.Descendants<Cell>().Count(); i++)
                {
                    tempRow[i] = GetCellValue(document, row.Descendants<Cell>().ElementAt(i));
                }

                dt.Rows.Add(tempRow);
            }

            dt.Rows.RemoveAt(0); // taking first row of columne names out here.

            return dt;
        }

        private string GetCellValue(SpreadsheetDocument document, Cell cell)
        {
            SharedStringTablePart stringTablePart = document.WorkbookPart.SharedStringTablePart;
            if (cell.CellValue == null)
            {
                return string.Empty;
            }
            cellValue = cell.CellValue.InnerXml;

            if (cell.DataType != null && cell.DataType.Value == CellValues.SharedString)
            {
                return stringTablePart.SharedStringTable.ChildElements[Int32.Parse(cellValue)].InnerText;
            }
            else
            {
                return cellValue;
            }
        }

        #endregion Private Methods
    }
}
