import { renderLoading } from "./utils.js";

class Api {
  constructor({ baseUrl, token}) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _handleResponse(res) {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _handleCatch(err) {
    console.error(`Ошибка: ${err}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }

  addCard({ name, link, alt }) {
    renderLoading(true);
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link,
        alt
      })
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }

  removeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }

  setUserInfo({ name, about }) {
    renderLoading(true);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }

  setUserAvatar({ avatar }) {
    renderLoading(true);

    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }

  changeLikeCardStatus(cardID, like) {
    return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._handleResponse)
      .catch(this._handleCatch)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  token: '05e19680-152e-4468-99ab-dd133195a5d0'
})

export default api;
