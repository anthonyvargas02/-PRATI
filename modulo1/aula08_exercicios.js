/*Escreva um algoritmo para ler uma temperatura em graus celsius, calcular e escrever o valor correspondente em graus Fahrenheit*/

/* const PROMPT = require('prompt-sync')()

let celsius = Number(PROMPT('Informe a temperatura que deseja converter em Fahrenheit: '))

if(celsius < -273.15){
    console.error('Temperatura abaixo do zero absoluto')
}
 
let fahrenheit = (celsius * 9/5) + 32

console.log('O resultado em fahrenheit é: ' + fahrenheit) */

/* Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores*/
  /*const prompt = require('prompt-sync')()

 let totalEleitores = Number(prompt("Informe o número total de eleitores do município: "))
 let votosBrancos = Number(prompt("Informe o número total de votos em branco: "))
 let votosNulos = Number(prompt("Informe o número total de votos nulos: "))
 let votosValidos = Number(prompt("Informe o número total de votos válidos: "))

 let totalVotos = votosBrancos + votosNulos + votosValidos // INFORMA O TOTAL DE VOTOS
 let abstencoes = totalEleitores - totalVotos //Todo mundo menos que voltou
 
 let percentualBrancos = (votosBrancos / totalEleitores) * 100 //Percentual de votos brancos
 let percentualNulos = (votosNulos / totalEleitores) * 100 //Percentual de votos Nulos
 let percentualValidos = (votosValidos / totalEleitores) * 100 //Percentual de votos validos
 let percentualAbstencoes = (abstencoes / totalEleitores) * 100

 console.log('========= Resultado da eleição =========')
 console.log('Total de eleitores: ' + totalEleitores)
 console.log('-----------')
 console.log('Votos válidos: ' + votosValidos + "-> " + percentualValidos + "%")
 console.log('Votos brancos: ' + votosBrancos + "-> " + percentualBrancos + "%")
 console.log('Votos nulos: ' + votosNulos + "-> " + percentualNulos + "%")
 console.log('abstenções: ' + abstencoes + "-> " + percentualAbstencoes + "%") */

 /*Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que divididos por 11 dão resto igual a 5.*/

 /*let encontrados = []

 for (let numero = 1000; numero <= 1999; numero++){
    if(numero % 11 == 5){
        console.log(numero)
        encontrados.push(numero)
    }
 }

 console.log("Quantidade: " + encontrados.length) */

 /* Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e eexiba o total em dias.*/

    // const prompt = require('prompt-sync')()

    // let fumadosPorDia = Number(prompt('Informe o número de cigarros fumados por dia: '))
    // let anosFumando = Number(prompt('Informe há quantos anos você fuma: '))    

    // let diasFumando = anosFumando * 365
    // let totalCigarros = fumadosPorDia * diasFumando
    // let minutosPerdidos = totalCigarros * 10
    // let horasPerdidas = minutosPerdidos / 60
    // let diasPerdidos = horasPerdidas /24
    // let anosPerdidos = diasPerdidos / 365 

    // console.log("==============================")
    // console.log("   REDUÇÃO DO TEMPO DE VIDA   ")
    // console.log("==============================")

    // console.log("Cigarros por dia: " + fumadosPorDia)
    // console.log("Anos fumando: " + anosFumando)
    // console.log("Dias fumando: " + diasFumando)
    // console.log('------------------------------')
    // console.log('Total de cigarros: ' + totalCigarros)
    // console.log('Minutos perdidos: ' + minutosPerdidos)
    // console.log('Horas Perdidas: ' + horasPerdidas.toFixed(2))
    // console.log('Dias perdidos: ' + diasPerdidos.toFixed(2))
    // console.log('Anos perdidos: ' + anosPerdidos.toFixed(2))

    /*As maças custam R$0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.*/

    // let quantidade = 12

    // let precoPorUnidade 

    // if(quantidade <= 12){
    //     precoPorUnidade = 0.30
    // }else{
    //     precoPorUnidade = 0.25
    // }

    // let totalCompra = quantidade * precoPorUnidade

    // console.log("Quantidade comprada: " + quantidade + "maçãs")
    // console.log("Preço por unidade: R$ " + precoPorUnidade.toFixed(2))
    // console.log("Total da compra: R$ " + totalCompra.toFixed(2))

    /*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente*/


    /*
        ------------------------MEU CÓDIGO-------------------------------------------
    let numero1 = 30
    let numero2 = 10

    if(numero1 > numero2){
        console.log(numero2)
        console.log(numero1)

    }else{
        console.log(numero1)
        console.log(numero2)
    } 


    --------------------------CÓDIGO PROFESSOR-----------------------------

    let a = 30
    let b = 45

    if(a < b){
        console.log(a + "," + b)
    }else {
            console.log(b + "," + a)
        }

    */

        /*Escreva um algoritmo que percorra o array e calcule:
          
         A soma de todos os elementos
         A média dos elementos
         O maior valor encontrado
         O menor valor encontrado*/

    
    let valores = [7, 3, 9, 5, 8]
    let soma = 0
    let maior = valores[0]
    let menor = valores[0]

    for (let i = 0; i < valores.length; i++){
        soma += valores[i]

        if(valores[i] > maior){
            maior = valores[i]
        }

         if(valores[i] < maior){
            menor = valores[i]
        }
    }

    let media = soma/valores.length

    console.log("Soma: " + soma)
    console.log("Média: " + media)
    console.log("Maior: " + maior)
    console.log("Maior: " + menor)