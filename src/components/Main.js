import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ cards, onCardClick, onCardLike, onCardDelete, onEditAvatar, onEditProfile, onAddPlace }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
        </div>
        <button
          className="profile__avatar-button"
          type="button"
          onClick={onEditAvatar}
        />
        <div className="profile__info">
          <div className="profile__button-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="photo-grid">
        {cards.map(({_id, ...props}) => 
            <Card 
              key={_id} _id={_id} {...props} 
              onCardClick={onCardClick} 
              onCardLike={onCardLike} 
              onCardDelete={onCardDelete} 
            />
          )
        }
      </section>
    </main>
  )
}

export default Main;
