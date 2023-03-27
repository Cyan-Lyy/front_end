import store from '@/store';
import {getToken} from '@/utils/token.js'
// import axios from 'axios'
// 全局请求封装
const base_url = 'http://cqzgmq.natappfree.cc'
 
// 需要修改token，和根据实际修改请求头
export default (url, method, params) => {
	// 获取本地token
	let token
	// 根据请求方法或URL来判断是否添加请求头

	if (store.state.user.token) {
		// console.log(token, "sbsbsbsbsbb");
		console.log(store.state.user.token, "sbsbsbsb");
		token = store.state.user.token
	}
	// if (method == "post") {    
		
		
	// 	header.token = token
	// 	header['content-type'] = "application/json"
	// } else if (url == "api/WxUser/GetWxUser") {
	// 	header = {
	// 		token: token
	// 	}
	// }
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url + url,
			method: method,
			header: {token : getToken()},
			data: params,
			success(response) {
				const res = response
                // 根据返回的状态码做出对应的操作
                //获取成功
				if (res.data.code == '0') {
					resolve(res.data);
				} else if (res.data.code !== '0') {
                    //获取失败
					// uni.clearStorageSync()
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						success() {
							uni.navigateTo({
								url: "/pages/login/index"
							})
						}
					})
				}
			},
			fail(err) {
				reject(err);
				console.log(err)
			},
			complete() {
 
			}
		});
	}).catch((e) => {});
};