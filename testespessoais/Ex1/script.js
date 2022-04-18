function calcular(){
    var nome = document.getElementById('txtnome')
    var falta = document.getElementById('txtf')
    var taula = document.getElementById('txtt')
    var gen = document.getElementsByName('txtgen')
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var res = document.querySelector('div#res')
    var faltaa = Number(falta.value)
    var genero = ''
        if(gen[0].checked){
            genero = 'O'
            var apr = 'Aprovado'
            var rpv = 'Reprovado'
        }else{
            genero = 'A'
            var apr = 'Aprovada'
            var rpv = 'Reprovada'
        }
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    var media = (Number(txtn1.value)+Number(txtn2.value))/2
    var faltamin = Number(taula.value)*0.25
        if (faltaa > faltamin && media < 7){
            res.innerHTML = `${genero} estudante ${nome.value} foi Reprovado por frequência (${faltaa} faltas, máximo de: ${faltamin}) e por media: ${media}`
            res.innerHTML += '<br><br><center><strong>REPROVADO</strong></center>'
            img.setAttribute('src','reprovado.jpg')
           
            document.body.style.background = "red"
        }else if (faltaa <= faltamin && media < 7){
            res.innerHTML = `${genero} estudante ${nome.value} foi Aprovado por frequência (${faltaa} faltas, máximo de: ${faltamin}) mas Reprovado por media: ${media}`
            res.innerHTML += '<br><br><center><strong>REPROVADO</strong></center>>'
            img.setAttribute('src','reprovado.jpg')
            
            document.body.style.background = "red"
        }else if (faltaa > faltamin && media >= 7){
            res.innerHTML = `${genero} estudante ${nome.value} foi Reprovado por frequência (${faltaa} faltas, máximo de: ${faltamin}) e Aprovado por media: ${media}`
            res.innerHTML += '<br><br><center><strong>REPROVADO</strong></center>'
            img.setAttribute('src','reprovado.jpg')
           
            document.body.style.background = "red"
        }else if (faltaa <= faltamin && media >=7){
            res.innerHTML = `${genero} estudante ${nome.value} foi Aprovado por frequência (${faltaa} faltas, máximo de: ${faltamin}) e Aprovado por media: ${media}`
            res.innerHTML += '<br><br><center><strong>APROVADO</strong></center>'
            img.setAttribute('src','aprovado.jpg')
           
            document.body.style.background = "blue"
        }
        res.style.textAlign = 'center'
        res.appendChild(img)


}