using System;
using Microsoft.Extensions.Configuration;

namespace PerftEvaluation.Identity.Utilies
{
    /// <summary>
    /// Helper file all email related operation
    /// </summary>
    public class EmailHelper
    {
        readonly IConfiguration _configuration;
        public EmailHelper(IConfiguration Configuration)
        {
            this._configuration = Configuration;
        }

        /// <summary>
        /// Get html string from html file
        /// </summary>
        /// <param name="templateName"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Replace display name for user in email
        /// </summary>
        /// <param name="displayValue"></param>
        /// <param name="templateText"></param>
        /// <returns></returns>
        internal string ReplaceDisplayName(string displayValue, string templateText)
        {
            if(!string.IsNullOrEmpty(templateText))
            {
                templateText = templateText.Replace("<UserDisplayNameKey>", displayValue);
            }

            return templateText;
        }

        /// <summary>
        /// Replace emailkey in email text with actual value
        /// </summary>
        /// <param name="email"></param>
        /// <param name="templateText"></param>
        /// <returns></returns>
        internal string ReplaceUserEmailKey(string email, string templateText)
        {
            if(!string.IsNullOrEmpty(templateText))
            {
                templateText = templateText.Replace("<UserEmailKay>", email);
            }

            return templateText;
        }

        /// <summary>
        /// Replace passwordkey in emial text
        /// </summary>
        /// <param name="password"></param>
        /// <param name="templateText"></param>
        /// <returns></returns>
        internal string ReplacePasswordKey(string password, string templateText)
        {
            if(!string.IsNullOrEmpty(templateText))
            {
                templateText = templateText.Replace("<PasswordKey>", password);
            }

            return templateText;
        }
    }

    /// <summary>
    /// Centralize class for all email templates name
    /// </summary>
    public class EmailTemplatePath
    {
        public static string ResetCredentialsAck { get { return "ResetCredentialsAck.html"; } }
    }

    /// <summary>
    /// Centralize class for all email subjects
    /// </summary>
    public class EmailSubjects
    {      
         public static string ResetCredentialsAck { get { return "Credentials Reset Successfully"; } }
    }
}
