let nome
let idade 
let jafezaniversario
let resposta
const ano = 2024

console.log("qual é o seu nome?")

process.stdin.once("data", function(data){
    nome = data.toString().trim()
    console.log("qual é o sua idade")

    process.stdin.once("data", function(data){
        idade = parseInt(data.toString().trim())

        console.log('voce ja fez aniversario este ano?')
        process.stdin.once ("data", function (data) {
            resposta = data.toString().trim()
            processamento (nome, idade, resposta)
            process.exit()
        })
    })

})

function processamento(nome, idade, resposta){
    if (resposta == "sim"){
        var dataNasc = ano - idade 
        console.log(`${nome},voce nasceu em ${dataNasc}`)
    } else {
        console.log(`${nome}, voce nasceu em ${dataNasc-1}`)
    }
}