using System;
using System.Collections.Generic;

namespace PerftEvaluation.EmailServer
{   
    /// <summary>
    /// DTO to set configure email
    /// </summary>
    public class EmailDTO
    {
        public string Body { get; set; }
        public string Subject { get; set; }

        public List<string> ToEmails { get; set; }
        public List<string> CcEmails { get; set; }
        public List<string> BccEmails { get; set; }

        public bool IsHtmlBody {get;set;} 
        
    }
}
