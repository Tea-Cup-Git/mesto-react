import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      src: card.src,
      title: card.title
    });
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({isOpen: false});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="user-input" className="popup__input popup__input_type_user-name"
            name="userName" type="text" minLength="2" maxLength="40" pattern="[a-zA-Zа-яА-Я -]{1,}"
            placeholder="Имя" required />
          <span id="user-input-error" className="popup__input-error"></span>
          <input id="about-input" className="popup__input popup__input_type_user-about"
            name="userAbout" type="text" minLength="2" maxLength="200" placeholder="О себе" required />
          <span id="about-input-error" className="popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="name-input" className="popup__input popup__input_type_place-name"
            name="name" type="text" minLength="1" maxLength="30" placeholder="Название" required />
          <span id="name-input-error" className="popup__input-error"></span>
          <input id="link-input" className="popup__input popup__input_type_image-link"
            name="link" type="url" placeholder="Ссылка на изображение" required />
          <span id="link-input-error" className="popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input id="avatar-input" className="popup__input popup__input_type_image-link"
            name="userAvatar" type="url" placeholder="Ссылка на изображение" required />
          <span id="avatar-input-error" className="popup__input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="delete"
          title="Вы уверены?"
        >
          <button className="popup__submit-button" type="submit">Да</button>
        </PopupWithForm>
        <ImagePopup
          cardSrc={selectedCard.src}
          cardTitle={selectedCard.title}
          isOpen={selectedCard.isOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
