let inputValor1 = document.querySelector('#valor1')

let inputValor2 = document.querySelector('#valor2')

let resultado = document.querySelector('#resultado')

 

 

function limpaInput() {

    inputValor1.value = ''

    inputValor2.value = ''

}

 

 

function somar() {

    resultado.innerHTML = parseInt(inputValor1.value) + parseInt(inputValor2.value)

   limpaInput()

}

 

function subtrair() {

    resultado.innerHTML = parseInt(inputValor1.value) - parseInt(inputValor2.value)

   limpaInput()

}

 

function dividir() {

    resultado.innerHTML = parseInt(inputValor1.value) / parseInt(inputValor2.value)

   limpaInput()

}

 

function multiplicar() {

    resultado.innerHTML = parseInt(inputValor1.value) * parseInt(inputValor2.value)

   limpaInput()

}

