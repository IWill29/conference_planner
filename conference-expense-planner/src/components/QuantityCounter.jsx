export default function QuantityCounter({ value, onDec, onInc }) {
  return (
    <div className="counter">
      <button className="btn-icon" onClick={onDec} aria-label="decrease">−</button>
      <div>{value}</div>
      <button className="btn-icon" onClick={onInc} aria-label="increase">+</button>
    </div>
  );
}