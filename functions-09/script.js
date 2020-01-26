// uma função para pegar o nome do user
function entrar() {
  var area = document.getElementById("area"); //pega a div do bem vindo
  var texto = prompt("Digite seu nome"); //caixa de entrada

  if (texto == "" || texto == null) {
    //se o user não digitou ou deixou vazio
    alert("Ops! Digite novamente"); //mostra o alerta
    area.innerHTML = "Bem vindo "; //imprime a mensagem
  } else {
    //caso o user digite de primeira,
    area.innerHTML = "Bem vindo " + texto; //imprime a mensagem
  }
}

/*
o innerHTML ele irá retornar todo o texto e o html que existem no elemento. 
ate mesmo as tags htmls como span, strong e demais.
podemos escrever texto e html no DOM.
*/

/*
innerText, diferentemente do innerHTML, irá retornar apenas o texto, 
ignorando todas as tags HTML de dentro do elemento, porém innerText “entende” 
o CSS do elemento, então retornará apenas textos visíveis.
*/