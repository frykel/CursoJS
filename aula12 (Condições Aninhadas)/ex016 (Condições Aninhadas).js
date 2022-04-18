var agora = new Date()
var hora = agora.getHours //pega a hora

console.log(`Agora são exatamante ${hora} horas.`)
if(hora < 12) {
    console.log('Bom dia!')
}else if(hora < 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}