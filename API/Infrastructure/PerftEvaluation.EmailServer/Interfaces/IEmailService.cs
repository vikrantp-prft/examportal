using System;

namespace PerftEvaluation.EmailServer.Interfaces
{
    /// <summary>
    /// Interface for all email services
    /// </summary>
    public interface IEmailService
    {
        bool Send(EmailDTO emailDTO);
    }
}
