import { useNavigate } from "react-router-dom";
import "../Header/Header.css";
import Back from "../../assets/icon-back.svg";

function Header({ icon, title, text }) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
  };

  return (
    <div className="container-header">
      <div className="header" onClick={onClickButton}>
        <div>
          <img src={Back} alt="" />
        </div>
        <div className="back">
          <h3>Voltar</h3>
        </div>
      </div>
      <div className="selected-team">
        <div>
          <img src={icon} alt="" />
        </div>
        <div className="title-header">
          <h1>{title}</h1>
        </div>
        <div className="text-header">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
