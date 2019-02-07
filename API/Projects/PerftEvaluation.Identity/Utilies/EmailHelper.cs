using System;
using Microsoft.Extensions.Configuration;

namespace PerftEvaluation.Identity.Utilies
{
    public class EmailHelper
    {
        readonly IConfiguration _configuration;
        public EmailHelper(IConfiguration Configuration)
        {
            this._configuration = Configuration;
        }

        internal string GetTemplate(string templateName)
        {
            try
            {
                string path = String.Format("{0}{1}", _configuration.GetValue<String>("EmailTemplates:FolderPath"), templateName);
                var templateHtml = System.IO.File.ReadAllText(path);
                return templateHtml;
            }
            catch
            {
                return string.Empty;
            }

        }
    }

    public class EmailTemplatePath
    {
        public static string ResetCredentialsAck { get { return "ResetCredentialsAck.html"; } }
    }

    public class EmailSubjects
    {      
         public static string ResetCredentialsAck { get { return "Credentials Reset Successfully"; } }
    }
}
