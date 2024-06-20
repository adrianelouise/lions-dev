let nome
let idade 
const ano = 2024

console.log("qual é o seu nome?")

process.stdin.once("data", function(data){
    nome = data.toString().trim()
    console.log("qual é o sua idade")

    process.stdin.once("data", function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })

})

function processamento(nome, idade){
    var dataNasc = ano - idade 
    var aniv = dataNasc - 1
    console.log(`Olá ${nome} se tiver feito aniversário seu ano de nascimento é ${dataNasc}, se não tiver feito é ${aniv}`)
}
