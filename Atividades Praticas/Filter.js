
const numeros = [2,5,4,32,2,7,53,32];

function filterPar(arr){

 return arr.filter(item => (item % 2 == 0) ) ;
}

console.log(filterPar(numeros));