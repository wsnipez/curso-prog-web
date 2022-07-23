document.getElementById("formulario").addEventListener("submit", function(evento) {
    evento.preventDefault()
    var raio = document.getElementById("raio").value
    var area = 2 * Math.PI * raio
    console.log(area)
    document.getElementById("resultado").innerHTML = `A área é: ${area.toFixed(2)}`
})