var pessoa =  require("./commons/pessoa");
var soma =  require("./commons/soma");
var imposto =  require("./commons/calculaImposto");


vitor=pessoa();

// console.log(JSON.stringify(vitor))
// console.log(soma(2,3));

console.log('Valor do produto com imposto: R$ '+imposto.adicionar(10));
console.log('Valor do imposto: '+imposto.valor(10));
console.log('Taxa do imposto: '+imposto.taxa+" %");
