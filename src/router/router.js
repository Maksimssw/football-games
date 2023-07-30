import {createRouter, createWebHistory} from "vue-router";

import MainPage from "@/pages/MainPage/MainPage.vue";
import GamesList from "@/pages/ListGames/GamesList.vue";
import Game from "@/pages/Game/GameLevel.vue";
import Login from "@/pages/Login/Login.vue";
import Shop from "@/pages/Shop/Shop.vue";

const routes = [
    {
        path: '/',
	      name: 'Main',
        component: MainPage
    },
		{
			path: '/login',
			component: Login
		},
    {
      path: '/shop',
      component: Shop
    },
    {
        path: '/games-list',
        component: GamesList
    },
    {
        path: '/games-list/:id',
        component: Game,
        name: 'GameLevel',
        props: true
    }
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})