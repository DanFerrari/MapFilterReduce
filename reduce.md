# Objetivos

1.Entender o metodo reduce.


*O que é*

`Diferente dos filter e do map, o metodo Reduce, não irá resultar em um novo array. Ele irá executar uma função em todos os elementos do array, retornando um valor único.`

*Sintaxe*

array.reduce(callbackFn, initialValue);

`Callback`: função a ser executada a partir do acumulador.
`InitialValue`: valor sobre o qual o retorno final irá atuar.


const [callbackFn] = function(`accumulator`, `currentValue`, `index`, `array`){
//do something    
}

array.reduce(callbackFn, initialValue)


`Accumulador/prevValue`: acumulador de todas as chamadas de callbackFn

`currentValue`: elemento atual sendo acessado pela função

