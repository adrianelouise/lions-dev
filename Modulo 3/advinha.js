  const readline = require ('readline')

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  })

  let rodadas = 0
  let maxrodadas = 10 

const numero = Math.floor(Math.random() * 100) + 1

console.log('bem vindo')
function palpite(){
    rodadas++
    if(rodadas < maxrodadas){
        rl.question ('Qual numero voce acha que é?' , (resposta)=> {
        console.log(`voce digitou ${resposta}`)
            switch (true) {
                case (resposta > numero):
                    console.log('muito alto')
                    palpite()
                    break;
                case (resposta < numero):
                    console.log('muito baixo')
                    palpite()
                    break;
                case (resposta == numero):
                    console.log('voce acertou')
                    console.log(`o numero de rodadas para acertar foi ${rodadas}`)
                    rl.close()
                    break;
                default:
                    console.log('inválido')
                    palpite()
                    break;
            }
        }    
        )
    } else {
         console.log(`o numero de rodadas excedeu o maximo`)
        rl.close()
}}
    palpite()



