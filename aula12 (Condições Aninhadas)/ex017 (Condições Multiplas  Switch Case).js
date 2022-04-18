/* Estrutura do Switch Case
switch (expressão){
    case valor 1:


        break
    case valor 2:

        break
    case valor 3:

        break
    default:

        break
}

OBS:. o comando "break" é indispensável na estrutura acima, pois fornece a saida do case após ser executado.

*/

var agora = new Date()
var diaSem = agora.getDay()
/* getDay:
   0 = Domingo
   1 = Segunda
   2 = Terça
   3 = Quarta
   4 = Quinta
   5 = Sexta
   6 = Sábado
    */
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
}
