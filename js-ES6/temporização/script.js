function acao() {
    document.write("Executando <br>");
}

// TEMPO EM MILISEGUNDO 1000 = 1 segundo 

//Executa continuo de tempo em tempo
setInterval(acao, 3000);

document.write("<hr>"); 

//Executa uma vez e para
setTimeout(acao, 1000);

//para fazer o interval parar
var timer = setInterval(acao, 4000);
clearInterval(timer);


