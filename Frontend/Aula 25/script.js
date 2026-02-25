
function pedidoRealizado(event) {
    event.preventDefault();
    

    let pedidoRealizado = document.getElementById('numeroPedido').value;
    let mensagem = "";

h
    switch (pedidoRealizado) {
        case "1":
            mensagem = "Você escolheu Pizza de Calabresa.";
            break;
        case "2":
            mensagem = "Você escolheu Pizza de 4 Queijos.";
            break;
        case "3":
            mensagem = "Você escolheu Pizza de Frango com Catupiry.";
            break;
        case "4":
            mensagem = "Você escolheu Pizza de Pizza de Brigadeiro.";
            break;
        default:
            mensagem = "Pedido inválido.";
    }      

document.getElementById('pedidoFinal').textContent = mensagem;

}










