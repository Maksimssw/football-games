import Matter from 'matter-js'

const World = Matter.World,
  Bodies = Matter.Bodies

export const createBall = (x, y, r, world) => {
  let xScale
  let yScale

  if (r === 16) {
    xScale = 0.5
    yScale = 0.5
  }

  if (r === 32) {
    xScale = 1
    yScale = 1
  }

  if (r === 48) {
    xScale = 1.5
    yScale = 1.5
  }

  if (r === 64) {
    xScale = 2
    yScale = 2
  }

  const options = {
    gate: false,
    render: {
      sprite: {
        texture: '/skins/ball.png',
        xScale: xScale,
        yScale: yScale
      }
    }
  }

  const ball = Bodies.circle(x, y, r / 2, options)
  World.add(world, ball)

  return ball
}