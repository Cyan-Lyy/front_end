import request from './request'
// // 用户一键登录
export const wxLogin = (code) => {
	return  request(`/api/auth/wxLogin`, "GET", {code});
}
// 获取用户信息
export const getUserInfo = () => {
	return request(`/api/user/info`, "GET")
}
// 用户退出登录
export const logout = () => {
	return request(`/api/auth/logout`, "GET")
}