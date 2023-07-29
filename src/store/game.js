export const game = {
  state: () => ({
    currentPoints: 0,
    win: false,
    loss: false,
    modalPoints: false,
    attempts: 0,
    levels: 6
  }),
  getters: {

  },
  mutations: {
    onCurrentPoints(state, points) {
      state.currentPoints += points
    },

    isModal(state, boolean) {
      state.modalPoints = boolean
    },

    isWin(state, boolean) {
      state.win = boolean
    },

    isLoss(state, boolean) {
      state.loss = boolean
    },

    resetGame(state) {
      state.currentPoints = 0
      state.win = false
      state.loss = false
    },

    onAttempts(state) {
      state.attempts = state.attempts - 1
    },

    onAttemptsStatic(state, attempts) {
      state.attempts = attempts
    },
  },
  actions: {

  },
  namespaced: true
}