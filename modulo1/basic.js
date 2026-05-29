/*console.log("Hello, word!")
console.log('Hello, word!')
console.log("Shakespeare said, 'To be or not to be'")
console.log(`Hello, word!`) //STRINGS

console.log('Meu nome é Anthony e tenho', 26, 'anos')
console.log(20)
console.log(4.5)
console.log(8) // NUMBERS

console.log(true) 
console.log(false)
console.log(null) 
console.log(undefined) //BOOLEAN

console.log(typeof true) //PARA SABER O TIPO

let nome ='Anthony' 
console.log(nome)

console.log("Meu nome é " + nome)
console.log(`Meu nome é ${nome}`) //VARIÁVEL

const localNascimento = 'Canoas' //CONST SÃO VALORES QUE NAÕ DEVE MUDAR NUNCA 


let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)
console.log((a + b)/2) 


let placar = 0

placar += 2

console.log(placar)

let numero = "10"

console.log(Number(numero) + 5) //CASTING
*/

/*CRIE DUAS VARIAVÉIS QUE RECEBEM DOIS VALORES NÚMERICOS E CALCULE A MÉDIA*/
/*
 let numero = 10
 let numero2 = 8

 let media = (numero + numero2)/2

 console.log(media) 

 console.log(Math.floor(Math.random() * 10 )) // GERA NÚMERO ALEATÓRIO

 console.log(Math.pow(2, 8)) //EXPONENCIAÇÃO 
 console.log(Math.abs(-50)) // REMOVE SINAL DE NEGATIVO
 console.log(Math.sqrt(81)) // RAIZ QUADRADA


const agora = new Date()
console.log(agora.toString()) // CAPTURA O MOMENTO ATUAL 

console.log("no: " + agora.getFullYear())

console.log(agora.toLocaleDateString("pt-br"))


let frase = "O dia está muito legal"

console.log(frase.toUpperCase()) //COLOCAR TEXTO EM LETRA MAIUSCULA
console.log(frase.toLowerCase()) //COLOCAR TEXTO EM LETRA MINUSCULA


let a = 10
let b = 5

console.log((a > b) || (b != a))

 /*"Para fazer uma compra você precisa de dinheiro e cartão de crédito" /* E = &&      OU É = || NEGAÇÃO É = !

 let temDinheiro = true
 let temCartaoCredito = false

 console.log(temDinheiro && temCartaoCredito)  


 let login = "usuarioadmin"
 let senha = "Pica-pau"

 let loginCorreto = login === "usuarioadmin" && senha === "Pica-pau"
 let loginErrado = login != "usuarioadmin" || senha != "Pica-pau"


 let nota = 10
 let nota2 = 10

 let media = (nota + nota2)/2

 if(media >= 6) {
    if(media === 10){
        console.log("Parabéns, aluno")
    }
    console.log("Aprovado!")
 } else if(media < 6 ){
    console.log("Reprovado")
 } else {
    console.log("Deu ruim")
 }
  */

 /*Exercicio: Verifique se uma pessoa pode ou não tirar a CNH. Critério: Ter mais de 18 anos*/

let idade = 61

if((idade >= 18) && (idade <= 60)){
    console.log("Você pode ter CNH")
} else if ((idade < 18) && (idade > 0)) {
    console.log("Você não pode ter CNH")
} else{
    console.log("Você não informou uma idade válida")
}

