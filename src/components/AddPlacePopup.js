import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [title, setTitle] = React.useState('');
  const [src, setSrc] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(title, src);
    setTitle('');
    setSrc('');
  }

  function handleChange(e) {
    e.target.name === 'cardName' ? setTitle(e.target.value) : setSrc(e.target.value);
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonTitle="Добавить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input id="name-input" className="popup__input popup__input_type_place-name"
            name="cardName" type="text" minLength="1" maxLength="30"placeholder="Название" 
            value={title} onChange={handleChange} required />
      <span id="name-input-error" className="popup__input-error"></span>
      <input id="link-input" className="popup__input popup__input_type_image-link"
            name="cardLink" type="url" placeholder="Ссылка на изображение" 
            value={src} onChange={handleChange} required />
      <span id="link-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;