// function soma(a, b) {
//     return a + b
// }

// let a = 10
// let b = 20

// let resultado = soma(a, b)

// console.log(resultado)

// let frutas = ["Maça"]

// function substituirLista(lista){
//     lista = ["Banana" , "Uva"]
// }

// substituirLista(frutas)
// console.log(frutas)


// let usuario = { nome: "Jaques"}

//     function alterarNome(usuario){
//         usuario.nome = "Tonho"
//     }

//     alterarNome(usuario)
//     console.log(usuario.nome)

// function soma (a, b = 10){
//     console.log(a + b)
// }

// soma(10)

// const multiplicar = (a, b) => console.log(a * b)
// multiplicar(10,2) 

/* Escreva uma função para cada operação onde o array será percorrido e calcule:

A soma de todos os elementos
A média dos elementos
O maior valor encontrado
O menor valor encontrado*/

let array = [10, 2, 30, 123, 12]

function somaElementos(lista){
    let soma = 0

    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    console.log(soma)
}

function mediaElementos(lista){
    let soma = 0

    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }

    let media = soma/lista.length
    console.log(media)
}

function maiorElementos(lista) {
    let maior = lista[0]

    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > maior) {
            maior = lista [i]
        }
    }
    console.log(maior)
}

function menorElementos(lista) {
    let menor = lista[0]

    for (let i = 0; i < lista.length; i++) {
        if(lista[i] < menor) {
            menor = lista [i]
        }
    }
    console.log(menor)
}

somaElementos(array)
mediaElementos(array)
maiorElementos(array)
menorElementos(array)