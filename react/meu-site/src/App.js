import React from "react";

const Equipe = (props) => {
  return (
    <React.Fragment>
      <Sobre nome={props.nome} 
             cargo={props.cargo}
             idade={props.idade} />
    </React.Fragment>
  );
};

const Sobre = (props) => {
    return(
        <React.Fragment>
            <h2>Olá, sou {props.nome}, tenho {props.idade} e sou {props.cargo}</h2>
        </React.Fragment>
    );
}

function App() {
  return (
    <React.Fragment>
      <h1>Nossa Equipe</h1>
      <Equipe nome="Amanda" cargo="Dev Sandy" idade="23"/>
    </React.Fragment>
  );
}

export default App;
