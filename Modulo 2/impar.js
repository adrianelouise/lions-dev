var numero
    
console.log("digita um numero")
process.stdin.once("data", function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero )
    process.exit( )}
)


function processamento(numero) {
    if (numero == 0){
    console.log("o número é igual a zero!")}
    else if (numero % 2 == 0){
    console.log("o número é par")}
    else {console.log("o número é impar!")}
}











