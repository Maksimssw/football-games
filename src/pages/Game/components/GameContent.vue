<script setup>
import {computed, defineEmits, defineProps} from "vue";
import store from "@/store";

const emit = defineEmits()
const props = defineProps({
  inTotalPoints: Number
})

const attempts = computed(() => store.state.game.attempts)
const currentPoints = computed(() => store.state.game.currentPoints)

</script>

<template>
  <div class="game__content grid-row justify-content-between">
    <router-link
        @click="emit('onResetGame')"
        to="/games-list"
        class="back grid-row"
    >
      <img class="back__arrow" src="@/assets/icons/arrow.png" alt="">
      <span>back</span>
    </router-link>

    <div class="game__wrapper grid-row">
      <span>Points:</span>
      <span class="game__points">{{ currentPoints }}</span>
    </div>
  </div>

  <div class="game__content grid-row justify-content-between">
    <div class="game__condition">
      <p>Score {{ props.inTotalPoints }} points to advance to the next level!</p>
    </div>
    <div class="game__condition">
      <p>Attempts: {{ attempts }}</p>
    </div>
  </div>
</template>