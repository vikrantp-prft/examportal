using System;
using System.Net;
using System.Net.Mail;
using PerftEvaluation.EmailServer.Interfaces;

namespace PerftEvaluation.EmailServer {
    public class EmailService : IEmailService {
        #region Declarations
        #endregion
        private const int Port = 587;

        private const string Host = "smtp.gmail.com";
        private const string UserName = "exam.portal.v1@gmail.com";
        private const string Password = "Admin@123";
        private const string From = "no-reply@perficient.com";
        private const string DisplayName = "Perficient Inc.";
        /// <summary>
        /// Send email from system
        /// </summary>
        /// <param name="emailDTO"></param>
        /// <returns></returns>
        public bool Send (EmailDTO emailDTO) {
            try {
                SmtpClient client = new SmtpClient (Host.Trim ());
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential (UserName.Trim (), Password.Trim ());
                client.Port = Port;
                client.EnableSsl = true;
                MailMessage mailMessage = new MailMessage ();
                mailMessage.From = new MailAddress (From.Trim (), DisplayName);

                if (emailDTO.ToEmails != null) {
                    foreach (var email in emailDTO.ToEmails) {
                        if (mailMessage.To.IndexOf (new MailAddress (email)) == -1)
                            mailMessage.To.Add (new MailAddress (email));
                    }
                }

                if (emailDTO.CcEmails != null) {
                    foreach (var email in emailDTO.CcEmails) {
                        if (mailMessage.CC.IndexOf (new MailAddress (email)) == -1)
                            mailMessage.CC.Add (new MailAddress (email));
                    }
                }

                if (emailDTO.BccEmails != null) {
                    foreach (var email in emailDTO.CcEmails) {
                        if (mailMessage.Bcc.IndexOf (new MailAddress (email)) == -1)
                            mailMessage.Bcc.Add (new MailAddress (email));
                    }
                }
                mailMessage.IsBodyHtml = emailDTO.IsHtmlBody;
                mailMessage.Body = emailDTO.Body;
                mailMessage.Subject = emailDTO.Subject;
                //client.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;
                //client.PickupDirectoryLocation = @"C:\ExamPortal-SentEmails";
                client.Send (mailMessage);

                return true;
            } catch (Exception ex) {
                throw ex;
            }
            //return false;
        }
    }
}