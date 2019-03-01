import {reqPosition,reqCategary,reqShops} from '../../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from '../mutation-types'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [], //商家数组
}

const mutations ={
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }
}



const actions = {
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqPosition(latitude, longitude)
    if (result.code === 0) {
      commit(RECEIVE_ADDRESS, result.data)
    }
  },
  async getCategorys ({commit}) {
    const result = await reqCategary()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, result.data)
    }
  },
  async getShops ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    if (result.code === 0) {
      commit(RECEIVE_SHOPS, result.data)
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


