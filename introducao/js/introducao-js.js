var nome = "Wesley"
console.log(nome)

let idade = 24
console.log(idade)

const pi = 3.14
console.log(pi)

//Booleano
var booleano = false
console.log(booleano)
console.log(typeof booleano)
//Nulo
var nulo = null
console.log(nulo)
console.log(typeof nulo)
//Indefinido
var indefinido = undefined
console.log(indefinido)
console.log(typeof indefinido)
//Declarar variavel sem atribuir valor, também será undefined
var indef
console.log(indef)
console.log(typeof indef)
//Número Inteiro
var inteiro = 10
console.log(inteiro)
console.log(typeof inteiro)
//Número Decimal
var decimal = 5.15
console.log(decimal)
console.log(typeof decimal)
//String, Texto
var texto = "Texto"
console.log(texto)
console.log(typeof texto)
//Array, Vetor
var vetor = [1, 2, 3, 4, 5]
console.log(vetor)
console.log(typeof vetor)
//Objeto
var objeto = {
    nome: "Wesley",
    idade: 24,
    brasileiro: true
}
console.log(objeto)
console.log(typeof objeto)

var a = "Texto"
console.log(a)
console.log(typeof a)
a = 15
console.log(a)
console.log(typeof a)

var alfabeto = ["a", "b", "c", "d", "e"]
console.log(alfabeto)
alfabeto[2] = "f"
console.log(alfabeto)
alfabeto = "a"
console.log(alfabeto)

console.log(objeto)
objeto.nome = "John"
objeto["idade"] = 25
objeto.brasileiro = false
console.log(objeto)

//Concatenar Strings
console.log("Hello " + "World!")

var nome = "Wesley"
console.log("Meu nome é " + nome)

var ano = 2022
console.log("Estamos no ano de " + ano)

//Template String
console.log(`Meu nome é ${nome} e ano que vem será ${ano + 1}`)