import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import IconeEquipe from "../assets/icone-equipe.svg";
import IconeAdd from "../assets/icone-add.svg";

function Equipe() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/categorias");
  };

  return (
    <>
      <Header icone={IconeEquipe} titulo={"Equipe"} texto={"Até 6 equipes"} />
      <div className="add-list">
        <div>
          <input
            className="input-list"
            type="text"
            name=""
            placeholder="Digite sua equipe"
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

export default Equipe;
