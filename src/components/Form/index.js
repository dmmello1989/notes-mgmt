import { useState } from 'react';
import './styles.css';

export const Form = ({ createCard }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = e => {
    setTitle(e.target.value);
    e.stopPropagation();
  };

  const handleTextChange = e => {
    setText(e.target.value);
    e.stopPropagation();
  };

  return (
    <form className="form" onSubmit={e => createCard(e, title, text)}>
      <input className="form__input" placeholder="Title" onChange={e => handleTitleChange(e)} />
      <textarea className="form__input" rows={15} placeholder="Write your note.." onChange={e => handleTextChange(e)} />
      <button className="form__input form__submit">Create Note</button>
    </form>
  );
};