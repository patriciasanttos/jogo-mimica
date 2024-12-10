import { useNavigate, useLocation } from "react-router-dom";
import { categories } from "../categoryList";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import CategoriesIcon from "../assets/icon-categories.svg";
import { useState } from "react";

function Categories() {
  const { state } = useLocation();
  const { playersList } = state;
  const [selectedCategoryList, setSelectedCategoryList] = useState([]);

  const navigate = useNavigate();

  const onClickStart = () => {
    if (selectedCategoryList.length === 0) {
      alert('Selecione uma ou mais categorias')
    } else {
      navigate("/startGame", { state: { selectedCategoryList, playersList } });
    }
  };

  const onClickSelectedCategoryList = (selectedCategory) => {
    if (selectedCategoryList.indexOf(selectedCategory) === -1) {
      setSelectedCategoryList([...selectedCategoryList, selectedCategory]);
    } else {
      setSelectedCategoryList(
        selectedCategoryList.filter((item) => {
          return selectedCategory !== item;
        })
      );
    }
  };

  return (
    <>
      <Header
        icon={CategoriesIcon}
        title={"Categorias"}
        text={"Selecione a(s) categoria(s) desejada(s)"}
      />
      <div className="selected-category">
        {categories.map((category) => {
          return (
            <Button
              onClick={() => onClickSelectedCategoryList(category)}
              className={`btn-categories ${
                selectedCategoryList.indexOf(category) === -1
                  ? ""
                  : "categories-selected"
              }`}
              text={category}
            />
          );
        })}
      </div>
      <div className="btn-container">
        <div className="btn-next">
          <Button
            onClick={onClickStart}
            className="bg-primary btn-team"
            text="Iniciar"
            disabled={selectedCategoryList.length === 0}
          />
        </div>
      </div>
    </>
  );
}

export default Categories;
