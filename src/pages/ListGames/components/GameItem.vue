<script setup>
import {defineProps} from 'vue'
import store from "@/store";
const access = store.state.levels.access

const props = defineProps({
  numberLevel: Number
})
const arrayAccess = access.split('')

const isLevel = arrayAccess
    .filter(item => +item === props.numberLevel).length !== 0

</script>

<template>
  <li class="game-item">
    <span class="games-item__text">Level {{ props.numberLevel }}</span>

    <router-link
        v-if="isLevel"
        :to="{name: 'GameLevel', params: {id: numberLevel}}"
        class="games-item__button"
    >
      Game
    </router-link>
    <div class="games-item__close" v-else>
      Close
      <img class="games-item__icon" src="@/assets/icons/close.png" alt="">
      <div class="games-item__shadow"></div>
    </div>
  </li>
</template>