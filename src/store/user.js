import api from '../utils/api';

const initialState = {
  userData: null,
  error: null,

  getUserRequest: false,
  getUserFailed: false,

  changeProfileRequest: false,
  changeProfileFailed: false,

  changeAvatarRequest: false,
  changeAvatarFailed: false,
};

// eslint-disable-next-line import/prefer-default-export
export const userModule = {
  state: {
    ...initialState,
  },
  mutations: {
    setUser(state, user) {
      state.userData = user;
    },
    resetUser(state) {
      state.userData = initialState.userData;
    },

    getUserRequest(state) {
      state.getUserRequest = true;
      state.getUserFailed = initialState.getUserFailed;
      state.error = initialState.error;
    },
    getUserSuccess(state, user) {
      state.getUserRequest = false;
      state.userData = user;
    },
    getUserFailed(state, error) {
      state.getUserRequest = false;
      state.getUserFailed = true;
      state.error = error;
    },

    changeProfileRequest(state) {
      state.changeProfileRequest = true;
      state.changeProfileFailed = initialState.changeProfileFailed;
      state.error = initialState.error;
    },
    changeProfileSuccess(state, user) {
      state.changeProfileRequest = false;
      state.userData = user;
    },
    changeProfileFailed(state, error) {
      state.changeProfileRequest = false;
      state.changeProfileFailed = true;
      state.error = error;
    },

    changeAvatarRequest(state) {
      state.changeAvatarRequest = true;
      state.changeAvatarFailed = initialState.changeAvatarFailed;
      state.error = initialState.error;
    },
    changeAvatarSuccess(state, user) {
      state.changeAvatarRequest = false;
      state.userData = user;
    },
    changeAvatarFailed(state, error) {
      state.changeAvatarRequest = false;
      state.changeAvatarFailed = true;
      state.error = error;
    },
  },
  actions: {
    getUser({ commit }) {
      commit('getUserRequest');
      api.getProfile()
        .then((user) => {
          commit('getUserSuccess', user);
        })
        .catch((error) => commit('getUserFailed', error));
    },
    changeProfile({ commit }, newData) {
      commit('changeProfileRequest');
      api.changeProfile(newData)
        .then((user) => {
          commit('changeProfileSuccess', user);
        })
        .catch((error) => commit('changeProfileFailed', error));
    },
    changeAvatar({ commit }, avatar) {
      commit('changeAvatarRequest');
      api.changeAvatar(avatar)
        .then((user) => {
          commit('changeAvatarSuccess', user);
        })
        .catch((error) => commit('changeAvatarFailed', error));
    },
  },
};
