import Button from "../components/Button/Button";
import { listaDeCategorias } from '../ListaDeCategorias'
import { useLocation } from "react-router-dom";

function JogoIniciado() {
    const { state } = useLocation();
    console.log(state)

  return (
    <>
      <div className="container-jogo">
        <img width="150px" src={listaDeCategorias[0].imagem} alt="" />
        <h1>{listaDeCategorias[0].nome}</h1>
        <p className="sinopse">{listaDeCategorias[0].sinopse}</p>
      </div>
      <Button text={"Próximo"} className={"bg-primario btn-team"} />
    </>
  );
}

export default JogoIniciado;
