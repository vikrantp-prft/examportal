using System;
using System.Collections.Generic;
using System.Timers;
using PerftEvaluation.BAL.Interfaces.Exams.ExamSession;
using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Services.ExamSession
{
    public class ExamTimerHandler
    {
        private static Timer examTimer;
        private static IExamUserSessionStorage _storageHandler;
        public ExamTimerHandler(IExamUserSessionStorage storageHandler)
        {
            _storageHandler = storageHandler;
            examTimer = this.GetTimerObject;
        }

        private Timer GetTimerObject
        {
            get
            {
                if (examTimer == null)
                {
                    examTimer = new Timer();
                    SetTimer();
                    examTimer.Start();
                }
                return examTimer;
            }
        }

        private static void SetTimer()
        {
            // Create a timer with a two second interval.
            examTimer = new System.Timers.Timer(2000);
            // Hook up the Elapsed event for the timer. 
            examTimer.Elapsed += OnTimedEvent;
            // examTimer.AutoReset = true;
            examTimer.Enabled = true;
        }
        private static void OnTimedEvent(Object source, ElapsedEventArgs e)
        {

            List<ExamUserSession> userExamSessions = _storageHandler.GetExamSessionCollection();

            foreach (ExamUserSession examTimer in userExamSessions)
            {
                examTimer.TimeElampsed = examTimer.TimeElampsed.AddSeconds(-10);
            }

            _storageHandler.UpdateCollection(userExamSessions);

        }

        // Update database for timer. 

    }
}