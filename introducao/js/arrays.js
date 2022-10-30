var frutas = ["Maçã", "Banana", "Manga"]
console.log(frutas)

//Adiciona um item ao final do array
frutas.push("Mamão")
console.log(frutas)
//Remove o último item do array
frutas.pop()
console.log(frutas)
//Adiciona um item ao inicio do array
frutas.unshift("Limão")
console.log(frutas)
//Remove o primeiro item do array
frutas.shift()
console.log(frutas)
//Encontra a posição de um item no array
var posicao = frutas.indexOf("Banana")
console.log(posicao)
//Ordenar alfabeticamente
frutas.sort()
console.log(frutas)
//Inverter dados do array
frutas.reverse()
console.log(frutas)
//Seleciona um pedaço do array
var pedaco = frutas.slice(0, 2)
console.log(pedaco)
//Remover diversos items de um array
frutas.splice(1, 2)
console.log(frutas)
//Unifica todos os items de um array
var nome = ["Wesley", "Oliveira"]
var nomeCompleto = nome.join(" ")
console.log(nomeCompleto)
//Unifica dois arrays
var a = [1, 2, 3]
var b = [4, 5, 6]
console.log(a)
console.log(b)
var unificado = a.concat(b)
console.log(unificado)

var alunos = [
    {
        nome: "Wesley",
        idade: 24
    },
    {
        nome: "John",
        idade: 35
    }
]

//Acessa cada item de um array
alunos.forEach(function (aluno, posicao) {
    console.log(`${posicao} = ${aluno.nome}`)
    console.log(aluno)
})
//Encontra a posição de um item
var posicao = alunos.findIndex(function (aluno) {
    return aluno.nome == "Wesley"
})
console.log(posicao)
//Modifica cada item do array
var idades = alunos.map(function (aluno) {
    return aluno.idade
})
console.log(idades)
//Busca um dado no array (retorna o primeiro dado)
var encontrado = alunos.find(function (aluno) {
    return aluno.nome == "John"
})
console.log(encontrado)
//Busca dados no array (Todas correspondencias)
var encontrados = alunos.filter(function (aluno) {
    return aluno.idade < 40
})
console.log(encontrados)