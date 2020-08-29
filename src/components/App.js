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

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false});
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(dataCards => {
        setCards(dataCards)
      })
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
      });
  }

  // Удалить карточку
  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards(cards.filter(c => c._id !== card._id));
      })
  }

  // Добавить карточку
  function handleAddPlaceSubmit(title, src) {
    api.addCard({ name: title, link: src, alt: title })
      .then(newCard => {
        setCards([...cards, newCard]);
        closeAllPopups();
      })
  }

  // Обновить данные пользователя
  function handleUpdateUser(name, description) {
    api.setUserInfo({name: name, about: description})
      .then(dataUser => {
        setCurrentUser(dataUser);
        closeAllPopups();
      })
  }
  
  // Обновить аватар пользователя
  function handleUpdateAvatar(avatar) {
    api.setUserAvatar({ avatar: avatar })
    .then(dataAvatar => {
      setCurrentUser(dataAvatar);
      closeAllPopups();
    })
  }

  // Закрыть модальное окно
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeletePopupOpen(false);
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
