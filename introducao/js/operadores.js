var x = 2
var y = 5

//Adição
console.log(x + y)
//Subtração
console.log(y - x)
//Multiplicação
console.log(x * y)
//Divisão
console.log(y / x)
//Exponenciação
console.log(y ** x)
console.log(Math.pow(y, x))
//Raiz Quadrada
console.log(Math.sqrt(25))
//Raiz Cúbica
console.log(Math.cbrt(8))
//Resto da divisão
console.log(x % 2)
console.log(y % 2)

//Operadores de Atribuição
var contador = 0
var numeros = [1, 2, 3, 4, 5]

//Atribuição de soma
numeros.forEach(numero => {
    contador += numero
})
console.log(contador)

//Atribuição de subtração
numeros.forEach(numero => {
    contador -= numero
})
console.log(contador)

var numero = numeros[0]

//Atribuição de multiplicação
numero *= 4
console.log(numero)

//Atribuição de divisão
numero /= 2
console.log(numero)

//Atribuição de exponenciação
numero **= 3
console.log(numero)