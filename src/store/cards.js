import api from '../utils/api';

const initialState = {
  cardsData: null,
  error: null,

  getCardsRequest: false,
  getCardsFailed: false,

  addCardRequest: false,
  addCardFailed: false,

  deleteCardRequest: false,
  deleteCardFailed: false,

  changeLikeStatusRequest: false,
  changeLikeStatusFailed: false,
};

// eslint-disable-next-line import/prefer-default-export
export const cardsModule = {
  state: {
    ...initialState,
  },
  mutations: {
    getCardsRequest(state) {
      state.getCardsRequest = true;
      state.getCardsFailed = initialState.getCardsFailed;
      state.error = initialState.error;
    },
    getCardsSuccess(state, cards) {
      state.getCardsRequest = false;
      state.cardsData = cards;
    },
    getCardsFailed(state, error) {
      state.getCardsRequest = false;
      state.getCardsFailed = true;
      state.error = error;
    },

    addCardRequest(state) {
      state.addCardRequest = true;
      state.addCardFailed = initialState.addCardFailed;
      state.error = initialState.error;
    },
    addCardSuccess(state, card) {
      state.addCardRequest = false;
      state.cardsData = [card, ...state.cardsData];
    },
    addCardFailed(state, error) {
      state.addCardRequest = false;
      state.addCardFailed = true;
      state.error = error;
    },

    deleteCardRequest(state) {
      state.deleteCardRequest = true;
      state.deleteCardFailed = initialState.deleteCardFailed;
      state.error = initialState.error;
    },
    deleteCardSuccess(state, _id) {
      state.deleteCardRequest = false;
      state.cardsData = state.cardsData.filter((card) => card._id !== _id);
    },
    deleteCardFailed(state, error) {
      state.deleteCardRequest = false;
      state.deleteCardFailed = true;
      state.error = error;
    },

    changeLikeStatusRequest(state) {
      state.changeLikeStatusRequest = true;
      state.changeLikeStatusFailed = initialState.changeLikeStatusFailed;
      state.error = initialState.error;
    },
    changeLikeStatusSuccess(state, updatedCard) {
      state.changeLikeStatusRequest = false;
      state.cardsData = state.cardsData.map((card) => {
        if (card._id === updatedCard._id) {
          return updatedCard;
        }
        return card;
      });
    },
    changeLikeStatusFailed(state, error) {
      state.changeLikeStatusRequest = false;
      state.changeLikeStatusFailed = true;
      state.error = error;
    },
  },
  actions: {
    getCards({ commit }) {
      commit('getCardsRequest');
      api.getInitialCards()
        .then((cards) => {
          commit('getCardsSuccess', cards);
        })
        .catch((error) => commit('getCardsFailed', error));
    },
    addCard({ commit }, cardData) {
      commit('addCardRequest');
      api.addNewCard(cardData)
        .then((card) => {
          commit('addCardSuccess', card);
        })
        .catch((error) => commit('addCardFailed', error));
    },
    deleteCard({ commit }, cardId) {
      commit('deleteCardRequest');
      api.deleteCard(cardId)
        .then(() => {
          commit('deleteCardSuccess', cardId);
        })
        .catch((error) => commit('deleteCardFailed', error));
    },
    changeLikeStatus({ commit }, { _id, like }) {
      commit('changeLikeStatusRequest');
      api.changeLikeCardStatus(_id, like)
        .then((card) => {
          commit('changeLikeStatusSuccess', card);
        })
        .catch((error) => commit('changeLikeStatusFailed', error));
    },
  },
};
