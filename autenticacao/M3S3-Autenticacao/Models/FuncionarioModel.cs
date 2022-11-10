using M3S3_Autenticacao.Enums;

namespace autenticacao.Models
{
    public class FuncionarioModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public Permissoes Permissao { get; set; }
        public decimal Salario { get; set; }
    }
}