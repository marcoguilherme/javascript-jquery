
//Carregamento automatico
$(calcularTotal);

//Enviar formulario
$("#formProdutos").submit(function(e){
    e.preventDefault();
    
    var indexCarrinho = $(".indexCarrinho");
    var codigo = $("#txtCodigo").val();
    var produto = $("#txtProduto").val();
    var quantidade = $("#txtQuantidade").val();
    var valorProduto = $("#txtValor").val();

    var novo = "<tr><td class='indexCarrinho'>" + (indexCarrinho.length + 1) 
                + "</td><td>" + codigo 
                + "</td><td>" + produto 
                + "</td><td>" + quantidade
                +" </td><td class='valor-item'>" + valorProduto 
                + "</td>"
                +"<td><a href='#' class='btn btn-danger btnRemover'>X remover</a></td></tr>";

    $("#conteudo-carrinho").append(novo);
    calcularTotal();

    $("#txtCodigo").val("");
    $("#txtProduto").val("");
    $("#txtQuantidade").val("");
    $("#txtValor").val("");

});

//Calcula total do carrindo
function calcularTotal(){
    var valorItem = $(".valor-item:visible");

    var total = 0;

    for(var i = 0; i < valorItem.length; i++){
        
        var valor = $(valorItem[i]).text();
        var preco = parseFloat(valor);
        total += preco;

        $("#valor-total").text(total.toFixed(2));
        $("#total-itens").text(valorItem.length);
    }
}

//Remove produto do carrinho
$(".btnRemover").click(removeItem);

//Desfaz remoção do carrinho
$("#btnDesfazer").click(desfazItem);

//Hover na tr - Aparecer conteudo
$(".carrinho tbody tr").hover(addDestaque, removeDestaque);

//Hover no botão remover - Add
function addDestaque(){
    $(this).find(".btnRemover").css({opacity: 1.0});
}
//Hover no botão remover - Remove
function removeDestaque(){
    $(this).find(".btnRemover").css({opacity: 0.2});
}


//Função para remover do carrinho
function removeItem(e){
    e.preventDefault();
    var self = $(this);
    self.closest("tr").hide();
    calcularTotal();
}

//Função para adicionar ao carrinho novamente
function desfazItem(e){
    e.preventDefault();
    var trsOcultos = $("tr:hidden");
    trsOcultos.show();
    calcularTotal();
}