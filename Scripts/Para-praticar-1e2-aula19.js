const nomecompleto = 'Cleysson felipe da silva freitas'
let numero1= '1'
let numero2= '56'

const soma = numero1 + numero2
let multiplicação = numero1 * numero2


alert(soma)

console.log(nomecompleto)
console.log (multiplicação)

function subtração ( num1, num2)
 { if( num1 < num2) {
    return console.log('Não foi possivel subtrair')
 } else { 
    return console.log(num1 - num2)
 }
}
subtração(numero1, numero2)

function divisao (num1, num2)
 { 
    if ( num2 > 0) {
    return console.log ('não foi possivel dividir') 
}
    else {
        return console.log (num1 / num2)
}
}
divisao (numero1, numero2)