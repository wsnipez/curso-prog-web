document.getElementById("formulario").addEventListener("submit", function(evento) {
    evento.preventDefault()
    var lista = document.getElementById("numeros").value 
    console.log(lista)
    var array = lista.split(",")
    console.log(array)

    //Modifica cada item do array transformando em numero
    var listaNumeros = array.map(function(numero) {
        return Number(numero)
    })
    console.log(listaNumeros)

    //... significa espalhamento de items, retorna uma lista com cada item do array
    var maior = Math.max(...listaNumeros)
    console.log(maior)

    document.getElementById("resultado").innerHTML = `O maior número é o ${maior}`
})