using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using PerftEvaluation.BAL.Interfaces.Exams.ExamSession;
using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Services.ExamSession
{
    public class ExamUserSessionCacheStore : IExamUserSessionStorage
    {
        private IMemoryCache _cache;
        List<ExamUserSession> userSessionsCollection;
        MemoryCacheEntryOptions cacheEntryOptions;
        private const string CACHEKEY_RUNNING_SESSIONS = "RUNNINGSESSIONS";

        public ExamUserSessionCacheStore(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
            cacheEntryOptions = new MemoryCacheEntryOptions();
            cacheEntryOptions.SetSlidingExpiration(TimeSpan.FromHours(1));
        }

        public bool CreateNewSession(ExamUserSession newUserSessionEntry)
        {
            bool isScucess;
            List<ExamUserSession> userSessionsCollection;
            userSessionsCollection = GetExamSessionCollection();
            newUserSessionEntry.SessionId = GetExamSessionId(newUserSessionEntry.UserId, newUserSessionEntry.ExamId);
            ExamUserSession existingUserSession = GetUserExamSession(newUserSessionEntry.UserId, newUserSessionEntry.ExamId);

            // If at all there is a session exist for a user then reset the timer and start again.
            // Scenario may happen if user close the browser and start again the same exam below his session actually dia grom memory. 
            // Closing browser should not actually allow user to start over the same exam without Admin allow to do so from admin panel.  
            if (existingUserSession != null)
            {
                existingUserSession = newUserSessionEntry;
            }
            else
            {
                newUserSessionEntry.TimeElampsed = 1;
                userSessionsCollection.Add(newUserSessionEntry);
            }

            isScucess = UpdateCollection(userSessionsCollection);

            return isScucess;
        }
        public bool UpdateCollection(List<ExamUserSession> userSessionsCollection)
        {
            userSessionsCollection = _cache.Set(CACHEKEY_RUNNING_SESSIONS, userSessionsCollection, cacheEntryOptions);

            if (userSessionsCollection == null)
                return false;
            else
                return true;
        }

        public List<ExamUserSession> GetExamSessionCollection()
        {
            if (!_cache.TryGetValue(CACHEKEY_RUNNING_SESSIONS, out userSessionsCollection))
            {
                // Add warning with message = user exam storage collection not found so creating new. 
                // This should happen only once after starting or restaring application.  
                userSessionsCollection = new List<ExamUserSession>();
            }

            return userSessionsCollection;
        }

        public bool DeleteSessionEntry(string userId, string examId)
        {
            bool isSuccess = false;

            ExamUserSession userSession = GetUserExamSession(userId, examId);
            if (userSession != null)
            {
                isSuccess = userSessionsCollection.Remove(userSession);
                if (isSuccess)
                    UpdateCollection(userSessionsCollection);
            }

            return isSuccess;
        }

        public ExamUserSession GetUserExamSession(string userId, string examId)
        {
            string sessionId = GetExamSessionId(userId, examId);
            userSessionsCollection = GetExamSessionCollection();
            ExamUserSession userSession = userSessionsCollection.Find(e => e.SessionId == sessionId);

            return userSession;
        }

        private string GetExamSessionId(string userId, string examId)
        {
            return userId + "_" + examId;
        }
    }
}