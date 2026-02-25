

const inputTarefa = document.getElementById('campoTarefa');
const botao = document.getElementById('botaoAdicionar');
const lista = document.getElementById('listaTarefas');

// 3. Função que manipula o DOM para adicionar a tarefa
function adicionarTarefa() {
    const textoTarefa = inputTarefa.value;

    // Verifica se o usuário não tentou adicionar algo vazio e cria um li
    if (textoTarefa.trim() !== "") {

        const novaLinha = document.createElement('li');
        novaLinha.textContent = textoTarefa;

        // adiciona na lista
        lista.appendChild(novaLinha);

        // linpar o campo de digitação após adicionar
        inputTarefa.value = "";
        inputTarefa.focus();
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

// clique para acionar função
botao.addEventListener('click', adicionarTarefa);

// tarefa adicionada ao apertar enter
inputTarefa.addEventListener('keypress', function (evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});