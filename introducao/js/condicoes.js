var idade = 20
//Maior ou Igual
if (idade >= 18) {
    console.log("Maior de idade")
}
else {
    console.log("Menor de idade")
}

//Igual
if (idade == "20") console.log("É igual a '20'")

//Estritamente igual
if (idade === "20") console.log("É igual a '20'")
else console.log("É diferente de '20'")

//Diferente
if (idade != "20") console.log("É diferente de '20'")
else console.log("É igual a '20'")

//Estritamente diferente
if (idade !== "20") console.log("É diferente de '20'")
else console.log("É igual a '20'")

//Maior
if (idade > 10) console.log("Tem mais de 10 anos")

//Menor
if (idade < 40) console.log("Tem menos de 40 anos")

//Menor ou igual
if (idade <= 17) console.log("Tem 17 anos ou menos")

//Else if
if (idade <= 10) console.log("Não paga entrada")
else if (idade < 18) console.log("Paga meia entrada")
else if (idade >= 18) console.log("Paga entrada completa")

//Usando o AND
var entrada = 15
var saldo = 20
if (idade >= 18 && saldo >= entrada) console.log("Consegue comprar")
else console.log("Não consegue comprar")

//Usando o OR
var classificacao = 16
var responsavel = false
if (idade >= classificacao || responsavel) console.log("Permitido entrar")
else console.log("Não permitido entrar")

//Switch case
var estado = "SP"
console.log(estado)

switch (estado) {
    case "MG": estado = "Minas Gerais"; break;
    case "ES": estado = "Espirito Santo"; break;
    case "RJ": estado = "Rio de Janeiro"; break;
    case "SP": estado = "São Paulo"; break;
    default: estado = "Não especificado"; break;
}

console.log(estado)

//Operador ternário

//Caso retorne true
var idade = 20
var maiorDeIdade = idade >= 18 ? "Maior de Idade" : "Menor de Idade"
console.log(maiorDeIdade)

//Caso retorne false
idade = 17
maiorDeIdade = idade >= 18 ? "Maior de Idade" : "Menor de Idade"
console.log(maiorDeIdade)

//Testando se o valor existe
var idadeExiste = idade ? true : false
console.log(idadeExiste)

idade = null
idadeExiste = idade ? true : false
console.log(idadeExiste)