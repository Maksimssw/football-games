import store from "@/store";
import {computed} from "vue";

export const modalHandler = (isPoints, inTotalPoints) => {
  const currentPoints = computed(() => store.state.game.currentPoints).value
  const attempts = computed(() => store.state.game.attempts).value

  if (isPoints) {
    store.commit('game/isModal', true)

    setTimeout(() => {
      store.commit('game/isModal', false)
    }, 1000)
  }

  if (attempts === 0) store.commit('game/isLoss', true)
  if (currentPoints === inTotalPoints) store.commit('game/isWin', true)
}