Algoritmo "times"

var time : caracter
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   // entrada de dados
   escreva("Digite  o nome de um time de futebol: ")
   leia (time)

   // processamento de dados
   escolha time
   caso "SAO PAULO", "SANTOS", "PALMEIRAS", "CORINTHIANS"
      escreva ("É um time Paulista!")
   caso "FLAMENGO", "FLUMINENSE", "VASCO", "BOTAFOGO"
      escreva ("É um time carioca!")
   outrocaso
      escreva
      escreva("É de outro estado.")
   fimescolha
fimalgoritmo