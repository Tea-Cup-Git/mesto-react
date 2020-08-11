import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onCardClick, ...props}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((dataUser) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((dataCards) => {
        setCards(dataCards.map(item => ({
          id: item._id,
          src: item.link,
          title: item.name,
          likes: item.likes
        })));
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
        </div>
        <button
          className="profile__avatar-button"
          type="button"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__button-wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="photo-grid">
        {
          cards.map(({id, ...props}) => <Card key={id} {...props} onCardClick={onCardClick} />)
        }
      </section>
    </main>
  )
}

export default Main;
