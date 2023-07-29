<script setup>

const props = {
  isActive: false
}

const isActive = props.isActive

</script>

<template>
  <div class="model" :class="isActive ? 'model_active' : ''">
    <div class="model__wrapper">

    </div>
  </div>
</template>