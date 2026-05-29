// let livro = {
//     titulo: "A montanha mágica",
//     autor: "Thomas Mann",
//     tema: "Clássico"
// }

// for (const chave in livro){
//     console.log(livro[chave])
// }


// let frutas = ["Maça", "Uva", "Banana"]

// for (const [indice, fruta] of frutas.entries()){
//     console.log(indice, fruta)
// }

// let livros = [
//     {titulo: 'O Hobbit', autor: 'J. R. R. Tolkien'},
//     {titulo: '1984', autor: 'George Orqell'},
//     {titulo: 'Pequeno Princípe', autor: 'Saint Exuperie'},
//     {titulo: 'Nárnia', autor: 'C. S. Lewis'},
//     {titulo: 'Drácula', autor: 'Bram Stoker'},
// ]

// console.table(livros)

// for(const livro of livros){
//     console.log(livro.titulo)
// }

// const notas = [9, 8.5, 5, 6]

// notas.forEach((nota, indice, array) => {
//     console.log(nota, indice, array)

// })

 /*Criem um objeto carro - usem for in para imprimir cada propridade no formato: "chave: valor"*/

//  let carro = {marca: "VW", modelo: "Nivus", ano: 2026, cor: "Amarelo" }

//     for (let chave in carro){
//     console.log(`${chave}: ${carro[chave]}`)
//     }

/* Criem um array de cidades, imprimam apenas as cidades que começam com a letrea 's'. Usando for of*/

// let cidades= ["sapucaia", "sarandi", "capão", "esteio"]

// for(let cidade of cidades){
//     if(cidade.startsWith('s')) {
//          console.log(cidade)
// }}

/* Criem um array de numeros e usem forEach para somar todos os números*/

// let numeros = [1, 2, 3, 4, 5]
// let soma = 0
//     numeros.forEach((n) => {
//      soma += n    
//     })

//     console.log(soma)

/* Dado o array alunos abaixo, use os loops que preferir para gerar um relatório com três informações: lista de aprovados, lista de reprovados e a média geral da turma: */

    const turma = [
        {nome: 'Alice', nota: 9.0},
        {nome: 'Bruno', nota: 5.5},
        {nome: 'Carla', nota: 7.0},
        {nome: 'Daniel', nota: 3.8},
        {nome: 'Elisa', nota: 8.2},
    ]

    let aprovados = []
    let reprovados = []
    let soma = 0

    turma.forEach(({ nome, nota }) => {
        soma += nota
        if(nota >= 6 ){
            aprovados.push(nome)
        } else {
            reprovados.push(nome)
        }
    })

    let media = soma / turma.length
    console.log('Aprovados : ' + aprovados)
    console.log('reprovados: ' + reprovados)
    console.log('Média Geral:  ${media.toFixed(2)}')