const btnValidar = document.getElementById('btnValidar');

btnValidar.addEventListener('click', () => {

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^\d{10,11}$/;

    // Regex para Senha Forte: leta minúscula, maiúscula,
    // número, caract especial e 8 caracteres no mínimo
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    // Validação e Feedback
    validarCampo(regexEmail.test(email), 'msgEmail', 'E-mail inválido');
    validarCampo(regexTelefone.test(telefone), 'msgTelefone', 'Telefone inválido (use apenas números)');
    validarCampo(regexSenha.test(senha), 'msgSenha', 'Senha fraca (use: A, a, 1, @ e 8+ dígitos)');

    if (regexEmail.test(email) && regexTelefone.test(telefone) && regexSenha.test(senha)) {
        alert("Cadastro realizado com sucesso!");
    }
});

function validarCampo(condicao, idMsg, textoErro) {
    const elemento = document.getElementById(idMsg);
    elemento.textContent = condicao ? "" : textoErro;
}


//olhinho para ver a senha.
const toggleSenha = document.getElementById('toggleSenha');
const inputSenha = document.getElementById('senha');

toggleSenha.addEventListener('click', function () {

    const tipo = inputSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    inputSenha.setAttribute('type', tipo);
    
    // troca o olhinho..
    this.textContent = tipo === 'password' ? '👁️' : '🙈';
});



// barra de força da senha.
const barra = document.getElementById('barraForca');

inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value;
    
    // testes para cada requisito
    const temOitoCaracteres = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[@$!%*?&#]/.test(senha);

    // requisitos atendidos
    let requisitosAtendidos = 0;
    if (temOitoCaracteres) requisitosAtendidos++;
    if (temMaiuscula && temMinuscula) requisitosAtendidos++;
    if (temNumero) requisitosAtendidos++;
    if (temEspecial) requisitosAtendidos++;

    // remove as classes e o estilo
    barra.classList.remove('fraca', 'media', 'forte');
    
    //aplica as condições de senha forte/fraca.
    if (senha.length === 0) {
        barra.style.width = "0%";
    } else {
        if (requisitosAtendidos <= 2) {
            barra.classList.add('fraca');
        } else if (requisitosAtendidos >= 3 && requisitosAtendidos < 5) {
            barra.classList.add('media');
        } else if (requisitosAtendidos === 5) {
            barra.classList.add('forte');
        }
    }
});