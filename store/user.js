import {wxLogin, getUserInfo, logout} from '../api/loginApi.js';
import {setToken, getToken, clearToken} from '../utils/token.js'

const state = {
	token: getToken(),
	userInfo: {},
}

const mutations = {
	SET_USERINFO(state, userInfo) {
		state.userInfo = userInfo
	},
	SET_TOKEN(state, token) {
		state.token = token
	},
	// 退出登录清除用户信息
	USER_LOGOUT(state) {
		state.userInfo = {}
		state.token = ''
		clearToken()
	}
}

const getters = {
	
}

const actions = {
	// 用户登录
	async userLogin ({commit}, code) {
		let result = await wxLogin(code)
		console.log(result)
		if (result.code === 0) {
			commit("SET_USERINFO", result.userInfo)
			commit("SET_TOKEN", result.token)
			setToken(result.token)
		} else {
			return Promise.reject(result.msg)
		}
	},
	// 获取用户信息
	async getUserInfo({commit}) {
		let result = await getUserInfo();
		if (result.code === 0) {
			commit("SET_USERINFO", result.userInfo);
			return 'ok';
		} else {
			return Promise.reject(new Error(result.msg))
		}
	},
	// 退出登录
	async userLogout({commit}) {
		let result = await logout();
		if (result.code === 0) {
			commit("USER_LOGOUT")
		} else {
			return Promise.reject(result.msg)
		}
	}
	
	
}

export default {
	namespace: true,
	state,
	mutations,
	actions,
	getters
}