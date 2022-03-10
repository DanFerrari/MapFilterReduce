# Objetivos

1.Conhecer o metodo filter

## O que é?

`é como se colocassemos o array em um filtro. Aquilo que definimos que será retirado do array será separado em um novo array, filtrando apenas oque definimos.`

1.Cria um novo array.
2.Não modifica o array original.

*sintaxe*

Parâmetros

array.filter(callback,thisArg);

`Callback`:função a ser executada em cada elemento.

`thisArg(opcional)`:valor de 'this' dentro da função de callback.


[Exemplo:] 

const frutas = ['maça fuji','maça verde','laranja','abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã')); 

resultado: ['maça fuji','maça verde'];

`o metodo includes, defini que se algum item tem a palavra maça , ele já é um item do filter. Porém se deixassemos sem o filter o filter nao teria nenhum resultado, pois nenhum item é so maça.`


