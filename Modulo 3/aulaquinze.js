  let notas = [7.5, 8.0, 6.0, 9.5,5.0,8.5,7.0,10.0,6.5,9.0];
  let soma = 0
  let media = 0
  let notaMaxima = notas [0]
  let notaMinima = notas [0]
  let conta = 0
  let reprovados = 0

  // calcular a media 
  for (let i = 0; i< notas.length; i ++){
soma += notas [i]
  }
media = soma/ notas.length
console.log ( `a media é ${media}`)

// nota maxima e nota minima 
for (i = 0; i < notas.length; i ++){
    if(notas [i] > notaMaxima){
      notaMaxima = notas [i]}
     else if  (notas[i] < notaMinima){
    notaMinima = notas [i]
    }
}

    console.log (`notaMaximo: ${notaMaxima}`) 
    console.log (`notaMinima:${notaMinima}`)

for (i =0;i < notas.length;i++){
    if (notas[i] >= media){
      conta++
}
}
console.log (`a nota acima da media 6.0 ${conta}`)

for (i = 0; i < notas.length; i ++){
    if (notas[i] < 6.0){
        reprovados++
    }
}
 console.log (`reprovados 0:${reprovados}`)

