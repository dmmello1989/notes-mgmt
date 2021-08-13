import { Card } from "../Card";
import "./styles.css";

export const NoteList = ({ cards }) => {
  return (
    <ul className="note-list">
      {cards.map((card, index) => {
        return (
          <li className="note-list__item" key={`category-${index}`}>
            <Card card={card} />
          </li>
        )
      })}
    </ul>
  )
}