
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('valor').addEventListener('input', mascaraValor);
    document.getElementById('desconto').addEventListener('input', mascaraPorcentagem);
});

// Máscara "valor"
function mascaraValor(event) {
    let input = event.target;
    let value = input.value;

    // apenas dígitos
    value = value.replace(/[^\d,]/g, '');

    // insere uma vírgula para permitir decimal
    let parts = value.split(',');
    if (parts.length > 2) {
        value = parts[0] + ',' + parts.slice(1).join('');
    }

    // Limita o decimal em 2 dígitos
    if (parts.length === 2) {
        let inteiro = parts[0].replace(/\D/g, '');
        let decimal = parts[1].replace(/\D/g, '').substring(0, 2);
        value = inteiro + ',' + decimal;
    } else {

        value = value.replace(/\D/g, '');
    }

    // máscara com pontos de milhar
    if (value.includes(',')) {
        let [inteiro, decimal] = value.split(',');
        inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        value = inteiro + ',' + decimal;
    } else {
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // coloca o cursor no final
    input.value = value;
    input.setSelectionRange(value.length, value.length);
}

// Máscara "desconto" em %
function mascaraPorcentagem(event) {
    let input = event.target;
    let value = input.value;

    value = value.replace(/[^\d,]/g, '');

    let parts = value.split(',');
    if (parts.length > 2) {
        value = parts[0] + ',' + parts.slice(1).join('');
    }

    if (parts.length === 2) {
        let inteiro = parts[0].replace(/\D/g, '');
        let decimal = parts[1].replace(/\D/g, '').substring(0, 2);
        value = inteiro + ',' + decimal;
    } else {

        value = value.replace(/\D/g, '');
    }

    // Formata a máscara com % (se houver conteúdo)
    if (value) {
        input.value = value + '%';
    } else {
        input.value = '';
    }

    // Posiciona o cursor antes do %
    let pos = value.length;
    input.setSelectionRange(pos, pos);
}


function calculaDesconto(event) {
    event.preventDefault();

    let valorOriginal = document.getElementById('valor').value;

    // Remove pontos de milhar e troca vírgula por ponto
    valorOriginal = valorOriginal.replace(/\./g, '').replace(',', '.');

    // Se não tiver ponto decimal, adiciona .00
    if (!valorOriginal.includes('.')) {
        valorOriginal += '.00';
    } else {
        // Se a parte decimal tiver só 1 dígito, completa com zero
        let parts = valorOriginal.split('.');
        if (parts[1].length === 1) {
            valorOriginal += '0';
        }
    }

    valorOriginal = parseFloat(valorOriginal);

    let porcentagemDesconto = document.getElementById('desconto').value;

    porcentagemDesconto = porcentagemDesconto.replace('%', '').replace(',', '.');

    porcentagemDesconto = parseFloat(porcentagemDesconto);

    if (isNaN(valorOriginal) || isNaN(porcentagemDesconto)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    let valorDoDesconto = (valorOriginal * porcentagemDesconto) / 100;
    let precoFinal = valorOriginal - valorDoDesconto;

    // Formatador para exibição em reais
    let formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    

    document.getElementById("resultado").innerHTML = 
        "O valor do desconto é " + formatador.format(valorDoDesconto);
    document.getElementById("valorComDesconto").innerHTML = 
        "O preço final é " + formatador.format(precoFinal);
}