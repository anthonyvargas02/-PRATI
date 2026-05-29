/* 1 - Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
ou Reprovado (nota menor que 5).*/

// const prompt = require("prompt-sync")();

// let nota = Number(prompt("Digite sua nota para verificar sua situação: "))

// if( nota >= 7){
//     console.log("Você foi aprovado: ")
// } else if (nota <= 6.9){
//     console.log("Você está em recuperação")
// } else {
//     console.log("Você foi reprovado")
// }

/* 2 - Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).*/

// const prompt = require("prompt-sync")();

// let nascimento = Number(prompt("Digite sua data de nascimento "))

// let anoAtual = 2026

// let idade = anoAtual - nascimento

// if( idade <= 12){
//     console.log("Você é criança ")
// } else if( idade <= 17){
//     console.log("Você é adolecente ")
// } else{
//     console.log("Você é adulto ")
// }

/* 3 - Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário. */

// const prompt = require("prompt-sync")();

// let salarioFuncionario = Number(prompt("Digite seu salário: "))
// let percentual = Number(prompt("Digite o percentual de aumento concendido pela empresa: "))

// if( salarioFuncionario < 1.500){
//     percentual = percentual * 2;
// }

// let novoSalario = salarioFuncionario + (salarioFuncionario * percentual / 100)

//  console.log("Seu novo salário é: R$" + novoSalario)

/* 4 - Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max().*/

// let num1 = 40
// let num2 = 50
// let num3 = 30

// if(num1 > num2 && num1 > num3){
//     console.log(num1)
// } else if (num2 > num1 && num2 > num3){
//     console.log(num2)
// } else{
//     console.log(num3)
// }

/* 5 - Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.*/

// let valorCompra = 500
// let desconto = 0
// let percentual = 0

// if( valorCompra < 10){
//     percentual = 0
// } else if( valorCompra <= 299.99){
//     percentual = 10
// } else if( valorCompra <= 499.99){
//     percentual = 15
// } else{
//     percentual = 20
// }

// desconto = valorCompra *(percentual /100)
// let valorFinal = valorCompra - desconto

// console.log("Valor original é R$ " + valorCompra.toFixed(2))
// console.log("Desconto (" + percentual + "%): R$ " + desconto.toFixed(2))
// console.log("Valor final: R$" + valorFinal.toFixed(2))

/* 6 - Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque. */

// const prompt = require("prompt-sync")();

// const saque = parseInt(prompt("Digite o valor que deseja sacar (múltiplo de R$ 10): "))

// if (saque % 10 !== 0) {
//     console.log(" Valor inválido! Digite um múltiplo de R$10.")

// } else {
//     let restante = saque

//     let notas100 = Math.floor(restante /100)
//     restante = restante % 100

//     let notas50 = Math.floor(restante /50)
//     restante = restante % 50

//     let notas20 = Math.floor(restante /20)
//     restante = restante % 20

//     let notas10 = Math.floor(restante /10)

//     console.log("=== CAIXA ELETRÔNICO ===")
//     console.log("Valor do saque: R$ " + saque)
//     console.log("--------------------------")
//     console.log("Notas de R$ 100: " + notas100)
//     console.log("Notas de R$ 50: " + notas50)
//     console.log("Notas de R$ 20: " + notas20)
//     console.log("Notas de R$ 10: " + notas10)
// }

/* 7 - Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida. */

// const prompt = require("prompt-sync")();

// const num1 = parseFloat(prompt("Digite o primeiro número: "))
// const num2 = parseFloat(prompt("Digite o segundo número: "))
// const operacao = prompt("Digite a operação (+, -, *, /): ")

// // let resultado

// // switch (operacao){
// //     case "+":
// //         resultado = num1 + num2
// //         console.log(`Resultado: ${num1} + ${num2} = ${resultado}`)
// //             break

// //             case "-":
// //             resultado = num1 - num2
// //             console.log(`Resultado: ${num1} - ${num2} = ${resultado}`)
// //             break

// //             case "*":
// //             resultado = num1 * num2
// //             console.log(`Resultado: ${num1} * ${num2} = ${resultado}`)
// //             break

// //             case "/":
// //                 if (num2 === 0){
// //                     console.log(" Erro: divisão por zero é impossível!")
// //                 } else {
// //                     resultado = num1 / num2
// //                     console.log(`Resultado: ${num1} / ${num2} = ${resultado}`)
// //                 }
// //                 break

// //                 default:
// //                     console.log("Operação inválida! Use +, -, * ou /")

// //             }

/* 8 - Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando

switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido. */

// const prompt = require("prompt-sync")();

// const tamanho = prompt("Digite o tamanho da pizza (P, M ou G): ")
// const borda = prompt("Digite o tipo de borda (tradicional ou recheada): ")

// let preco

// switch (tamanho) {
//     case "P":
//         preco = 25.00

//         break

//     case "M":
//         preco = 35.00

//         break

//     case "G":
//         preco = 45.00

//         break

// }

//   if (borda === "recheada") {
//             preco = preco + 8
//         } else if (borda === "tradicional"){

//         }

//         console.log("Tamanho: " + tamanho)
//         console.log("Borda: " + borda)
//         console.log("Total: R$ " + preco.toFixed(2))

/* 9 - Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.*/

// const prompt = require("prompt-sync")();

// const mes = prompt("Digite o mês ");

// switch (mes) {
//   case "1":
//     console.log("Janeiro - 31 dias");
//     break;

//   case "2":
//     const bissexto = prompt("O ano é bissexto? (sim ou não): ");
//     if (bissexto === "sim") {
//       console.log("Fevereiro - 29 dias");
//     } else {
//       console.log("Fevereiro - 28 dias");
//     }
//     break;

//   case "3":
//     console.log("Março - 31 dias");
//     break;

//   case "4":
//     console.log("Abril - 30 dias");
//     break;

//   case "5":
//     console.log("Maio - 31 dias");
//     break;

//   case "6":
//     console.log("Junho - 30 dias");
//     break;

//   case "7":
//     console.log("Julho - 31 dias");
//     break;

//   case "8":
//     console.log("Agosto - 31 dias");
//     break;

//   case "9":
//     console.log("Setembro - 30 dias");
//     break;

//   case "10":
//     console.log("Outubro - 31 dias");
//     break;
//   case "11":
//     console.log("Novembro - 30 dias");
//     break;

//   case "12":
//     console.log("Dezembro - 31 dias");
//     break;
// }

/* 10 - Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado. */

// const prompt = require("prompt-sync")();

// const horas = parseInt(prompt("Digite quantas horas o veículo ficou estacionado: "))

// let valor 

// switch(true) {
//     case (horas === 1):
//         valor = 8
//         break

//     case (horas === 2):
//         valor = 8 + 6
//         break

//         case (horas === 3):
//         valor = 8 + 6 + 4
//         break

//         case (horas > 3 ):
//             valor = 4 + 4 + 4 + (horas - 3) * 2
//             break 
// }

// console.log("Tempo estacionado: " + horas + "hora(s)")
// console.log("Valor a pagar: R$ " + valor.toFixed(2))