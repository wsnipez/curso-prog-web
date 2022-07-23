document.getElementById("formulario").addEventListener("submit", function(evento) {
    evento.preventDefault()
    var a = document.getElementById("a").value 
    var b = document.getElementById("b").value 
    var c = document.getElementById("c").value
    var delta = Math.pow(b,2) - (4 * a * c)
    console.log(delta)

    if (delta < 0) {
        alert("O valor de delta não pode ser negativo")
        return
    }

    var raizDelta = Math.sqrt(delta)
    console.log(raizDelta)

    var x1 = (-b + raizDelta) / (2 * a)
    var x2 = (-b - raizDelta) / (2 * a)

    document.getElementById("resultado").innerHTML = `O valor de x1 é ${x1.toFixed(2)} <br> O valor de x2 é ${x2.toFixed(2)}`
})