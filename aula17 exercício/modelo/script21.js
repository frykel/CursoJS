let num = document.getElementById('fnum')
let adc = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = [] //declaração de vetor
function adicione(){
      

    if(num.value.length == 0){
        alert ('digite um número')
    }
    else if(num.value<1 || num.value>100){
        
        alert('Número digitado é invalido, digite um número entre 1 e 100')

    }else if(isNumero(num.value) && !inLista(num.value, valores)){ //2 funções criadas para verificar se é número e se consta na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        adc.appendChild(item)
        res.innerHTML = '' //esvazia o resultado após adicionar um número
    }else{
        alert('Não é número ou já se encontra na lista')
    }
    num.value = '' // apaga o número da caixa de digitação substituindo por vazio
    num.focus()     // esse comando faz o cursor voltar a piscar no local desejado --> num
}
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){ 
        return true
    }else{
        return false
    }

}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) { // esse comando verifica se n já consta na lista então se ele está na lista retorna true
        return true // lembrando que o comando indexOf() retorna -1 caso o número não esteja na lsita
    }
    else{
        return false
    }
}
function finalizar(){
    if (valores.length == 0){
        alert('Primeiro, adicione alguns valores antes de finalizar.')
    }else{
        let tot = valores.length
       res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        valores.sort() // coloca o vetor em ordem crescente
        //  Outra maneira de identificar o maior e menor valor de um vetor
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if(valores[pos]>maior){
                maior = valores[pos]
            }
            if(valores[pos]<menor){
                menor = valores[pos]
            }
        }
        
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        let media = 0
        let soma = 0
        for (let i = 0; i<tot;i++){
            soma +=valores[i]    
        
            
        }
        res.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p>A média dos valores foi ${soma/tot}</p>`
    }

}