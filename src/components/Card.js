import React from 'react';

function Card({src, title, likes, onCardClick}) {

  function handleClick() {
    const card = ({src: src, title: title});
    onCardClick(card)
  }

  return (
    <div id="card-template">
      <div className="card">
        <img className="card__image" src={src} alt={title} onClick={handleClick} />
        <p className="card__name">{title}</p>
        <button className="card__trash-button" type="button" />
        <div className="card__likes">
          <button className="card__like-button" type="button" />
          <p className="card__like-count">{likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
