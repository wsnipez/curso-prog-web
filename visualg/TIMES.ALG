Algoritmo "times"

var time : caracter
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   // entrada de dados
   escreva("Digite  o nome de um time de futebol: ")
   leia (time)

   // processamento de dados
   escolha time
   caso "SAO PAULO", "SANTOS", "PALMEIRAS", "CORINTHIANS"
      escreva ("� um time Paulista!")
   caso "FLAMENGO", "FLUMINENSE", "VASCO", "BOTAFOGO"
      escreva ("� um time carioca!")
   outrocaso
      escreva
      escreva("� de outro estado.")
   fimescolha
fimalgoritmo