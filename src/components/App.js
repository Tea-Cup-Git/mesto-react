import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
// import DeletePopup from './DeletePopup'; (В разработке)
import { renderLoading } from "../utils/utils";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  // const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false); (В разработке)
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false});
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([ api.getUserInfo(), api.getInitialCards() ])
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch((err) => console.error(`Ошибка при загрузке данных: ${err}`));
  }, [])

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  // Подтверждение удаления карточки (В разработке)
  // function handleDeleteClick() {
  //   setDeletePopupOpen(true);
  // }

  // Развернуть картинку
  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, src: card.link, title: card.name });
  }

  // Добавить/убрать лайк карточки 
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.error(`Ошибка при обновлении лайка: ${err}`));
  }

  // Удалить карточку
  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards(cards.filter(c => c._id !== card._id));
      })
      .catch((err) => console.error(`Ошибка при удалении карточки: ${err}`))
  }

  // Добавить карточку
  function handleAddPlaceSubmit(title, src) {
    api.addCard({ name: title, link: src, alt: title })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.error(`Ошибка при добавлении карточки: ${err}`))
      .finally(() => {
        renderLoading();
        closeAllPopups();
      })
  }

  // Обновить данные пользователя
  function handleUpdateUser(name, description) {
    api.setUserInfo({name: name, about: description})
      .then(dataUser => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.error(`Ошибка при обновлении данных: ${err}`))
      .finally(() => {
        renderLoading();
        closeAllPopups();
      })
  }
  
  // Обновить аватар пользователя
  function handleUpdateAvatar(avatar) {
    api.setUserAvatar({ avatar: avatar })
    .then(dataAvatar => {
      setCurrentUser(dataAvatar);
    })
    .catch((err) => console.error(`Ошибка при обновлении аватара: ${err}`))
    .finally(() => {
      renderLoading();
      closeAllPopups();
    })
  }

  // Закрыть модальное окно
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({isOpen: false});
  }

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} 
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup
            cardSrc={selectedCard.src}
            cardTitle={selectedCard.title}
            isOpen={selectedCard.isOpen}
            onClose={closeAllPopups}
          />
          {/* <DeletePopup
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onDeleteConfirm={handleCardDelete}
          /> */}
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
