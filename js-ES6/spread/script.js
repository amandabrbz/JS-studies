//-Arrays-//

let primeiros = [1, 2, 3];
document.write(primeiros + "<br><br>");

//...primeiros faz o primeiro array ser incrementado no segundo;
let segundos = [...primeiros, 4,5,6];
document.write(segundos + "<br>")

//-Objeto-//

let pessoas = {
    pe1: "matheus",
    pe2: "larissa",
    pe3: "cassi"
}

let maisPessoas = {
    ...pessoas,
    pe4: "marcela",
    pe5: "joao"
}

//-Exemplo pratico-// 
function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        funcao: 'dev',
        status: 1,
        cod: 12345
    }

    return novosDados;
}

cadastroPessoa({nome: 'Amanda', ano: 1996});