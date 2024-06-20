const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let musicas = []
exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar musica
    2. Lista musica
    3. Editar musica
    4. Remover musica
    5. Sair
    `)

rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarMusica()
                break
            case '2':
                listarMusica()
                break
            case '3':
                editarMusica()
                break
            case '4':
                removerMusica()
                break
            case '5':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
}

function cadastrarMusica() {
    rl.question('Digite o nome da musica: ', (nome) => {
        rl.question('Digite o nome do cantor: ', (cantor) => {
            rl.question('Digite o estilo musical: ', (estilo) => {
                musicas.push({ nome: nome, cantor:  cantor, estilo: estilo})
                console.log('Música cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}

function listarMusica(){
    if (musicas.length === 0){
        console.log("Não há musicas cadastrados")
    } else{ 
        console.log("Lista de musica:")
        for (let i = 0; i < musicas.length; i++){
            const musica = musicas[i]
            console.log(`Nome: ${musica.nome}, cantor: ${musica.cantor}, estilo: ${musica.estilo}`)  
        }
    

    }
    exibirMenu()



}

function editarMusica(){
    if (musicas.length == 0){
        console.log("Não há musicas cadastrados")
    } else {
        console.log('Lista de musica')
        musicas.forEach((musica, index) => {
            console.log(`${index + 1}, ${musica.nome}`)
        })
        rl.question('Digite o número de musica que deseja editar:', (numero) =>{
            if(numero > 0 && numero <= musicas.length){
                rl.question('Digite o novo nome:', (nome) => {
                    rl.question('Digite o novo cantor:', (cantor) => {
                        rl.question('Digite o novo estilo:', (estilo) => {
                            musicas[numero - 1] = {
                                nome,
                                cantor,
                                estilo
                            }
                            console.log('Editado com sucesso!')
                            exibirMenu()
                        })
                    })
                })
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}


function removerMusica(){
    if(musicas.length == 0){
        console.log('Nenhuma musica cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de musica')
        musicas.forEach((musica, index) => {
            console.log(`${index + 1}, ${musica.nome}`)
        })
        rl.question('Digite o número de musica que deseja remover:', (numero) =>{
            if(numero > 0 && numero <= musicas.length){
                musicas.splice(numero - 1, 1)
                console.log('musica removido com sucesso!')
                exibirMenu()
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}