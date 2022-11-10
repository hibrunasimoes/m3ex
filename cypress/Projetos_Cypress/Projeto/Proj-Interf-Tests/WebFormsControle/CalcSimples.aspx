<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CalcSimples.aspx.cs" Inherits="WebFormsControle.CalcSimples" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <br />
        <br />
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-1" style="border-bottom-style:solid"></div>
            <div class="col-sm-1" style="border-bottom-style:solid">CALCULO</div>
            <div class="col-sm-1" style="border-bottom-style:solid"></div>
            <div class="col-sm-1" ></div>
            <div class="col-sm-1" style="border-bottom-style:solid">FÓRMULA</div>
            <div class="col-sm-1" ></div>
            <div class="col-sm-1" style="border-bottom-style:solid">RESULTADO</div>
        </div>
         <br />
        <div class="row">
           
            <div class="col-sm-1"></div>
            <div class="col-sm-1">
                    <asp:TextBox ID="txtN1" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
            </div>
            <div class="col-sm-1 form-check">
                <asp:RadioButtonList ID="rbFuncao" runat="server">
                    <asp:ListItem id="mais" Selected="true" Value="+" >Soma</asp:ListItem>
                    <asp:ListItem id="menos" Value="-" >Subtr.</asp:ListItem>
                    <asp:ListItem id="vezes" Value="*">Multipl.</asp:ListItem>
                    <asp:ListItem id="dividir" Value="/">Divisão</asp:ListItem>
                </asp:RadioButtonList>
            </div>
            <div class="col-sm-1">
                    <asp:TextBox ID="txtN2" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-1">
                <asp:Label ID="lbFormulaCalculo" runat="server"></asp:Label>
            </div>
            <div class="col-sm-1">=</div>
            <div class="col-sm-1">
                <asp:Label ID="lbResultado" runat="server"></asp:Label>
            </div>
            <div class="col-sm-1">
                <asp:Button ID="btnCalcular" runat="server" class="btn btn-success" Text="Calcular" OnClick="btnCalcular_Click" Width="100%" />
            </div>
            <div class="col-sm-1">
                <asp:Button ID="btnLimpar" runat="server" class="btn btn-secondary" Text="Limpar" OnClick="btnLimpar_Click" Width="100%" />
            </div>
        </div>
    </form>
</body>
</html>
