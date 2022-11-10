using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace M3S3_Autenticacao.Enums
{
    public enum Permissoes
    {
        [Display(Name= "Funcion�rio")]
        Funcionario,

        [Display(Name = "Gerente Geral")]
        Gerente,

        [Display(Name = "Administrador do Sistema")]
        Administrador,
    }
}