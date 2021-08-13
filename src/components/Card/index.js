import './styles.css';

export const Card = ({ card }) => {
  return (
    <div className="card">
      <h3 className="card__title">{card.title}</h3>
      <p className="card__text">{card.text}</p>
    </div>
  )
}