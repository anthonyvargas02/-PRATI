// let serie = {
//     nome: "Two and a Half men",
//     genero: "Comédia",
//     nrTemporada: "12",
//     status: "Finalizada",
//     classificacao: 16,
//     nrEpisodios:{
//         temp1:10,
//         temp2:30
//     },

//     mostrarCaracteristicas: function() {
// return `Série: ${this.nome} | Classificação: ${this.classificacao}`

// }

// }

// console.log(serie.nome)
// console.log(serie.mostrarCaracteristicas())

// let livro = {
//     titulo: "O hobbit",
//     autor: "J. R. R. Tolkien"
// }

// function Computador (processador, gpu, ram, armazenamento){
//         this.processador = processador,
//         this.gpu = gpu,
//         this.ram = ram,
//         this.armazenamento = armazenamento
    
// }

// let pc = new Computador("i3", "RX6600", "16GB", "1TB SSD")

// function criarComputador(processador, gpu, ram, armazenamento){
//     return{
//         processador,
//         gpu,
//         ram,
//         armazenamento,
//         mostrarCaracteristicas(){
//             console.log('caracteristicas')
//         }
//     }
// }

// let computador = criarComputador("i3", "RX6600", "16GB", "1TB SSD")
// computador.mostrarCaracteristicas()

let movies = [
    {title: "Spider-Man", genero: "Hero"},
    {title: "As branquelas", genero: "Comédia"},
    {title: "007", genero: "Ação"}
]

console.table(movies)