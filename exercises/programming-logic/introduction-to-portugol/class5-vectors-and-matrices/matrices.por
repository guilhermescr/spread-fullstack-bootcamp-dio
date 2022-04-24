// Matrices
// Autor: Guilherme Rocha

programa
{
	
	funcao inicio()
	{ // Primeiro elemento é linha
	  // Segundo elemento é coluna
	  	inteiro contador = 0
	  	// cada {"Fruta","Quantidade"} é uma linha.
	  	// cada {"elemento"} é uma coluna.
	  	// se dentro de {} têm apenas 2 elementos, toda linha terá 2 colunas apenas.
	  	// Sendo {"Pera" -> Coluna 0 e "100" -< Coluna 1}
	  	// Na próxima linha, serão as mesmas colunas 0 e 1 se só tiver 2 elementos!!
		cadeia cesta[][] = {{"Pera","100"},{"Jaca","200"},{"Maçã","900"},{"Uva","89"}}

		faca {
			escreva ("Produto: " + cesta[contador][0] + " Quantidade: " + cesta[contador][1] + "\n")
			contador++
		}enquanto (contador<=3)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 657; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */