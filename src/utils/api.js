import { apiOptions } from './constants';

class Api {
  constructor({ baseUrl, headers, routes }) {
    this._baseUrl = baseUrl;
    this._profileUrl = `${baseUrl}${routes.profile}`;
    this._cardsUrl = `${baseUrl}${routes.cards}`;
    this._headers = headers;
  }

  _createRequest({
    url, headersObj, method, body,
  }) {
    return fetch(url, { method, headers: { ...this._headers, ...headersObj }, body })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(new Error(res.message));
      });
  }

  getProfile() {
    return this._createRequest({
      url: this._profileUrl,
      headersObj: this._headers,
      method: 'GET',
    });
  }

  getInitialCards() {
    return this._createRequest({
      url: this._cardsUrl,
      headersObj: this._headers,
      method: 'GET',
    });
  }

  changeProfile(newData) {
    return this._createRequest({
      url: this._profileUrl,
      headersObj: this._headers,
      method: 'PATCH',
      body: JSON.stringify(newData),
    });
  }

  changeAvatar(avatar) {
    return this._createRequest({
      url: `${this._profileUrl}/avatar`,
      headersObj: this._headers,
      method: 'PATCH',
      body: JSON.stringify(avatar),
    });
  }

  addNewCard(cardData) {
    return this._createRequest({
      url: this._cardsUrl,
      headersObj: this._headers,
      method: 'POST',
      body: JSON.stringify(cardData),
    });
  }

  deleteCard(idCard) {
    return this._createRequest({
      url: `${this._cardsUrl}/${idCard}`,
      headersObj: this._headers,
      method: 'DELETE',
    });
  }

  changeLikeCardStatus(idCard, like) {
    return this._createRequest({
      url: `${this._cardsUrl}/likes/${idCard}`,
      headersObj: this._headers,
      method: like ? 'PUT' : 'DELETE',
    });
  }
}

const api = new Api(apiOptions);
export default api;
