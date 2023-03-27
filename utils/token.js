// 本地持久化存储token
export const setToken = (token) => {
	uni.setStorageSync('TOKEN', token);
}

// 清除本地存储的token
export const clearToken = (token) => {
	uni.clearStorageSync('TOKEN');
}

// 获取token
export const getToken = () => {
	return uni.getStorageSync('TOKEN')
}