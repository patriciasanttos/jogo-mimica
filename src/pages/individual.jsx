import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import IconeIndividual from "../assets/icone-individual.svg";
import IconeAdd from "../assets/icone-add.svg";

function Individual() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/categorias");
  };

  return (
    <>
      <Header icone={IconeIndividual} titulo={"Individual"} texto={"Até 10 pessoas"} />
      <div className="add-list">
        <div>
          <input
            className="input-list"
            type="text"
            name=""
            placeholder="Digite o seu nome"
          />
        </div>
        <div className="img-add">
          <img src={IconeAdd} alt="" />
        </div>
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
