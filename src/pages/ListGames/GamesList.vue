<script setup>
import './index.css'
import GameItem from "@/pages/ListGames/components/GameItem.vue";
import store from "@/store";

const levels = store.state.game.levels
const countLevel = Array(levels).fill('').map((_, i) =>  i + 1)
const points = store.state['user'].points

</script>

<template>
  <section class="games-list">
    <div class="games-list__info grid-row justify-content-between">
      <router-link to="/" class="games-list__back grid-row">
        <img src="@/assets/icons/arrowBlue.png" alt="">
        <span>back</span>
      </router-link>

      <span class="games-list__points">Points: {{points}}</span>
    </div>
    <p class="games-list__description">Play and earn points!</p>
    <p class="games-list__text">for points you can unlock new levels!</p>

    <ul class="games-list__wrapper">
      <GameItem v-for="item in countLevel" :number-level="item" :key="item" />
    </ul>
  </section>
</template>