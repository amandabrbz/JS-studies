/*OBJETOS*/
const pessoa = {
    nome: 'Amanda',
    sobrenome: 'Barboza',
    idade: 23,
    cargo: 'dev'
};

document.write(pessoa);

document.write('<br><br>');

//guardando o atributo do objeto em uma variável
let {nome} = pessoa;
document.write(nome);

document.write('<br><br>');

//para substituir um atributo do objeto
let {cargo:funcao} = pessoa;
document.write(funcao);

document.write('<br><br>');

/*ARRAYS*/

let nomes = ["Matheus ", " Barboza ", 50];
document.write(nomes);

document.write('<br><br>');

//acessa o array via posição 
let {0:name} = nomes;
document.write(name);

document.write('<br><br>');

//como acessar mais posições
let {1:sobrename, 2:idades} = nomes;
document.write(idades);
