import "./Card.css";

export const Card = ({ id, brand, product, price }) => {
  return (
    <div className="card">
      <h3 className="card__name">{product}</h3>
      <div className="card__features">
        <span>{brand}</span>
      </div>
      <p className="card__description">
        <span>{id}</span>
        <span>{price}</span>
      </p>
    </div>
  );
};
 