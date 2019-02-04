

using PerftEvaluation.UserRegisteration.BMEntities;
using PerftEvaluation.UserRegisteration.Interfaces;

namespace PerftEvaluation.UserRegisteration.Bal
{
    public class RegistrationBal : IRegistrationBal
    {
        private readonly IRegistrationDal _dal;

        public RegistrationBal(IRegistrationDal dal )
        {
            this._dal = dal;
        }
        public async void RegisterNewUser(User user)
        {
            _dal.RegisterNewUser(user);
        }
    }
}