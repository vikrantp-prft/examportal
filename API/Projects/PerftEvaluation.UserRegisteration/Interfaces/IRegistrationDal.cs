using PerftEvaluation.UserRegisteration.BMEntities;

namespace PerftEvaluation.UserRegisteration.Interfaces
{
    public interface IRegistrationDal
    {
         void RegisterNewUser(User user);
    }
}