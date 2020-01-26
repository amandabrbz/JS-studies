//local storage
/*salva internamente no navegador tipo cookie*/

/*
localStorage.setItem("nome", "Amanda"); //para guardar
localStorage.getItem("nome"); //chamar pela chave
localStorage.removeItem("nome"); //remover

localStorage.nome = "Amanda";
*/

//session storage
/* salva enquanto seu navegador está aberto, na sessão. */

/*
sessionStorage.setItem("nome", "Amanda"); //para guardar
sessionStorage.getItem("nome"); //chamar pela chave
sessionStorage.removeItem("nome"); //remover

sessionStorage.nome = "Amanda";
*/

var nome = '';

if(typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt('digite seu nome');
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;