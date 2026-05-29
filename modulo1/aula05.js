//Enquanto meu número não for 10, somente um a ele

/*let meuNumero = 0

while(meuNumero < 10){
    console.log(meuNumero +=1)
}
*/


// Enquanto meu número não for 0, diminua um a ele
 
/*let meuNumero = 10

 while(meuNumero >= 1){
    console.log(meuNumero--)
 } */


/*
let contador = 0

while(contador <= 5){
    console.log(`o número é: ${contador}`)
    contador++
} */


  //Somem os número de 1 até 10
  
  /* let contador = 0
  let soma = 0

  while(contador <= 10){
    soma = soma + contador
    contador++
  }

  console.log(soma) */

  /* Solicite ao usuário um número e mostrem a tabuada deste número
    Exemplo:

    informe um número:

    1 x 10 = 10
    2 x número = x*/

  const prompt = require('prompt-sync')()

  /*let valor = Number(prompt('Informe um número:'))

  let contador = 1

  while(contador <= 10){
    console.log(`${contador} X ${valor} = ${contador * valor}`)
    contador++
  } */

    /* let contador = 1
    do{
      console.log(contador)
      contador++
    }while(contador <= 10) */

  /* Solicite ao usuário que digite um valor, quando ele digitar 0. Some todos os valores digitados por ele.

    ex: informe um número: 10
    informe um número: 9
    informe um número: 0
    soma dos números = 19 */

 let soma = 0
 let valor = 0 
    
 
do{
    valor = Number(prompt('Informe um número (Zero para parar):'))
    soma += valor

} while(valor !== 0)

  console.log(soma)
