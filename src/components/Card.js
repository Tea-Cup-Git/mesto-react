import React from 'react';

function Card({src, title, likes, ...props}) {

  function handleClick() {
    const card = ({src: src, title: title});
    props.onCardClick(card)
  }

  return (
    <div id="card-template">
      <div className="card">
        <img className="card__image" src={src} alt={title} onClick={handleClick} />
        <p className="card__name">{title}</p>
        <button className="card__trash-button" type="button"></button>
        <div className="card__likes">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-count">{likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
