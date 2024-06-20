  var nota
    
  console.log('qual é a sua nota?') 
   process.stdin.once('data', function(data) {
   nota = parseInt(data.toString().trim())
   processamento(nota)
   
   process.exit()
  })

function processamento (nota) {
switch(true) {
  case (nota >=90 && nota <=100):
    console.log(`Parabens voce foi classificado com a nota ${nota} e classificaçao A`)
    break;
  case (nota >= 80 && nota <= 89):
    console.log(`Parabens voce foi classificado com a nota ${nota} e classificaçao B`)
    break;
  case (nota >=70 && nota <=79):
    console.log(`Parabens voce foi classificado com a nota ${nota} e classificaçao C`)
    break;
  case (nota >=60 && nota <=69):
    console.log(`Que pena voce nao foi classificado pois tirou a nota ${nota} e classificaçao D`)
    break;
  case (nota >= 0 && nota <=59):
    console.log(`Que pena voce nao foi classificado pois tirou a nota ${nota} e classificaçao F`)
    break;
  default:
    console.log('nota invalida') 
  break;
}

  
  
  
  
  
  
        }

