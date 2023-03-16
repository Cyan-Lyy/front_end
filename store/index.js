// import Vue from 'vue'
// import Vuex from 'vuex'
import {createStore} from 'vuex'
// 引入小仓库
import user from './user'

// 使用插件
// Vue.use(Vuex)
// state:仓库存储数据的地方
const state = {}
// mutations：修改state的唯一手段
const mutations = {}
// action: 处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {}
// getters: 理解为计算属性，用于简化仓库数据操作，让组件获取仓库的数据更方便
const getters = {}
// 对外暴露Store类实例
export default createStore({
  // 模块化开发
  modules: {
    user,
  }
})