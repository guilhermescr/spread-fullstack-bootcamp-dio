// Matrice's Exercise
// Author: Guilherme Rocha
// Contact: @guiidev_

programa
{
	
	funcao inicio()
	{
		cadeia contatos[][] = {{"João"," São Paulo"," (11) 9999-5241"," joaozinho@gmail.com"},{"Maria"," Ribeirão Preto"," (16) 9999-8596"," maria2020@gmail.com"},{"Ana"," Manaus"," (92) 9999-8574"," ana@empresa.com.br"}}
		inteiro contador = 0
		
		faca{
			escreva(contatos[contador][0])
			escreva(contatos[contador][1])
			escreva(contatos[contador][2])
			escreva(contatos[contador][3] + "\n")
			contador ++
		} enquanto(contador<=2)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 497; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */