const lista = [1, 2, 3, 4, 5];

const novaLista = lista.map(function(item, index) {
  return item + index;
});

document.write(novaLista + "<br>")

/*
lista.map() //mapear a função
lista.reduce() //é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.
lista.filter() //é preciso remover elementos indesejados com base em alguma(s) condição(ões).
lista.find(); //procurar no array
*/

const find = lista.find(function(item) {
    return item === 4;
});

document.write(find + "<br>")