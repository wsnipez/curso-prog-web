Algoritmo "Troca_de_valores"
// Disciplina: [Linguagem e L�gica de programa�ao] 
// Professor: Antonio Carlos Nicolodi
// Fun��o: Monte um algoritmo que entre com 2 valores e mostre os
//                valores na tela e depois troque eles de posi��o e mostre eles
//                novamente na tela
// Autor    : Antonio Carlos Nicolodi
// Data     : 05/04/2015 
Var
num1, num2 : real
num3 : real
inicio
// Se��o de Comandos 

   Escreva("Informe um numero: ")
   leia(num1)
   Escreva("Informe outro numero: ")
   leia(num2)
   
   escreval(num1)
   escreval(num2)
   
   //Escreval(num2)
   //escreval(num1)
   
   num3 <- num2
   num2 <- num1
   num1 <- num3
   
   escreval(num1)
   escreval(num2)

fimalgoritmo
