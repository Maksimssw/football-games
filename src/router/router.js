import {createRouter, createWebHistory} from "vue-router";

import MainPage from "@/pages/MainPage/MainPage.vue";
import GamesList from "@/pages/ListGames/GamesList.vue";
import Game from "@/pages/Game/GameLevel.vue";
import Login from "@/pages/Login/Login.vue";

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