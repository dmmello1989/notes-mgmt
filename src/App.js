import { useState } from "react";

import { Form } from "./components/Form";
import { NoteList } from "./components/NoteList";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);

  const createCard = (e, title, text ) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e, title, text)
    setCards(() => [...cards, { title, text }]);
  }

  return (
    <main className="main">
      <Form createCard={createCard} />
      <NoteList cards={cards} />
    </main>
  );
}

export default App;
