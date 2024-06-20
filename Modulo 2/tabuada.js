var numero

console.log('Qual tabuada voce quer saber ?')
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero) {
   for (let i = 0;i <= 10; i++){
  console.log(i*numero)

   }
}
