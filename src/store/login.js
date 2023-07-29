import {router} from "@/router/router";

export const login = {
	state: () => ({
		isError: false,
		nickName: localStorage.getItem('nickName'),
		name: '',
		errorText: 'Error'
	}),
	getters: {

	},
	mutations: {
		onChange(state, event)  {
			state.isError = false
			state.name = event.target.value
		},

		onSubmit(state) {
			const nick = state.name.trim()

			if (nick.length < 4) {
				state.isError = true
				state.errorText = 'Nick is too small'
				return;
			}

			if (nick.length > 10) {
				state.isError = true
				state.errorText = 'Nick is too big'
				return;
			}

			if (nick.length === 0) {
				state.isError = true
				state.errorText = "You haven't entered   anything"
				return
			}

			localStorage.setItem('nickName', nick)
			state.nickName = nick
			router.push('/')
		}
	},
	actions: {

	},
	namespaced: true
}