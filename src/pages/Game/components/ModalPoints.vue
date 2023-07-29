<script setup>
import Modal from "@/pages/Game/components/UI/Modal.vue";
import {defineProps} from 'vue'

const props = defineProps({
  points: Number
})

</script>

<template>
  <Modal modal="modal_bg" modal-class="modal__wrapper_points">
    <span>{{ props.points }}!</span>
  </Modal>
</template>