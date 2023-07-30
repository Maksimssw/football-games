<script setup>
import './index.css'
import store from "@/store";
import {computed} from "vue";

const isSkins = computed(() => store.state.tab.isSkins)
const isBackgrounds = computed(() => store.state.tab.isBackgrounds)
const isEmojis = computed(() => store.state.tab.isEmojis)

const tabHandler = (event) => {
  const tab = 'is' + event.target.textContent.trim()
  store.commit('tab/onHandler', tab)
}

</script>

<template>
  <div class="tab grid-row">
    <button
        class="tab__button"
        :class="isSkins && 'tab__button_active'"
        @click="tabHandler"
    >
      Skins
    </button>

    <button
        class="tab__button"
        :class="isBackgrounds && 'tab__button_active'"
        @click="tabHandler"
    >
      Backgrounds
    </button>

    <button
        class="tab__button"
        :class="isEmojis && 'tab__button_active'"
        @click="tabHandler"
    >
      Emojis
    </button>
  </div>
</template>