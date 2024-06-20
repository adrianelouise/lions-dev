let prova1
let prova2
let nota = []

console.log("digite a nota da primeira prova")
    process.stdin.once("data", function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log("qual a nota da segunda prova")

    process.stdin.once("data", function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
    })

function processamento(prova1, prova2) {
    var media = (nota[0] + nota[1]) /2
    nota.push(prova1, prova2)
    console.log(`a media das provas é ${media}`)
} 