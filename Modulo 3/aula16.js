 var ladosDado

 console.log("qual a quantidade de lado dos seu dado ?")
 process.stdin.once('data', function(data){
ladosDado = parseInt(data.toString().trim())
processamento(ladosDado)
process.exit()
 })


 function processamento(ladosDado){
  console.log(Math.floor(Math.random() * ladosDado) + 1)

 }