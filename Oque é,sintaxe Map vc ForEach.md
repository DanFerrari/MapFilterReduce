# Map
*Sintaxe Matematica*

`Map é quando um conjunto passa por uma operação e se torna outro conjunto.`

`Para isso utilizasse a Map Function. Uma funcao de mapeamento que transforma um conjunto em outro.`

*No contexto do javascript*

1.Cria um novo array
2.Não modifica o array original
3.Realiza as operações em ordem

*Sintaxe Javascript*

array.map(callback, thisArg)

callback(item,index,array)

`Callback`-> funcao a ser executada em cada elemento.

`ThisArg`(opcional): valor de 'this' dentro da função de callback. Apenas se vc quiser realizar operações com objetos.


# Map vc forEach

[Diferenças]-> 
1.Valor de Retorno
2.Considere se o array auxiliar será necessário

exemplos:

`USANDO MAP`
const array = [1,2,3,4,5];

array.map((item) => item * 2); 

resultado: [2,4,6,8,10];


`USANDO forEach`
const array = [1,2,3,4,5];

array.forEach((item) => item * 2); 

resultado: undefined;







