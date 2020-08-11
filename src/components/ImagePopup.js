import React from 'react';

function ImagePopup({cardTitle, cardSrc, ...props}) {
  return (
    <div id="image-form" className={`popup ${props.isOpen && 'popup_open'}`}>
      <figure className="popup__container popup__container_img">
        <img className="popup__image" src={cardSrc} alt={`${cardTitle}`} />
        <figcaption className="popup__figcaption">{`${cardTitle}`}</figcaption>
        <button
          id="image-expander_close-button"
          className="popup__close-button"
          type="reset"
          onClick={props.onClose}
        ></button>
      </figure>
    </div>
  )
}

export default ImagePopup;
