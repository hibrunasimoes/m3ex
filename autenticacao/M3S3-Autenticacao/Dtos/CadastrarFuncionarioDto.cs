using M3S3_Autenticacao.Enums;

namespace M3S3_Autenticacao.Dtos
{
    public class CadastrarFuncionarioDto
    {
        public string Email { get; set; }
        public string Nome { get; set; }
        public Permissoes Permissao { get; set; }
        public decimal Salario { get; set; }
        public string Senha { get; set; }
    }
}