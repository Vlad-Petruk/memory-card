function HouseCard({ src, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={src} alt={src} />
    </div>
  );
}

export default HouseCard;
