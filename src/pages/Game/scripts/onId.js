export const onId = (world) => {
  for (let i = 0; i < world.bodies.length; i++) {
    world.bodies[i].id = i + 1
  }
}