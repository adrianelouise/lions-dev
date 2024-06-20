var numeros = [1, 2, 3, 4, 5, 6, 7, 8,9,10]
var numeroImpares = []

for (i = 1; i<= numeros.length; i ++){
if (i % 2 !=0){
    numeroImpares.push(i)
}
}

console.log(`os numeros impares são ${numeroImpares}`)
