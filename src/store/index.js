import {createStore} from "vuex";
import {login} from "@/store/login";
import {user} from "@/store/user";
import {game} from "@/store/game";
import {levels} from "@/store/levels";
import {tab} from "@/store/tab";
import {skins} from "@/store/shop/skins";

export default createStore({
	modules: {
		login,
		user,
		game,
		levels,
		tab,
		skins
	}
})