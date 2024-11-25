import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import IconeIndividual from "../assets/icone-individual.svg";
import IconeAdd from "../assets/icone-add.svg";

function Individual() {
  const [listaIndividual, setListaIndividual] = useState([])
  const [textoIndividual, setTextoIndividual] = useState("")
  
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/categorias");
  };

  const adicionarIndividual = () => {
    if(listaIndividual.length < 10) {
      setListaIndividual([...listaIndividual, textoIndividual]);
      setTextoIndividual("")
    } else {
      alert('Número máximo de pessoas')
    }
  }

const removerIndividual = (individualParaRemover) => {
  listaIndividual.filter((individual) => {
    return individual !== individualParaRemover
  })
}

const onChangeTextoIndividual = (e) => {
  setTextoIndividual(e.target.value)
}

  return (
    <>
      <Header icone={IconeIndividual} titulo={"Individual"} texto={"Até 10 pessoas"} />
      <div className="add-list">
        <div>
          <input
            className="input-list"
            type="text"
            placeholder="Digite o seu nome"
            onChange={onChangeTextoIndividual}
            value={textoIndividual}
          />
        </div>
        <div className="img-add" onClick={adicionarIndividual}>
          <img src={IconeAdd} alt="" />
        </div>
      </div>
      <div className="lista">
        <ul>
          {listaIndividual.map((individual) => {
            return <li onClick={() => removerIndividual(individual)}>{individual}</li>
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

export default Individual;
