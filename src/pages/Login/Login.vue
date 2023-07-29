<script setup>
import LoginForm from "@/pages/Login/components/LoginForm.vue";
import './index.css'

</script>

<template>
  <div class="login">
    <div class="login__info">
      <h1 class="login__title">Welcome to Football game</h1>
      <p class="login__description">Enter your name to start playing</p>
    </div>

    <LoginForm />
  </div>
</template>
