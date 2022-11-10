using autenticacao.Atributos;
using autenticacao.Repositories;
using M3S3_Autenticacao.Dtos;
using M3S3_Autenticacao.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace autenticacao.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {

        [HttpPost]
        [Route("cadastrar")]
        [Authorize("gerente")]
        public IActionResult Cadastrar([FromBody] CadastrarFuncionarioDto dto)
        {
            FuncionarioRepository.Adicionar(dto);

            return Created("", dto);
        }

        [HttpGet]
        [Route("listar")]
        [PermissaoAuthorize(Permissoes.Administrador)]
        public IActionResult Listar()
        {
            var lista = FuncionarioRepository.Listar();
            return Ok(lista);
        }
    }
}
