export default function Square({ value, onSquareClick }) {
  return (
    <button className="game-btn" onClick={onSquareClick}>
      {value}
    </button>
  );
}
