function calcule(){
    let t1 = document.getElementById('tabn')
    let res = document.getElementById('seltab')
    
    if (t1.value.length == 0){
        alert('Digite um número')
    }else{
        let n = Number(t1.value)
        res.innerHTML = ''
        for (let i = 0; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            res.appendChild(item)
        }


    }
    

}
