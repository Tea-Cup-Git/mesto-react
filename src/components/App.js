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
  const [isLoading, setIsLoading] = React.useState(false);

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
    setIsLoading(true);
    api.addCard({ name: title, link: src, alt: title })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(`Ошибка при добавлении карточки: ${err}`))
  }

  // Обновить данные пользователя
  function handleUpdateUser(name, description) {
    setIsLoading(true);
    api.setUserInfo({name: name, about: description})
      .then(dataUser => {
        setCurrentUser(dataUser);
        closeAllPopups();
      })
      .catch((err) => console.error(`Ошибка при обновлении данных: ${err}`))
  }
  
  // Обновить аватар пользователя
  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api.setUserAvatar({ avatar: avatar })
    .then(dataAvatar => {
      setCurrentUser(dataAvatar);
      closeAllPopups();
    })
    .catch((err) => console.error(`Ошибка при обновлении аватара: ${err}`))
  }

  // Закрыть модальное окно
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({isOpen: false});
    setIsLoading(false);
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
            isLoading={isLoading}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isLoading={isLoading}
          />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} 
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
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
