import {createGate} from "@/pages/Game/bodies/gate";
import {config} from "@/pages/Game/config";
import {onId} from "@/pages/Game/scripts/onId";
import {createBall} from "@/pages/Game/bodies/ball";
import Matter from "matter-js";
import {modalHandler} from "@/pages/Game/scripts/modalHandler";
import store from "@/store";

const World = Matter.World,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint

export const onForGate = (world, gate) => {
  for (let i = 0; i < gate.numberGates; i++) {
    // Расстояние между ворот
    const x = 70 + 30 * i
    const y = 70 + 200 * i

    createGate(
      config.width - x,
      config.height - y,
      gate.width,
      gate.height,
      gate.rotate,
      world
    )
  }

  onId(world)
}


let mouseCoonstraint
let ball
let sling

export const onBall = (engine, attempts, render, confBall, points, code) => {
  const world = engine.world

  // Add Ball
  ball = createBall(100, config.height / 2, confBall.radius, world)
  sling = Constraint.create({
    pointA: {x: 100, y: config.height / 2},
    bodyB: ball,
    stiffness: 0.2,
  });

  World.add(world, sling)

  // Add Mouse
  const mouse = Mouse.create(render.canvas)
  mouseCoonstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      visible: false
    }
  })
  render.mouse = mouse
  World.add(world, mouseCoonstraint)

  let firing = false
  Events.on(mouseCoonstraint, 'enddrag', (event) => {
    if (event.body === ball) firing = true
    onId(world)
  })

  if (code) {
    Events.on(engine, 'afterUpdate', () => {
      if (
        firing &&
        Math.abs(ball.position.x - 100) < 40 &&
        Math.abs(ball.position.y - config.height / 2) < 40
      ) {
        sling.bodyB = null
        store.commit('game/onAttempts',)
        modalHandler(false, attempts, points.inTotalPoints)

        firing = false
        setTimeout(() => {
          ball = createBall(100, config.height / 2, confBall.radius, world)
          sling.bodyB = ball
        }, 300)
      }
    })

    onId(world)
  }
}