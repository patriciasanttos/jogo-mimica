import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import IconeCategorias from "../assets/icone-categorias.svg";
import { useState } from "react";
  const categorias = ["Filmes", "Séries", "Animes"];









function Categorias() {
  const [selectedCategoryList, setSelectedCategoryList] = useState([]);

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
  };

  const onClickSelectedCategoryList = (selectedCategory) => {
   if (selectedCategoryList.indexOf(selectedCategory) === -1) {
    setSelectedCategoryList([...selectedCategoryList, selectedCategory])
   } else {
    setSelectedCategoryList(selectedCategoryList.filter((item) => {
      return selectedCategory !== item
    }))
   }
  };

  return (
    <>
      <Header
        icone={IconeCategorias}
        titulo={"Categorias"}
        texto={"Selecione a(s) categoria(s) desejada(s)"}
      />
      <div className="selected-category">
        {categorias.map((categoria) => {
          return (
            <Button
              onClick={() => onClickSelectedCategoryList(categoria)}
              className={`btn-categorias ${
                selectedCategoryList.indexOf(categoria) === -1
                  ? ""
                  : "categories-selected"
              }`}
              text={categoria}
            />
          );
        })}
      </div>
      <div className="btn-container">
        <div className="btn-next">
          <Button
            onClick={onClickButton}
            className="bg-primario btn-team"
            text="Iniciar"
          />
        </div>
      </div>
    </>
  );
}

export default Categorias;
