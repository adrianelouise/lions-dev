 let nota1
 let nota2 
 let media

  console.log(`qual a sua prineira nota`)
  process.stdin.once('data', function(data) {
  nota1 = parseFloat(data.toString().trim())
  console.log('qual é a segunda nota?')

  process.stdin.once("data", function(data) {
  nota2= parseFloat(data.toString().trim())
  processamento(nota1,nota2)
  process.exit()
  })
  
})

function processamento(nota1, nota2) {
let media = (nota1 + nota2) / 2

if (media >= 8) {
console.log(`parabens voce passou com a nota ${media}`)
} else {
console.log(`que pena voce ficou de recuperaçao pois teve a ${media}`)
}
}

