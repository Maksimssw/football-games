<script setup>
import {defineProps, defineEmits, ref} from 'vue'
import Modal from "@/pages/Game/components/UI/Modal.vue";
import store from "@/store";

const props = defineProps({
  res: String,
  id: String
})
const emit = defineEmits()
const maxLevel = store.state.game.levels
const isModal = ref(false)

const onAgain = () => {
  emit('onResetGame', true)
  isModal.value = true
}

const nextGameHandler = () => {
  emit('onResetGame', false)
  store.commit('levels/onNextLevel', +props.id + 1)
  isModal.value = true
}

if (props.res === 'win') {
  if (props.id !== maxLevel) {
    store.commit('levels/onLevelUp', +props.id + 1)
  }
}

</script>

<template>
  <Modal
      :class="isModal ? 'modal__wrapper_close' : '' "
      modal-class="modal__wrapper_result"
  >
    <div
        class="res"
        v-if="props.res === 'loss'"
    >
      <span class="res__text">You've lost!</span>
      <div class="res__buttons grid-row justify-content-between">
        <router-link
            @click="onAgain"
            to="/games-list"
            class="back grid-row"
        >
          <img class="back__arrow" src="@/assets/icons/arrow.png" alt="">
          <span>back</span>
        </router-link>

        <div @click="onAgain" class="back grid-row">
          <img class="back__arrow" src="@/assets/icons/again.png" alt="">
          <span>Again</span>
        </div>
      </div>
    </div>

    <div v-else class="res">
      <span class="res__text">You win!</span>
      <p class="res__description">
        congratulations, a new level has been opened for you!
      </p>
      <div class="res__buttons grid-row justify-content-between">
        <router-link
            @click="onAgain"
            to="/games-list"
            class="back grid-row justify-content-between"
        >
          <img class="back__arrow" src="@/assets/icons/arrow.png" alt="">
          <span>Back</span>
        </router-link>

        <div @click="onAgain" class="back grid-row justify-content-between">
          <img class="back__arrow" src="@/assets/icons/again.png" alt="">
          <span>Again</span>
        </div>

        <div
            @click="nextGameHandler"
            class="back grid-row justify-content-between"
        >
          <span>Next</span>
          <img class="back__arrow back__arrow_right" src="@/assets/icons/arrow.png" alt="">
        </div>
      </div>
    </div>

  </Modal>
</template>