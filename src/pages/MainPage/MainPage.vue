<script setup>

import './index.css'
import MainHeader from "@/components/MainHeader.vue";
import MainParticles from "@/pages/MainPage/components/MainParticles.vue";
import {onMounted} from "vue";
import store from "@/store";
import {router} from "@/router/router";

const nickName = store.state['login'].nickName

onMounted(() => {
  if (nickName === null) router.push('/login')
})

</script>

<template>
  <div class="main">
    <MainHeader />
    <img
        class="main__bg"
        src="@/assets/images/main/main-bg.webp"
        alt=""
    >
    <div class="main__content">
      <img class="main__logo" src="@/assets/icons/logo.webp" alt="">
    </div>
    <div class="main__wrapper">
      <router-link to="/games-list" class="main__button">
        Play
      </router-link>
      <router-link to="/shop" class="main__button">
        Shop
      </router-link>
      <router-link to="/games-list" class="main__button">
        Skins
      </router-link>
    </div>

    <MainParticles />
  </div>
</template>



