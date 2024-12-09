import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import IndividualIcon from "../assets/icon-individual.svg";
import TeamIcon from "../assets/icon-team.svg";
import AddIcon from "../assets/icon-add.svg";

function Players() {
  const [playersList, setPlayersList] = useState([])
  const [PlayersText, setPlayersText] = useState("")

  const { state } = useLocation()
  const { isIndividual } = state
  const limit = isIndividual ? 10 : 6
  const playerText = isIndividual ? "pessoas" : "equipes"
  
  const navigate = useNavigate();

  const onClickButton = () => {
    if (playersList.length < 2) {
      alert(`Adicione no mínimo 2 ${playerText}`);
    } else {
      navigate("/categories", { state: { playersList } });
    }
  };

  const addPlayers = () => {
    if (playersList.length < limit) {
      setPlayersList([...playersList, PlayersText]);
      setPlayersText("");
    } else {
      alert(`Número máximo de ${playerText}`);
    }
  };

    const onKeyDownPlayersText = (e) => {
      if (e.key === "Enter") {
        addPlayers();
      }
    };

const removePlayers = (playersToRemove) => {
  playersList.filter((players) => {
    return players !== playersToRemove;
  });
};

const onChangePlayersText = (e) => {
  setPlayersText(e.target.value)
}

  return (
    <>
      <Header
        icon={isIndividual ? IndividualIcon : TeamIcon}
        title={isIndividual ? "Individual" : "Equipe"}
        text={`Até ${limit} ${playerText}`}
      />
      <div className="add-list">
        <div>
          <input
            className="input-list"
            type="text"
            placeholder={
              isIndividual ? "Digite o seu nome" : "Digite sua equipe"
            }
            onChange={onChangePlayersText}
            onKeyDown={onKeyDownPlayersText}
            value={PlayersText}
          />
        </div>
        <div className="img-add" onClick={addPlayers}>
          <img src={AddIcon} alt="" />
        </div>
      </div>
      <div className="list">
        <ul>
          {playersList.map((players) => {
            return <li onClick={() => removePlayers(players)}>{players}</li>;
          })}
        </ul>
      </div>
      <div className="btn-container">
        <div className="btn-next">
          <Button
            onClick={onClickButton}
            className="bg-primary btn-team"
            text="Próximo"
          />
        </div>
      </div>
    </>
  );
}

export default Players;
