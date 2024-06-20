let notas = [0, 7, 8, 9, 10, 7, 6, 4, 8, 5]
let soma = 0
let maior = notas[0]
let menor = notas[0]
var acimaMedia = 0
let notasReprovadas = 0

  for (i= 0; i < notas.length; i++) {
    soma += notas[i]
}
let media = soma / notas.length
  console.log(`${media}`)
   
  for (i= 0; i < notas.length; i++) {
    if (notas[i] > maior) {
    maior = notas[i]
    } else if (notas[i] < menor) {
        menor = notas[i]
    }
  }

   console.log(`à maior nota é ${maior}`)
   console.log(`à menor nota é ${menor}`)  

  for(let i = 0; i < notas.length; i++){
    if (notas[i] >= media) {
        acimaMedia++
    }
    }
  console.log (`numero de nota acima da media é ${acimaMedia}`)

  notas.push[4]
  console.log(`a array atualizada é ${notas}`)
  
  for (i = 0; i< notas.length;i++){
    if (notas[i] < 8){
        notasReprovadas++
    }
  }

console.log(`às notas reprovadas sao ${notasReprovadas}`)
