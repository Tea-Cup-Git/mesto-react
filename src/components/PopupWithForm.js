import React from 'react';

function PopupWithForm(props) {
  return (
    <div id={`${props.name}-form`} className={`popup ${props.isOpen && 'popup_open'}`}>
      <form id={`${props.name}-form_container`} className="popup__container" noValidate>
        <h2 className="popup__header">{props.title}</h2>
        {props.children}
        <button className="popup__submit-button" type="submit">Сохранить</button>
        <button
          className="popup__close-button"
          type="reset"
          onClick={props.onClose}
        ></button>
      </form>
    </div>
  )
}

export default PopupWithForm;