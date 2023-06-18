class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
  }

  _getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getCards = () => {
    return fetch (
      this._url + "/cards", {
        headers: {
          authorization: this._token
        }
      }
    )
      .then((res) => this._getResponseData(res));
  }

  updateProfileData = (inputValues) => {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.profession
      })
    })
    .then((res) => this._getResponseData(res));
  };

  getWebInfo = () => {
    return fetch(this._url + "/users/me", {
      headers: {
        authorization: this._token
      }
    })
      .then((res) => this._getResponseData(res));
  };

  sendNewCard = (inputValues) => {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: inputValues.place,
        link: inputValues.link
      })
    })
      .then((res) => this._getResponseData(res));
  };

  removeCard = (id) => {
    return fetch(this._url + "/cards/" + id, {
      method: "DELETE",
      headers: {
        authorization: this._token
      }
    })
    .then((res) => this._getResponseData(res));
  };

  toggleLikeCard = (cardId, isLiked) => {
    const method = isLiked ? "PUT" : "DELETE";

    return fetch(this._url + `/cards/${cardId}/likes`, {
      method: method,
      headers: {
        authorization: this._token
      }
    })
    .then((res) => this._getResponseData(res));
  };

  sendAvatar = (link) => {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then((res) => this._getResponseData(res));
  };
}

// Объект настроек для класса Api
const config = {
  url: "https://mesto.nomoreparties.co/v1/cohort-66",
  token: "11d9edf0-d595-4b63-9e37-e0fd6cd15a36"
}

// Создание экземпляра класса, описывающего запросы к серверу
const api = new Api(config);

export default api;
