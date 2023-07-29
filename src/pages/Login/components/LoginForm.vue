<script setup>
import store from "@/store";
import {computed} from "vue";

const errorText = computed(() => store.state['login'].errorText)
const isError = computed(() => store.state['login'].isError)
const onSubmit = computed(() => store.commit('login/onSubmit'))
const onChangeHandler = (event) => {
  store.commit('login/onChange', event)
}

</script>

<template>
  <div class="login__form">
    <input @input="onChangeHandler" class="login__input" type="text" placeholder="Write your nick">
    <button @click="onSubmit" class="login__button">done</button>
    <p
      :class="[isError ? 'login__error_active' : '']"
      class="login__error"
    >
      {{ errorText }}
    </p>
  </div>
</template>