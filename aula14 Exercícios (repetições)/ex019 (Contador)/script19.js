function contar(){
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var p = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    let ini = Number(n1.value)
    let fim = Number(n2.value)
    let pas = Number(p.value)
    
    if(n1.value.length==0 || n2.value.length == 0){

        res.innerHTML = 'Impossível contar!!'
    }else if(p.value == 0){
        alert('Passo igual a 0, considerando Passo igual a 1')
        pas = 1
    }
        
    for(var c = ini; c<=fim ; c +=pas){

        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F603}`


}
