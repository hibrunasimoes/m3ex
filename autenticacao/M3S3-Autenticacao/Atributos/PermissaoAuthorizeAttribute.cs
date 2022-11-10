using M3S3_Autenticacao.Enums;
using Microsoft.AspNetCore.Authorization;

namespace autenticacao.Atributos
{
    public class PermissaoAuthorizeAttribute : AuthorizeAttribute
    {
        public PermissaoAuthorizeAttribute(params object[] roles)
        {
            if (roles.Any(r => r.GetType().BaseType != typeof(Enum)))
                throw new ArgumentException("roles");

            this.Roles = string.Join(",", roles.Select(r => Enum.GetName(r.GetType(), r)));
        }
    }
}
