import Matter from 'matter-js'

const Word = Matter.World,
      Bodies = Matter.Bodies

export const createGate = (x, y, w, h, r, world) => {
  const options = {
    isStatic: true,
    angle: r,
    gate: false,
    render: {
      fillStyle: 'none'
	  }
  }

  const elements = []
	const scale = w / 50

  // Создание ворот
  elements.push(Bodies.rectangle(x - 6, y - 15, w, h * h, {
    isStatic: true,
    angle: r,
    gate: true,
    render: {
      sprite: {
        texture: '/gate.png',
        xScale: scale,
        yScale: scale
      }
    }
  }))

  // Создание формы ворот
  elements.push(Bodies.rectangle(x, y, w, h, options))
  elements.push(Bodies.rectangle(x - w / 2 - 10, y - w / 2 + 15, h, w, options))
  elements.push(Bodies.rectangle(x - w / - 2 - 10, y - w / 2 - 10, h, w, options))

  Word.add(world, elements)

  return {
    body: elements,
    id: elements[0].id
  }
}