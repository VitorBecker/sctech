// 1. Declaração da função com Promise e setTimeout
function carregarProduto(id) {
    return new Promise((resolve, reject) => {
        console.log(`Buscando produto com ID: ${id}...`);
        
        setTimeout(() => {
            const produto = [
                { id: 1, nome: "Teclado Mecânico RGB", preco: 350.00},
                { id: 2, nome: "Mouse Gamer", preco: 450.00},
            ]
            resolve(produto);
        }, 2000); // Simulando atraso de 2 segundos
    });
}


// 2. Invocação usando .then()
try {
    carregarProduto(1)
        .then(produto => {
            // Converte para JSON (String)
            const produtoJSON = JSON.stringify(produto);
            console.log("JSON:", produtoJSON);

            // Reverte para Objeto
            const objetoRevertido = JSON.parse(produtoJSON);
            console.log("Objeto Revertido:", objetoRevertido);
        })
        .catch(erro => console.error("Erro na Promise:", erro));
} catch (error) {
    console.error("Erro inesperado:", error);
}


// 3. Reescrita com Async/Await e Try/Catch
async function processarCarregamento(id) {
    try {
        const produtos = await carregarProduto(id); // Agora recebe a lista
        
        // Buscamos dentro da lista o produto que tem o ID igual ao solicitado
        const produtoEncontrado = produtos.find(p => p.id === id);

        console.log("--- Processamento Async/Await ---");
        
        if (produtoEncontrado) {
            console.log(`Produto carregado: ${produtoEncontrado.nome}`);
        } else {
            console.log("Produto não encontrado na lista.");
        }
        
    } catch (erro) {
        console.error("Falha ao carregar produto:", erro);
    }
}

// Chamando a função async
processarCarregamento(1);