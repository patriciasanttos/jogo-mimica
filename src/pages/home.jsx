import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

function Home() {
  const navigate = useNavigate()


  const onClickButtonEquipe = () => {
    navigate("/equipe");
  }

   const onClickButtonIndividual = () => {
     navigate("/individual");
   };

  return (
    <>
      <h1 className="titulo-jogo">Jogo da Mímica</h1>
      <div className="btn-container">
        <div>
          <Button
            onClick={onClickButtonEquipe}
            className="bg-primario btn-team"
            text="Equipe"
          />
        </div>
        <div>
          <Button
            onClick={onClickButtonIndividual}
            className="bg-primario btn-team"
            text="Individual"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
