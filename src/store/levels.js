import {router} from "@/router/router";

export const levels = {
  state: () => ({
    levels: [
      {
        level: 1,
        gate: {
          numberGates: 1, // Количество ворот
          width: 50, // Ширина ворот
          height: 3, // Высота ворот
          rotate: -10, // Наклон ворот
          isDeleteGate: false // Ворота будут удаляться, если значение будет true
        },
        points: {
          inTotalPoints: 100, // Сколько нужно набрать очков, что бы пройти уровень
          gatePoints: 50, // Количество очков при попаданий в ворота
        },
        confBall: {
          radius: 32, // Размер мяча 8 16 32 48 64
        },
        game: {
          attempts: 5 // Количество попыток
        }
      },
      {
        level: 2,
        gate: {
          numberGates: 1,
          width: 50,
          height: 3,
          rotate: -10,
          isDeleteGate: false
        },
        points: {
          inTotalPoints: 200,
          gatePoints: 50,
        },
        confBall: {
          radius: 32,
        },
        game: {
          attempts: 8
        }
      },
      {
        level: 3,
        gate: {
          numberGates: 1,
          width: 50,
          height: 3,
          rotate: -10,
          isDeleteGate: false
        },
        points: {
          inTotalPoints: 200,
          gatePoints: 50,
        },
        confBall: {
          radius: 32,
        },
        game: {
          attempts: 8
        }
      },
      {
        level: 4,
        gate: {
          numberGates: 1,
          width: 50,
          height: 3,
          rotate: -10,
          isDeleteGate: false
        },
        points: {
          inTotalPoints: 200,
          gatePoints: 50,
        },
        confBall: {
          radius: 32,
        },
        game: {
          attempts: 8
        }
      },
      {
        level: 5,
        gate: {
          numberGates: 1,
          width: 50,
          height: 3,
          rotate: -10,
          isDeleteGate: false
        },
        points: {
          inTotalPoints: 200,
          gatePoints: 50,
        },
        confBall: {
          radius: 32,
        },
        game: {
          attempts: 8
        }
      },
      {
        level: 6,
        gate: {
          numberGates: 1,
          width: 50,
          height: 3,
          rotate: -10,
          isDeleteGate: false
        },
        points: {
          inTotalPoints: 200,
          gatePoints: 50,
        },
        confBall: {
          radius: 32,
        },
        game: {
          attempts: 8
        }
      }
    ],
    access: localStorage.getItem('access') || '1'
  }),
  getters: {

  },
  mutations: {
    onLevelUp(state, level) {
      const updateLevel = state.access + level

      const arrayLevel = updateLevel.split('').filter(function(item, pos) {
        return updateLevel.indexOf(item) === pos;
      }).join('')

      localStorage.setItem('access', arrayLevel)
      state.access = arrayLevel
    },

    onNextLevel(state, level) {
      router.push(`/games-list`)

      setTimeout(() => {
        router.push(`/games-list/${level}`)
      }, 100)
    }
  },
  action: {

  },
  namespaced: true
}