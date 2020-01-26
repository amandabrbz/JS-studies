var lista = ["Matheus", "Lucas", "Henrique", "João", 15];

lista.length //tamanho da lista
lista[x] //busca a posição
lista.indexOf('Parametro'); //vai retornar a posição do array, se não encontrar, volta numero negativo;
lista.join(', '); //junta os parametros com algo;
lista.pop(); //vazio retira a ultima posição;
lista.shift(); //tira o primeira posição;
lista.push('algo'); //coloca uma posição

if(lista.indexOf("parametro") > 1) {
    console.log("hi");
}