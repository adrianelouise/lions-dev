   function calculadora(a, b, op){
    switch (op){
        case '+' :
            return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
                case '/':
                    return a / b;
                    default:
                        console.log('operação invalida')


    }
   }

   console.log (calculadora (4, 6, '+'))
   console.log (calculadora (8, 4 ,'-'))
   console.log ( calculadora(5,2, "*"))
   console.log (calculadora(6,3, '/'))
   