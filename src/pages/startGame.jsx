import Button from "../components/Button/Button";
import { categoryList } from "../categoryList";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import IconHome from "../assets/icon-home.svg"

function StartGame() {
  const { state } = useLocation();
  const { selectedCategoryList, playersList } = state;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPointed, setIsPointed] = useState(false);
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

  let filteredList = categoryList.filter((item) => {
    return selectedCategoryList.includes(item.category);
  });

  
  // filteredList = shuffle(filteredList)
  const itemToShow = filteredList[selectedIndex];

  const showNextItem = () => {
       if (isPointed) {
         if (selectedIndex < filteredList.length - 1) {
           setSelectedIndex(selectedIndex + 1);
           setIsPointed(false);
         } else {
           alert("Fim do Jogo");
         }
       } else {
         alert("Marcar pontuação");
       }
  };

  const countPoints = (index) => {
    if (!isPointed) {
      const newPoints = [...points];
      newPoints[index].points += 1;
      setPoints(newPoints);
      setIsPointed(true);
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
            className="btn-score-point"
          />
        </div>
      ))}
      <Button
        onClick={showNextItem}
        text={"Próximo"}
        className={"bg-primary btn-team"}
      />
    </>
  );
}

export default StartGame;
