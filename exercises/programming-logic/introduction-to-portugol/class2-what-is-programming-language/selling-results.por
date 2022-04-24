programa
{
	
	funcao inicio()
	{
		real mes1,mes2,mes3,mes4,media,total

		escreva("Quanto você vendeu em janeiro? ")
		leia(mes1)
		escreva("Quanto você vendeu em fevereiro? ")
		leia(mes2)
		escreva("Quanto você vendeu em março? ")
		leia(mes3)
		escreva("Quanto você vendeu em abril? ")
		leia(mes4)

		total = mes1+mes2+mes3+mes4
		media = (mes1+mes2+mes3+mes4)/4

		escreva("Total de vendas: " + total + " Média das vendas: " + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 368; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */