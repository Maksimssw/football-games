<script setup>
import './skin.css'
import MainHeader from "@/components/MainHeader.vue";
import Tab from "@/components/Tab/Tab.vue";
import Skins from "@/pages/Shop/components/Skins/Skins.vue";
import {computed} from "vue";
import store from "@/store";

const isSkins = computed(() => store.state.tab.isSkins)
const isBackgrounds = computed(() => store.state.tab.isBackgrounds)
const isEmojis = computed(() => store.state.tab.isEmojis)

</script>

<template>
  <div class="skin">
    <MainHeader />
    <Tab />
    <Skins v-if="isSkins" />
  </div>
</template>