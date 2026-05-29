/*const PROMPT = require('prompt-sync')

// <contador>; <condição>; <incremento>
for(let i = 0; i <= 10; i++){
    console.log(i)
} */

    /*Tabuada*/

    /*const PROMPT = require('prompt-sync')()

    let valor = Number(PROMPT('Informe o valor que você quer receber a tabuda:'))

    for(let i = 1; i <= 10; i++){
        console.log(`${valor} x ${i} = ${valor * i}`)
    } */

        /* let nums = [10, 20, 30, 40, 50]

        console.table(nums)

        console.log(nums[0]) */

        /*let hardware = ['Notebook', 'Mouse', 'Teclado', 10]

        console.table(hardware) */

        //let array =  ['Notebook', 'Mouse', 'Teclado']
       //console.log(array.length)
        //for(let i = 0; i < array.length; i++){
        //console.log(array[i])}

        let bagunca = [
            [1, 2],
            ['a', 'b'],
            ['Hardware', 'Software']
        ]

        console.table(bagunca)

        for(let i = 0; i < bagunca.length; i++){
            for(let j = 0; j < bagunca[i].length; j++)
            console.log(bagunca[i][j])
        }