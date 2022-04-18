//Funções são ações executadas assim que são Chamadas ou em decorrência de um evento
//Uma função pode receber parâmetros e retornão um resultado

function parimp(n){

    if(n%2==0){
        return 'é par'
    }else{
        return 'é impar'
    }
}
let r = parimp(3)
console.log(parimp(6))
console.log(r)
function soma(n1=0,n2=0){ //se eu não definir valores para n1 e n2 e na hora de chamar a função também não ele gera undefined
    return n1+n2
}
console.log(soma(6,7))
console.log(soma(6))//no caso que só foi digitado um parâmetro, mas na função soma n2 foi definido como 0, ele soma 6 + 0 = 6

let v = function(x){

    return x*2
}
console.log(v(2))