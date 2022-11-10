using M3S3_Autenticacao.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Extensions;

namespace M3S3_Autenticacao.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RHController : ControllerBase
    {

        [HttpGet]
        [Route("Diretores")]
        [Authorize(Roles = "Diretor")]
        public IActionResult AcessoDiretores()
        {

            var name = User?.Identity?.Name;
            return Ok($"Bem-vindo, {name}. Área exclusiva de diretores");
        }

        [HttpGet]
        [Route("Professores")]
        [Authorize(Roles = "Professor,Diretor")]
        public IActionResult AcessoProfessores()
        {
            var ehDiretor = User.IsInRole(Permissoes.Funcionario.GetDisplayName());

            if (ehDiretor)
                return Ok("Área exclusiva de professores. Bem-vindo, diretor");
            else
                return Ok("Área exclusiva de professores, Bem-vindo Professor");

        }

    }
}