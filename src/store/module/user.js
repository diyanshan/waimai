import {
  RECEIVE_USER,
  RESET_USER,
} from '../mutation-types'
import {reqUserInfo, reqLogout} from '../../api'

const state = {
  shops: [], //商家数组
  user:{},  //用户信息
}

const mutations ={
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
}



const actions = {
  // 同步保存用户的action
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, user)
  },

  async getUser ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },
  // 退出登陆
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER)
    }
  },
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters,
}
