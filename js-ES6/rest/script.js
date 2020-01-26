function minhaLista(...nomes) {
    document.write(nomes);
}

minhaLista("matheus", " amanda", " joana")

document.write("<br>");

//--//

//spread + rest

function cadastrar(usuarios, ...novosUsers) { //funcao para juntar ambos
    let totaldeUsers = [
        ...usuarios,
        ...novosUsers
    ]
    return document.write(totaldeUsers);
}

let usuarios = ["amanda", " joana"]; //usuarios que já tenho

let novosUsers = cadastrar(usuarios, " felipe", " mari"); //usuarios que preciso
