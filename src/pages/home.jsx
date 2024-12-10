import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

function Home() {
  const navigate = useNavigate()


  const onClickButtonTeam = () => {
     navigate("/players", { state: { isIndividual: false } });
    
  };

   const onClickButtonIndividual = () => {
     navigate("/players", {state: {isIndividual: true}});
   };

  return (
    <>
      <h1 className="title-game">Jogo da Mímica</h1>
      <div className="btn-container">
        <div>
          <Button
            onClick={onClickButtonTeam}
            className="bg-primary btn-home"
            text="Equipe"
          />
        </div>
        <div>
          <Button
            onClick={onClickButtonIndividual}
            className="bg-primary btn-home"
            text="Individual"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
