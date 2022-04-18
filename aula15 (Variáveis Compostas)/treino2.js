//calcular fatorial

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){

        fat *= c

    }
    return fat
}

console.log(fatorial(5))

//calculando agora usando forma RECURSIVA da função (a função chama ela mesma)
/*Sabemos que 5! = 5 x 4 x 3 x 2 x 1
pode ser reescrito: 5! = 5 x 4!
de forma genércia: n! = n * (n-1)!
Logo */

function fator(b){

    if(b == 1){
        return 1
    }else{
        return b*fator(b-1)
    }
}

console.log(fator(6))