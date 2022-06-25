//o que so vetores ou arrays

let array0 = ['string', 1, true];
console.log(array0);

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]);

//forEach
array.forEach(function(item, index){console.log(item, index)})

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift()
console.log(array);

array.unshift('item novo no inicio');
console.log(array);

console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array);

let novoArray = array.slice(0,3);
console.log(novoArray);

let object = { string: "string", number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

//modos de fazer desestruturação
var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);


