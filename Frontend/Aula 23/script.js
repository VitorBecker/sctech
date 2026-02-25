const carros = ["T-cross", "Uno", "Onix", "Gurgel", "Puma"];
const conteudo = document.getElementById("conteudo");

const titulo = document.createElement("h2");
titulo.textContent = "Carros da Lista";
conteudo.appendChild(titulo);

let i = 0;


function mostrarCarro() {
    if (i < carros.length) {
        const p = document.createElement("p");
        p.textContent = carros[i];
        conteudo.appendChild(p);
        i++;
    }

    // desabilita o botão caso não tenha mais carros para apresentar
    if (i >= carros.length) {
        botaoProximo.disabled = true;
        botaoProximo.textContent = "Todos os carros exibidos";
    }
}


const botaoProximo = document.createElement("button");
botaoProximo.textContent = "Próximo";
botaoProximo.addEventListener("click", mostrarCarro);


document.body.appendChild(botaoProximo);
