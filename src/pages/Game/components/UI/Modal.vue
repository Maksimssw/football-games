<script setup>
import {defineProps} from 'vue'
import './index.css'

const props = defineProps({
  modalClass: String,
  modal: String
})

</script>

<template>
  <div
      class="modal"
      :class="props.modal"
  >
    <div
        class="modal__wrapper"
        :class="props.modalClass"
    >
      <slot></slot>
    </div>
  </div>
</template>