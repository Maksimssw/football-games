export const user = {
  state: () => ({
    balance: +localStorage.getItem('balance') || 0,
    points: +localStorage.getItem('points') || 0
   }),
  getters: {

  },
  mutations: {
    updatePoints(state, points) {
      const allPoints = state.points + points
      localStorage.setItem('points', allPoints)
      state.points = allPoints
    }
  },
  action: {

  },
  namespaced: true
}