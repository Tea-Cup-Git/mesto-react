import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    return (
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <input id="avatar-input" className="popup__input popup__input_type_image-link"
            name="userAvatar" type="url" placeholder="Ссылка на изображение" ref={avatarRef} required />
        <span id="avatar-input-error" className="popup__input-error"></span>
      </PopupWithForm>
    )
}

export default EditAvatarPopup;