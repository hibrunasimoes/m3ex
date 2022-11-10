<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ControleEntradasSaidas.aspx.cs" Inherits="WebFormsControle.ControleEntradasSaidas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<head runat="server">
    <title>Controle de Entradas e Saidas</title>
</head>
<body>
    <form id="form1" runat="server">
            <br />
            <br />
            <%--Grid e Novo registro--%>
            <div class="row">
                <div class="col-sm-1"></div>
                <%--Grid--%>
                <div class="col-sm-3">
                    <asp:GridView ID="gvdadosControle" runat="server" 
                        Width="100%" AutoGenerateColumns="False" DataKeyNames="id">
                        <Columns>
                            <asp:TemplateField HeaderText="Cod.">
                                <ItemTemplate><p id="pCod"><%#Eval("id") %></p></ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Nome">
                                <ItemTemplate><p id="pNome"><%#Eval("nome") %></p></ItemTemplate>
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Valor">
                                <ItemTemplate><p id="pValor"><%#Eval("valor") %></p></ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                    <asp:Label ID="lbVTotal" runat="server"></asp:Label>
                </div>
                <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 1</a>
                    <br />
                    <br />
                    <asp:Label ID="Label4" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN1" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label5" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV1" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>
                <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 2</a>
                    <br />
                    <br />
                    <asp:Label ID="Label1" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN2" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label2" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV2" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>
                 <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 3</a>
                    <br />
                    <br />
                    <asp:Label ID="Label3" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN3" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label6" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV3" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>
                <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 4</a>
                    <br />
                    <br />
                    <asp:Label ID="Label7" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN4" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label8" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV4" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>
                <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 5</a>
                    <br />
                    <br />
                    <asp:Label ID="Label9" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN5" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label10" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV5" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>
                <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 6</a>
                    <br />
                    <br />
                    <asp:Label ID="Label11" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN6" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label12" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV6" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>
                <div class="col-sm-1">
                    <a style="font-weight: bolder">REGIST. 7</a>
                    <br />
                    <br />
                    <asp:Label ID="Label13" runat="server" Text="Nome"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtN7" runat="server" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                     <asp:Label ID="Label14" runat="server" Text="Valor"></asp:Label>
                    <br />
                    <asp:TextBox ID="txtV7" runat="server" type="number" Width="100%"></asp:TextBox>
                    <br />
                    <br />
                </div>

                
                <div class="col-sm-1"></div>
            </div>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-7">
                    <asp:Button ID="btnNovaEntradaSaida" runat="server" class="btn btn-success" Text="Enviar" OnClick="btnNovaEntradaSaida_Click" Width="100%" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-7">
                <br />
                <asp:Button ID="btnLimpar" runat="server" class="btn btn-secondary" Text="Limpar" OnClick="btnLimpar_Click" Width="100%" />
            </div>
        </div>
            


    </form>
</body>
</html>
