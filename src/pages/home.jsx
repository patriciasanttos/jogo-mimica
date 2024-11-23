import Button from "../components/Button/Button";

function Home() {
  return (
    <>
      <h1 className="titulo-jogo">Jogo da Mímica</h1>
      <div className="btn-container">
        <div>
          <Button text="Equipe" />
        </div>
        <div>
          <Button className="bg-primario" text="Individual" />
        </div>
      </div>
    </>
  );
}

export default Home;
