    let coresFavoritas = ['preto', 'azul ','verde']
    let coresEspeciais = []
    let cordoUsuario 

   console.log('qual é a sua cor favorita')
   process.stdin.once('data', function(data) {
     cordoUsuario = data.toString().trim()
     mostrarCores(coresFavoritas, coresEspeciais)
     process.exit()
   })

   function mostrarCores(coresFavoritas, coresEspeciais) {
    if (coresFavoritas.includes(cordoUsuario)) {
        console.log('a sua cor favorita é uma das favoritas da turma')
   
    } else { 
    coresEspeciais.push(cordoUsuario)
    console.log('a sua corfavorita é diferente das da turma')
    
   }
    console.log(`as cores favoritas sao ${coresFavoritas}`)
    console.log(`as minhas cores favoritas é ${coresEspeciais}`)
    console.log(coresFavoritas.length);
}

