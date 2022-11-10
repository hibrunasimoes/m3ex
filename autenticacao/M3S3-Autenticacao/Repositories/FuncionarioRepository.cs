using autenticacao.Dtos;
using autenticacao.Models;
using M3S3_Autenticacao.Converters;
using M3S3_Autenticacao.Dtos;
using M3S3_Autenticacao.Enums;

namespace autenticacao.Repositories
{
    public static class FuncionarioRepository
    {
        private static List<FuncionarioModel> usuarios = new List<FuncionarioModel>{

            new FuncionarioModel{
                Id = 1,
                Email = "vitor@gmail.com",
                Nome = "Vitor",
                Senha = "123",
                Salario = 15000.18m,
                Permissao = Permissoes.Administrador
            }
       };

        public static FuncionarioModel? ObterPorUsuarioESenha(UserDto dto)
        {
            var user = usuarios.FirstOrDefault
            (x => x.Email == dto.Email && x.Senha == dto.Senha);

            return user;
        }

        public static List<FuncionarioModel> Listar()
        {
            return usuarios;
        }

        public static void Adicionar(CadastrarFuncionarioDto dto)
        {
            var model = FuncionarioConverter.ToModel(dto);
            model.Id = GerarId();
            usuarios.Add(model);
        }

        public static void Excluir(int id)
        {
            var model = usuarios.FirstOrDefault(x => x.Id == id);

            if (model != null)
                usuarios.Remove(model);
        }

        private static int GerarId()
        {
            return usuarios.Last().Id + 1;
        }
    }
}