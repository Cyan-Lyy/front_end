// import {wxLogin} from '../api/loginApi.js'

const state = {
	token: 'qwe',
	userInfo: {},
}

const mutations = {
	SET_USERINFO(state, userInfo) {
		state.userInfo = userInfo
	},
	SET_TOKEN(state, token) {
		state.token = token
	}
}

const getters = {
	
}

const actions = {
	// async userLogin ({commit}, code) {
	// 	let result = await wxLogin(code)
	// 	if (result.code === 0) {
	// 		commit("SETUSERINFO", result.userInfo)
	// 	} else {
	// 		return Promise.reject(result.msg)
	// 	}
	// }
	
}

export default {
	namespace: true,
	state,
	mutations,
	actions,
	getters
}