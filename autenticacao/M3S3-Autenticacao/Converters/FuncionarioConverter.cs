using autenticacao.Models;
using M3S3_Autenticacao.Dtos;
using Microsoft.OpenApi.Extensions;

namespace M3S3_Autenticacao.Converters
{
    public static class FuncionarioConverter
    {
        public static CadastrarFuncionarioDto ToDto(FuncionarioModel model)
        {

            return new CadastrarFuncionarioDto
            {
                
                Email = model.Email,
                Nome = model.Nome,
                Permissao = model.Permissao

            };
        }

        public static FuncionarioModel ToModel(CadastrarFuncionarioDto dto)
        {
            return new FuncionarioModel
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Permissao = dto.Permissao,
                Salario = dto.Salario,
                Senha = dto.Senha
            };
        }
    }
}