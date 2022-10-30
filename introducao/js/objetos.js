//Cria objeto manualmente
var objeto = {
    nome: "Wesley",
    sobrenome: "Oliveira"
}
console.log(objeto)

//Cria objeto com o construtor
var novoObjeto = Object.create(objeto)
console.log(novoObjeto.nome)

//Retorna matriz com chaves e valores do objeto
var entries = Object.entries(objeto)
console.log(entries)

//Retorna array com as chaves do objeto
var keys = Object.keys(objeto)
console.log(keys)

//Retorna um array com os valores do objeto
var values = Object.values(objeto)
console.log(values)

//Unifica dois objetos
var objeto2 = { sobrenome: "Snipez", idade: 24 }
var objetoUnificado = Object.assign(objeto, objeto2)
console.log(objetoUnificado)

//Unifica dois objetos com espalhamento de dados
var espalhamentoObjetos = {...objeto,...objeto2}
console.log(espalhamentoObjetos)