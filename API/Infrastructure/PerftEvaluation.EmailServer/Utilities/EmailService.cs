using System;
using System.Net;
using System.Net.Mail;
using PerftEvaluation.EmailServer.Interfaces;
//using Microsoft.Extensions.Configuration;

namespace PerftEvaluation.EmailServer
{
    public class EmailService : IEmailService
    {
        //readonly IConfiguration _configuration;
        private const string Host = "localhost";// "smtp.gmail.com";
        private const string Username = "pallavi.koramkar@gmail.com";
        private const string Password = "";
        private const string From = "no-reply@perficient.com";



        public bool Send(EmailDTO emailDTO)
        {
            try
            {

                SmtpClient client = new SmtpClient(Host);
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(Username, Password);

                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress(From);
                if (emailDTO.ToEmails != null)
                {
                    foreach (var email in emailDTO.ToEmails)
                    {
                        if (mailMessage.To.IndexOf(new MailAddress(email)) == -1)
                            mailMessage.To.Add(new MailAddress(email));
                    }
                }

                if (emailDTO.CcEmails != null)
                {
                    foreach (var email in emailDTO.CcEmails)
                    {
                        if (mailMessage.CC.IndexOf(new MailAddress(email)) == -1)
                            mailMessage.CC.Add(new MailAddress(email));
                    }
                }

                if (emailDTO.BccEmails != null)
                {
                    foreach (var email in emailDTO.CcEmails)
                    {
                        if (mailMessage.Bcc.IndexOf(new MailAddress(email)) == -1)
                            mailMessage.Bcc.Add(new MailAddress(email));
                    }
                }
               
                mailMessage.Body = emailDTO.Body;
                mailMessage.Subject = emailDTO.Subject;
                client.Send(mailMessage);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            //return false;
        }
    }
}
