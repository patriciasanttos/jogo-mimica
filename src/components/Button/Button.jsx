import "../Button/Button.css";

function Button({ text }) {
  return (
    <button className="bg-primario">
      <h2 className="btn-text">{text}</h2>
    </button>
  );
}

export default Button;
