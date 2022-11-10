using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebFormsControle
{
    public partial class ControleEntradasSaidas : System.Web.UI.Page
    {
        
        private List<Dados> _EntradasSaidas = new List<Dados>();

        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
                return;


        }

        protected void btnNovaEntradaSaida_Click(object sender, EventArgs e)
        {
           

            if(txtN1.Text !="" && txtV1.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN1.Text;
                novoDado.valor = Convert.ToInt32(txtV1.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if (txtN2.Text != "" && txtV2.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN2.Text;
                novoDado.valor = Convert.ToInt32(txtV2.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if (txtN3.Text != "" && txtV3.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN3.Text;
                novoDado.valor = Convert.ToInt32(txtV3.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if (txtN4.Text != "" && txtV4.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN4.Text;
                novoDado.valor = Convert.ToInt32(txtV4.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if (txtN5.Text != "" && txtV5.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN5.Text;
                novoDado.valor = Convert.ToInt32(txtV5.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if (txtN6.Text != "" && txtV6.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN6.Text;
                novoDado.valor = Convert.ToInt32(txtV6.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if (txtN7.Text != "" && txtV7.Text != "")
            {
                Dados novoDado = new Dados();
                novoDado.id = _EntradasSaidas.Count() + 1;
                novoDado.nome = txtN7.Text;
                novoDado.valor = Convert.ToInt32(txtV7.Text);

                _EntradasSaidas.Add(novoDado);
            }
            if(_EntradasSaidas.Count() > 0)
            {
                lbVTotal.Text = "Valor Total: " + _EntradasSaidas.Sum(p => p.valor).ToString();
                ChamaGrid();
            }
        }

        protected void btnLimpar_Click(object sender, EventArgs e)
        {
            txtN1.Text = "";
            txtV1.Text = null;
            txtN2.Text = "";
            txtV2.Text = null;
            txtN3.Text = "";
            txtV3.Text = null;
            txtN4.Text = "";
            txtV4.Text = null;
            txtN5.Text = "";
            txtV5.Text = null;
            txtN6.Text = "";
            txtV6.Text = null;
            txtN7.Text = "";
            txtV7.Text = null;
            lbVTotal.Text = "";

            _EntradasSaidas = new List<Dados>();
            ChamaGrid();
        }

        private void ChamaGrid()
        {
            gvdadosControle.DataSource = _EntradasSaidas;
            gvdadosControle.DataBind();
        }
    }
}