
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 10
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos!`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = '#DEB887'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = 'yellow'
    }else{
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = 'darkslateblue'
    }
}