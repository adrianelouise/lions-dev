 let  nome 
 let idade

 console.log("qual é o seu nome?")
 process.stdin.once("data", function (data){
    nome = data.toString().trim()
    console.log("qual é sua idade")

    process.stdin.once("data", function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit ()
        })

    })

    function processamento (nome, idade){
        if (idade >=18){
            console.log(`${nome}, você é maior idade`)}
            else { var ano = 18 - idade
                console.log(`${nome}, você vai ser maior de idade em ${ano} anos.`)}
        }

