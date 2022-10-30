//Carregamento da página
window.addEventListener("load", function() {
    console.log("A página foi carregada")
})

//Duplo clique
document.querySelector("h2").addEventListener("dblclick", function() {
    alert("Duplo Clique")
})

//Change
document.getElementById("nome").addEventListener("change", function(evento) {
    alert("O novo nome é: "+evento.target.value)
})

//Input
document.getElementById("idade").addEventListener("input", function(evento) {
    console.log("A nova idade é: "+evento.target.value)
})

//Clique
document.querySelector("button").addEventListener("click", function() {
    alert("Clique")
})

//Submit
document.querySelector("form").addEventListener("submit", function(evento) {
    evento.preventDefault()
    alert("Submit")
})