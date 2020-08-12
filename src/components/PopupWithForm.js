import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, ...props}) {
  return (
    <div id={`${name}-form`} className={`popup ${isOpen && 'popup_open'}`}>
      <form id={`${name}-form_container`} className="popup__container" noValidate>
        <h2 className="popup__header">{title}</h2>
        {props.children}
        <button className="popup__submit-button" type="submit">Сохранить</button>
        <button
          className="popup__close-button"
          type="reset"
          onClick={onClose}
        />
      </form>
    </div>
  )
}

export default PopupWithForm;
