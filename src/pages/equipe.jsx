import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import IconeEquipe from "../assets/icone-equipe.svg";
import IconeAdd from "../assets/icone-add.svg";

function Equipe() {
  const [listaEquipe, setListaEquipe] = useState([]);
  const [textoEquipe, setTextoEquipe] = useState("");

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/categorias");
  };

  const adicionarEquipe = () => {
    if (listaEquipe.length < 6) {
      setListaEquipe([...listaEquipe, textoEquipe]);
      setTextoEquipe("");
    } else {
      alert("Número máximo de equipes");
    }
  };

  const onKeyDownTextoEquipe = (e) => {
    if (e.key === "Enter") {
      adicionarEquipe();
    }
  };

  const onChangeTextoEquipe = (e) => {
    setTextoEquipe(e.target.value);
  };

  const removerEquipe = (equipeParaRemover) => {
    setListaEquipe(
      listaEquipe.filter((equipe) => {
        return equipe !== equipeParaRemover;
      })
    );
  };

  return (
    <>
      <Header icone={IconeEquipe} titulo={"Equipe"} texto={"Até 6 equipes"} />
      <div className="add-list">
        <div>
          <input
            className="input-list"
            type="text"
            placeholder="Digite sua equipe"
            onChange={onChangeTextoEquipe}
            onKeyDown={onKeyDownTextoEquipe}
            value={textoEquipe}
          />
        </div>
        <div className="img-add" onClick={adicionarEquipe}>
          <img src={IconeAdd} alt="" />
        </div>
      </div>
      <div className="lista">
        <ul>
          {listaEquipe.map((equipe) => {
            return <li onClick={() => removerEquipe(equipe)}>{equipe}</li>;
          })}
        </ul>
      </div>
      <div className="btn-container">
        <div className="btn-next">
          <Button
            onClick={onClickButton}
            className="bg-primario btn-team"
            text="Próximo"
          />
        </div>
      </div>
    </>
  );
}

export default Equipe;
