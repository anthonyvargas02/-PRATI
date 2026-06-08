//  1 - Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
// laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
// a resposta for "sim".

// const prompt = require("prompt-sync")();



// let continuar = "sim";

// while (continuar === "sim") {

// let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

// console.log(`\n--- Tabuada do ${numero} ---`);

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// continuar = prompt("Deseja ver outra tabuda? (sim/não) ");
// continuar = continuar.toLowerCase();
// }

// 2 - Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
// dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).

// const prompt = require("prompt-sync")();

// let numero = parseInt(prompt("Digite um número inteiro positivo: "));

// let contagem = 0;
// let temp = numero;

// if (numero === 0) {
//   contagem = 1;
// } else {
//   while (temp > 0) {
//     temp = Math.floor(temp / 10);
//     contagem++;
//   }
// }

// console.log(`O número ${numero} possui ${contagem} dígito(s).`);

// 3 - Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
// usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...

// const prompt = require("prompt-sync")();

// let termos = parseInt(prompt("Quantos termos de Fibonacci deseja ver? "));

// let a = 1, b = 0;

// for (let i = 1; i <= termos; i++) {

//   console.log(`Termo ${i}: ${a}`);

//   let proximo = a + b;
//   b = a;
//   a = proximo;

// }

// 4 - Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
// do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
// tentativas.

// const prompt = require("prompt-sync")();

// const senhaCorreta = "abc123";
// let tentativas = 0;
// let acertou = false;

// do {

//   let digitado = prompt("Digite a senha: ");
//   tentativas++;

//   if (digitado === senhaCorreta) {
//     acertou = true;
//   } else {
//     console.log(`Senha incorreta! Tentativas restantes: ${3 - tentativas}`);
//   }

// } while (!acertou && tentativas < 3);

// if (acertou) {
//   console.log("Acesso permitido!");
// } else {
//   console.log("Acesso bloqueado! Você esgotou as 3 tentativas.");
// }

// 5 - Leia um número N e exiba todos os números primos entre 2 e N usando laços
// aninhados (for dentro de for). Exiba também a quantidade total de primos
// encontrados.

// const prompt = require("prompt-sync")();

// let n = parseInt(prompt("Digite um número N: "));
// let quantidade = 0;

// for (let numero = 2; numero <= n; numero++) {

//   let ePrimo = true;

//   for (let divisor = 2; divisor < numero; divisor++) {
//     if (numero % divisor === 0) {
//       ePrimo = false;
//       break;
//     }
//   }

//   if (ePrimo) {
//     console.log(numero);
//     quantidade++;
//   }

// }

// console.log(`\nTotal de primos encontrados: ${quantidade}`);

// 6 - Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
// da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
// Não use funções prontas como Math.max().

// const prompt = require("prompt-sync")();

// let alunos = [];

// for (let i = 0; i < 5; i++) {
//   let nome = prompt(`Nome do aluno ${i + 1}: `);
//   let nota = parseFloat(prompt(`Nota de ${nome}: `));

//   alunos.push({ nome, nota });
// }

// let soma = 0;
// let maior = alunos[0];
// let menor = alunos[0];

// for (let i = 0; i < alunos.length; i++) {
//   soma += alunos[i].nota;

//   if (alunos[i].nota > maior.nota) {
//     maior = alunos[i];
//   }

//   if (alunos[i].nota < menor.nota) {
//     menor = alunos[i];
//   }
// }

// let media = soma / alunos.length;

// console.log(`\nMédia da turma: ${media.toFixed(2)}`);
// console.log(`Maior nota: ${maior.nome} (${maior.nota})`);
// console.log(`Menor nota: ${menor.nome} (${menor.nota})`);


// 7 - Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
// o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
// subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
// pagar.

// const prompt = require("prompt-sync")();

// let nomes = [];
// let precos = [];

// while (true) {

//   let nome = prompt('Nome do produto (ou "sair" para finalizar): ');

//   if (nome.toLowerCase() === "sair") {
//     break;
//   }

//   let preco = parseFloat(prompt(`Preço de ${nome}: R$ `));

//   nomes.push(nome);
//   precos.push(preco);

// }

// if (nomes.length === 0) {
//   console.log("Nenhum produto adicionado.");
// } else {

//   console.log("\n========= CARRINHO =========");

//   let subtotal = 0;

//   for (let i = 0; i < nomes.length; i++) {
//     console.log(`${nomes[i]} - R$ ${precos[i].toFixed(2)}`);
//     subtotal += precos[i];
//   }

//   console.log(`\nSubtotal: R$ ${subtotal.toFixed(2)}`);

//   let total;

//   if (nomes.length > 3) {
//     let desconto = subtotal * 0.10;
//     total = subtotal - desconto;
//     console.log(`Desconto (10%): - R$ ${desconto.toFixed(2)}`);
//   } else {
//     total = subtotal;
//     console.log(`Desconto: nenhum (mínimo 4 itens)`);
//   }

//   console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
//   console.log("============================");

// }

// 8 - Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
// trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
// original, a invertida e informe se ela é um palíndromo.

// const prompt = require("prompt-sync")();

// let palavra = prompt("Digite uma palavra: ").toLowerCase();

// let caracteres = [];

// for (let i = 0; i < palavra.length; i++) {
//   caracteres.push(palavra[i]);
// }

// let invertida = "";

// for (let i = caracteres.length - 1; i >= 0; i--) {
//   invertida += caracteres[i];
// }

// console.log(`\nPalavra original:  ${palavra}`);
// console.log(`Palavra invertida: ${invertida}`);

// if (palavra === invertida) {
//   console.log("É um palíndromo! ");
// } else {
//   console.log("Não é um palíndromo. ");
// }

// 9 - Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
// peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
// menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
// quantas tentativas foram necessárias.
// const prompt = require("prompt-sync")();

// let secreto = Math.ceil(Math.random() * 100);
// let tentativas = [];
// let chute;

// do {

//   chute = parseInt(prompt("Adivinhe o número (1 a 100): "));
//   tentativas.push(chute);

//   if (chute < secreto) {
//     console.log("O número é MAIOR que " + chute);
//   } else if (chute > secreto) {
//     console.log("O número é MENOR que " + chute);
//   } else {
//     console.log("\n Acertou!");
//   }

// } while (chute !== secreto);

// console.log("\n===== HISTÓRICO =====");

// for (let i = 0; i < tentativas.length; i++) {
//   let status;

//   if (tentativas[i] < secreto) {
//     status = "muito baixo";
//   } else if (tentativas[i] > secreto) {
//     status = "muito alto";
//   } else {
//     status = "correto!";
//   }

//   console.log(`Tentativa ${i + 1}: ${tentativas[i]} → ${status}`);
// }

// console.log(`\nNúmero secreto: ${secreto}`);
// console.log(`Total de tentativas: ${tentativas.length}`);
// console.log("=====================");

// 10 - Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
// Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
// o melhor desempenho.

// const prompt = require("prompt-sync")();

// let nomes = [];
// let matriz = [];

// for (let i = 0; i < 3; i++) {
//   let nome = prompt(`\nNome do aluno ${i + 1}: `);
//   nomes.push(nome);

//   let notas = [];

//   for (let j = 0; j < 4; j++) {
//     let nota = parseFloat(prompt(`  Nota ${j + 1} de ${nome}: `));
//     notas.push(nota);
//   }

//   matriz.push(notas);
// }

// console.log("\n========= RESULTADO =========");

// let somaGeral = 0;
// let melhorAluno = 0;
// let melhorMedia = 0;

// for (let i = 0; i < 3; i++) {
//   let somaAluno = 0;

//   for (let j = 0; j < 4; j++) {
//     somaAluno += matriz[i][j];
//   }

//   let media = somaAluno / 4;
//   somaGeral += media;

//   console.log(`${nomes[i]}: média ${media.toFixed(2)}`);

//   if (media > melhorMedia) {
//     melhorMedia = media;
//     melhorAluno = i;
//   }
// }

// let mediaGeral = somaGeral / 3;

// console.log(`\nMédia geral da turma: ${mediaGeral.toFixed(2)}`);
// console.log(`Melhor desempenho: ${nomes[melhorAluno]} (${melhorMedia.toFixed(2)})`);
// console.log("==============================");