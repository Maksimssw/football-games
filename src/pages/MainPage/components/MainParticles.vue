<template>
  <div id="particle-container">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
    <img :class="$style.particle" src="../../../../public/ball.png" alt="">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
@for $i from 1 through 30 {
  @keyframes particle-animation-#{$i} {
    100% {
      transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
    }
  }

  .particle:nth-child(#{$i}){
    animation: particle-animation-#{$i} 60s infinite;
    $size: random(15) + 15 + px;
    opacity: random(100)/100;
    height: $size;
    width: $size;
    animation-delay: -$i * .2s;
    transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
  }
}
</style>