# Anotações:

## Diferenças entre as variavéis

- **Var:** São variáveis que podem ser acessadas globalmente;
- **Let:**  São variáveis que só podem ser acessadas no escopo;
- **Const:** São variáveis que não podem/vão sofrer alterações ao decorrer do código, elas têm valores fixos.

## WebStorage

- localStorage: Fica gravado no navegador, tipo um cookie;
- sessionStorage: Fica gravado apenas naquela sessão de navegação;

### Nova forma de concatenar no ES6:

- *Exemplo*:  let pessoa = ``meu nome é ${nome} ${sobrenome} e tenho ${idade}``;

### Objeto x Array

- Objeto dado por  **{}**;
- Array dado por **[]**;

## Spread operator

- É injentar novos argumentos em objetos ou arrays. 

`A sintaxe de propagação (Spread) permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.`

## Rest operator

- É para transformar um número indeterminado de parâmetros em um array. E ele apenas funciona dentro de uma função, sendo ele um dos argumentos da função.

`The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.`

## reduce()

- O que reduce() faz: como map(), reduce() percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado é o valor acumulado passado de callback para callback. Depois de todos os elementos terem sido avaliados, reduce() retorna o valor acumulado/concatenado.