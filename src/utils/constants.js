// eslint-disable-next-line import/prefer-default-export
export const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
  routes: {
    profile: '/users/me',
    cards: '/cards',
  },
  headers: {
    authorization: '73878bf0-187e-4ea2-beea-67c91647b84f',
    'Content-Type': 'application/json',
  },
};

export const inputSelector = '.form-field';
