// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', function() {

    // menu hamburguer
    const menuToggle = document.getElementById('menuHamburguer');
    const nav = document.getElementById('nav');
    const links = document.querySelectorAll('#nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });

    // Mostra e esconde o menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active'); 
        });
    }

    // formulário
    const form = document.getElementById('contato-form');
    const mensagemRetorno = document.getElementById('form-mensagem');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const msg = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || msg === '') {
                mensagemRetorno.textContent = 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).';
                mensagemRetorno.style.color = 'red';
                return;
            }

            mensagemRetorno.textContent = 'Mensagem enviada com sucesso!';
            mensagemRetorno.style.color = 'green';

            form.reset();

            // Remove a mensagem de sucesso após uns segundos
            setTimeout(() => {
                mensagemRetorno.textContent = '';
            }, 3000);
        });
    }

});