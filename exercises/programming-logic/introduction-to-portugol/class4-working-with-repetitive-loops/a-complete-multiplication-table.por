programa
{
	
	funcao inicio()
	{
		inteiro num,res,operacao,cont,limite

		cont = 0

		escreva("Olá! Você quer a tabuada de qual número? ")
		leia(num)
		escreva("\n" + "Escolha uma operação: [1] Adição | [2] Subtração | [3] Multiplicação | [4] Divisão | [5] Sair" + "\n")
		leia(operacao)
		escreva("Qual vai ser o limite da operação? ")
		leia(limite)

		escolha (operacao) {
			caso 1:
				faca {
	
				res = num + cont
				escreva("\n" + num + " + " + cont + " = " + res)
				cont ++ 
				
			}enquanto (cont<=limite)
			pare

			caso 2:
				faca {
	
				res = num - cont
				escreva("\n" + num + " - " + cont + " = " + res)
				cont ++ 
				
			}enquanto (cont<=limite)
			pare

			caso 3:
				faca {
	
				res = num * cont
				escreva("\n" + num + " * " + cont + " = " + res)
				cont ++ 
				
			}enquanto (cont<=limite)
			pare

			caso 4:
				faca {
	
				res = num / cont
				escreva("\n" + num + " / " + cont + " = " + res)
				cont ++ 
				
			}enquanto (cont<=limite)
			pare

			caso 5:
			escreva("Saindo da Tabuada...")
			pare
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 353; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */