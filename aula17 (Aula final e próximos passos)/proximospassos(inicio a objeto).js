/* PRÓXIMOS PASSOS:

1) Fazer curso de HTML5 e CSS
2) Estudar sobre Functions (funções)
    2.1) Arrow Functions, callbacks, funções anônimas, iife
3) Estudar Objetos
4) Modularização
5) Expressões regulares (RegEx)
6) JSON
7) AJAX (rolagem infinita)
8) NodeJS
9) Frameworks e bibliotecas
*/
//Início a objeto:
let amigo = {nome: 'Jose', sexo: 'M', peso: 85.4, engordar(p=0){
    console.log('Engordou')
    this.peso+=p
}} // no objeto é usado entre {}, ele também pode receber uma função como atributo

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)