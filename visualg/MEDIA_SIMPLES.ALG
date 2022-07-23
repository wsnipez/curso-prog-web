algoritmo "Media_simples"
// Disciplina: [Linguagem e Lógica de programaçao] 
// Professor: Antonio Carlos Nicolodi
// Autor: Antonio
// Data: 17/03/2020
// Seção de Declarações 
var
   nome : caracter
   nota1, nota2, nota3, nota4 : real
   soma : real
   media : real
inicio
      escreva("Digite o Nome do Aluno: ")
      leia(nome)
      escreva("Digite a primeira nota: ")
      leia(nota1)
      escreva("Digite a segunda nota: ")
      leia(nota2)
      escreva("Digite a terceira nota: ")
      leia(nota3)
      escreva("Digite a quarta nota: ")
      leia(nota4)
      soma <- (nota1+nota2+nota3+nota4)
      media <- (soma/4)
      escreva("A média foi de: ")
      escreval(media)
      escreval
      se media < 6 então
         escreva("O aluno ")
         escreva(nome)
         escreva(" foi reprovado!")
      senao
         escreva("O aluno ")
         escreva(nome)
         escreva(" foi aprovado!")
      fimse
fimalgoritmo
