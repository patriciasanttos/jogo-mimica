import Button from "../components/Button/Button";
import { shuffleList } from "../categoryList";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import IconHome from "../assets/icon-home.svg";

function StartGame() {
  const { state } = useLocation();
  const { selectedCategoryList, playersList } = state;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pointedIndex, setPointedIndex] = useState(null);
  const [points, setPoints] = useState(
    playersList.map((person) => ({
      name: person,
      points: 0,
    }))
  );

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/");
  };

  let filteredList = shuffleList.filter((item) => {
    return selectedCategoryList.includes(item.category);
  });

  const itemToShow = filteredList[selectedIndex];

  const showNextItem = () => {
    if (pointedIndex !== null) {
      if (selectedIndex < filteredList.length - 1) {
        setSelectedIndex(selectedIndex + 1);
        setPointedIndex(null);
      } else {
        alert("Fim do Jogo");
      }
    } else {
      alert("Marcar pontuação");
    }
  };

  const countPoints = (index) => {
    if (!pointedIndex) {
      const newPoints = [...points];
      newPoints[index].points += 1;
      setPoints(newPoints);
      setPointedIndex(index);
    } else {
      if (pointedIndex === index) {
        const newPoints = [...points];
        newPoints[index].points -= 1;
        setPoints(newPoints);
        setPointedIndex(null);
      } else {
        const newPoints = [...points];
        newPoints[pointedIndex].points -= 1;
        newPoints[index].points += 1;
        setPoints(newPoints);
        setPointedIndex(index);
      }
    }
  };

  return (
    <>
      <div className="header" onClick={onClickButton}>
        <div>
          <img src={IconHome} alt="" />
        </div>
        <div>
          <h3>Início</h3>
        </div>
      </div>
      <div className="container-game">
        <img width="150px" src={itemToShow.image} alt="" />
        <h1>{itemToShow.name}</h1>
        <p className="synopsis">{itemToShow.synopsis}</p>
      </div>
      {points.map((person, index) => (
        <div>
          <Button
            onClick={() => countPoints(index)}
            text={`${person.name} ${person.points}`}
            className="btn-score-point mobile"
          />
        </div>
      ))}

      {pointedIndex !== null && (
        <Button
          onClick={showNextItem}
          text={"Próximo"}
          className={"bg-primary btn-team"}
        />
      )}
    </>
  );
}

export default StartGame;
