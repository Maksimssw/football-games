export const tab = {
  state: () => ({
    isSkins: true,
    isBackgrounds: false,
    isEmojis: false
  }),
  getters: {

  },
  mutations: {
    onHandler(state, tab) {
      state.isEmojis = false
      state.isSkins = false
      state.isBackgrounds = false

      state[tab] = true
    }
  },
  action: {

  },
  namespaced: true
}