class produto {
  constructor(nome, preco) {
    this.nome = nome;
  this.preco = preco;
  }

  mostrarDetalhes() {
        console.log(`O produto é o/a ${this.nome} e o preco é R$ ${this.preco}.`);
  }
}

const produto1 = new produto("Café", "19,90");
const produto2 = new produto("Cadeira Gamer", "1.200,50");
console.log("--- Detalhes do Produto ---");
produto1.mostrarDetalhes();
console.log("--- Detalhes do Produto ---");
produto2.mostrarDetalhes();



// Criar a classe Eletronico que herda de Produto e adicionar Garantia
class eletronico extends produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        this.garantia = garantia;
    }

    // 5. Sobrescrever o método mostrarDetalhes para incluir a garantia
    mostrarDetalhes() {
        console.log(`O produto é o/a ${this.nome}, o preco é de R$ ${this.preco} e a garantia é de ${this.garantia} meses.`);  
    }
}

// 6. Instanciar um objeto de Eletronico e chamar o método
const eletronico1 = new eletronico("Smartphone S24", "4.500,00", "12");
console.log("--- Detalhes do Produto ---");
eletronico1.mostrarDetalhes();