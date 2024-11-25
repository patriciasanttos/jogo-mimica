import "../Button/Button.css";

function Button({ text, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      <h2 className="btn-text">{text}</h2>
    </button>
  );
}

export default Button;
