<script setup>
import './index.css'
import {defineProps} from 'vue'

defineProps({
  item: Object
})

</script>

<template>
  <li class="skins__item">
    <img class="skins__image" :src="'/skins/' + item.name" alt="">
    <span class="skins__price">{{item.price}} {{item.currency}}</span>
    <button class="skins__buy">Buy</button>
  </li>
</template>