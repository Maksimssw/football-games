<script setup>
import './index.css'
import {computed} from "vue";
import store from "@/store";
import Skin from "@/pages/Shop/components/Skins/Skin.vue";

const allSkins = computed(() => store.state.skins.allSkins)

</script>

<template>
  <ul class="skins">
    <Skin v-for="item in allSkins" :key="item.id" :item="item"/>
  </ul>
</template>