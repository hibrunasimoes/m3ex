using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebFormsControle
{
    public partial class CalcSimples : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
                return;
        }

        protected void btnCalcular_Click(object sender, EventArgs e)
        {
            if(txtN1.Text != "" && txtN2.Text != "")
            {
                lbFormulaCalculo.Text = txtN1.Text + " " + rbFuncao.SelectedValue + " " + txtN2.Text;
                if(rbFuncao.SelectedValue == "+")
                    lbResultado.Text = (Convert.ToInt32(txtN1.Text) + Convert.ToInt32(txtN2.Text)).ToString();
                if (rbFuncao.SelectedValue == "-")
                    lbResultado.Text = (Convert.ToInt32(txtN1.Text) - Convert.ToInt32(txtN2.Text)).ToString();
                if (rbFuncao.SelectedValue == "*")
                    lbResultado.Text = (Convert.ToInt32(txtN1.Text) * Convert.ToInt32(txtN2.Text)).ToString();
                if (rbFuncao.SelectedValue == "/")
                    lbResultado.Text = (Convert.ToInt32(txtN1.Text) / Convert.ToInt32(txtN2.Text)).ToString();
            }

        }

        protected void btnLimpar_Click(object sender, EventArgs e)
        {
            txtN1.Text = "";
            txtN2.Text = "";
            lbFormulaCalculo.Text = "";
            lbResultado.Text = "";
            rbFuncao.SelectedValue = "+";
        }
    }
}