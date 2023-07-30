<script setup>
import store from "../store";

const name = store.state.login.nickName
const balance = store.state.user.balance
const points = store.state.user.points
</script>

<template>
  <header :class="$style.container">
    <nav>
      <div :class="$style.profile">
        <img src="/profile.svg" alt="" />
        <div>
          <span>Name: {{ name }}</span>
          <span>Balance: {{ balance }}$</span>
          <span>Points: {{ points }}</span>
        </div>
      </div>
      <div>
        <img src="/info.svg" alt="" />
        <img src="/settings.svg" alt="" />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped module>
.container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 12px;
  background: rgba(149, 12, 222, 0.7);
  z-index: 1;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  img {
    width: 100%;
    max-width: 40px;
  }
  span {
    color: var(--color-white);
  }
}
</style>
