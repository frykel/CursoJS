let num = [5,8,4] //o índice sempre começa em zero --> num = [0 , 1 , 2]
//Variável composta (array) do tipo vetor
//array são objetos que contém múltiplos valores armazenados
//vetor é uma variável com vários espaços, composto de elementos: agrupa o espaço da memória, o valor dentro dele e o índice
//índice é também chamado de chave ou key.
/*"um array ou um vetor ou uma variável composta é uma variável que tem vários elementos,
cada elemento é composto por um valor e uma chave de identificação"*/
console.log(`Nosso vetor é : ${num}`)
num[3] = 6
console.log(`Nosso vetor é : ${num}`)
num.push(7) //.push adiciona outro espaço no vetor e já coloca o índice
console.log(`Nosso vetor é : ${num}`)
//num.length indica o tamanho do vetor
console.log(`O vetor tem ${num.length} elementos`) 
num.sort() //troca a ordem dos elementos para crescente
console.log(`Nosso vetor é : ${num}`)
for (var i = 0; i<num.length; i++){
    console.log(`Posição ${i+1} do vetor: ${num[i]}`) //mostra os valores armazenados no vetor
}
for(let i in num){ //traduzindo a fórmula a esquerda: "para cada posição em num, faça"
    console.log(`Posição ${i} do vetor: ${num[i]}`)
    //versão simplificada do for anterior para variável composta
}
num.push(7)
num.indexOf(7) //esse comando vai pesquisar qual o índice ou chave do valor entre parenteses (7)
console.log(num.indexOf(7)) // caso ele não encontre o número, ele retorna -1
for(let i in num){ //traduzindo a fórmula a esquerda: "para cada posição em num, faça"
    console.log(`Posição ${i} do vetor: ${num[i]}`)
    //versão simplificada do for anterior para variável composta
}
console.log(num.indexOf(7))