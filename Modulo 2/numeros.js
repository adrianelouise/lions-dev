   var numero = 0
   var somaPares = 0 
   var somaImpares = 0
   var totalPares = 0
   var totalImpares = 0
   var mediaPares = 0
   var mediaImpares = 0
   
   for(i = 0; i <= 999; i++){
     if (i % 2 == 0) {
     somaPares += i
     totalPares++
     } else {
    somaImpares += i
    totalImpares++
     }
    }
    mediaPares = somaPares / totalPares
    mediaImpares = somaImpares / totalImpares

    console.log(`A soma dos numeros pares é ${somaPares}`)
    console.log(`A soma dos numeros impares é ${somaImpares}`)
    console.log(`o total dos numeros pares é ${totalPares}`)
    console.log(`o total dos numeros impares é ${totalImpares}`)
    console.log(`a media dos numeros pares é ${mediaPares}`)
    console.log(`a media dos numeros impares é ${mediaImpares}`)

    if (mediaPares < mediaImpares) {
        console.log("A media dos numeros pares é maior")
    } else {
        console.log("A media dos numeros impares é menor")
    }
