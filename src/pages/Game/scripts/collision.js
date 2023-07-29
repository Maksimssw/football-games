import Matter from "matter-js";
import store from "@/store";
import {modalHandler} from "@/pages/Game/scripts/modalHandler";
import {onId} from "@/pages/Game/scripts/";

const Events = Matter.Events,
      World = Matter.World

export const collision = (engine, points) => {
  const world = engine.world

  Events.on(engine, 'collisionStart', (event) => {
    const pairs = event.pairs

    for (let i = 0, j = pairs.length; i !== j; ++i) {
      const pair = pairs[i];
      if (pair.activeContacts) {
        if (world.bodies[pair.bodyA.id - 1].gate) {
          store.commit('game/onCurrentPoints', points.gatePoints)
          store.commit('user/updatePoints', points.gatePoints)
          modalHandler(true, points.inTotalPoints)

          for (let i = 0; i < world.bodies.length; i++) {
            if (world.bodies[i].id === pair.bodyB.id) {
              World.remove(world, world.bodies[i])
            }
          }
        }
      }
    }

    onId(world)
  })
}