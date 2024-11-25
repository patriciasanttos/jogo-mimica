import { useNavigate } from "react-router-dom";
import "../Header/Header.css";
import Voltar from "../../assets/icone-voltar.svg";

function Header({ icone, titulo, texto }) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
  };

  return (
    <div className="container-header">
      <div className="header" onClick={onClickButton}>
        <div>
          <img src={Voltar} alt="" />
        </div>
        <div className="voltar">
          <h3>Voltar</h3>
        </div>
      </div>
      <div className="selected-team">
        <div><img src={icone} alt="" /></div>
        <div className="titulo-header"><h1>{titulo}</h1></div>
        <div className="texto-header"><p>{texto}</p></div>
      </div>
    </div>
  );
}

export default Header;
