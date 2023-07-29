<script setup>
import {onMounted, defineProps, defineEmits, computed} from "vue";
import Matter from 'matter-js'
import './index.css'
import {config} from "@/pages/Game/config";
import ModalPoints from "@/pages/Game/components/ModalPoints.vue";
import ModalRes from "@/pages/Game/components/ModalRes.vue";
import store from "@/store";
import {collision, onForGate, onBall, onId} from '@/pages/Game/scripts/'
import GameContent from "@/pages/Game/components/GameContent.vue";

defineEmits(['resetGame'])
const props = defineProps({
  id: {
    type: Number,
    required: true,
  }
})

const {gate, points, confBall, game} = store.state.levels.levels[props.id- 1]

const win = computed(() => store.state.game.win)
const loss = computed(() => store.state.game.loss)
const modalPoints = computed(() => store.state.game.modalPoints)
const attempts = computed(() => store.state.game.attempts)
store.commit('game/onAttemptsStatic', game.attempts)

const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World

let engine
let world
let render

onMounted(() => {
  engine = Engine.create()
  world = engine.world

  render = Render.create({
    element: document.querySelector('.canvas'),
    engine: engine,
    options: {
      width: config.width,
      height: config.height,
      wireframes: false,
      background: "transparent",
      pixelRatio: 1,
    }
  })

  // create runner
  const runner = Runner.create();
  Runner.run(runner, engine);
  Render.run(render)

  onForGate(world, gate)
  onBall(engine, attempts, render, confBall, points, true)
  collision(engine, points)
  onId(world)
})


const resetGame = (newBall) => {
  store.commit('game/onAttemptsStatic', game.attempts)
  store.commit('game/resetGame')

  const circleBody = world.bodies
      .filter(item => item.label === 'Circle Body')

  World.remove(world, circleBody)

  if (newBall) {
    setTimeout(() => {
      onBall(engine, attempts, render, confBall, points, false)
    }, 300)
  }
}

</script>

<template>
  <div class="game">
    <GameContent
        @onResetGame="resetGame"
        :in-total-points="points.inTotalPoints"
    />

    <div class="canvas"></div>

    <ModalPoints
        v-if="modalPoints"
        :points="points.gatePoints"
    />
    <ModalRes
        @onResetGame="resetGame"
        v-if="win || loss"
        :res="win ? 'win' : 'loss'"
        :id="props.id"
    />
  </div>
</template>
