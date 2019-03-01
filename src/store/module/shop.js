import Vue from 'vue'
import {reqGoods, reqInfo, reqRatings} from '../../api'
import {RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS,REDUCE_FOOD_COUNT,ADD_FOOD_COUNT,CLEAR_COUNT} from '../mutation-types'

const state = {
  info:{},  //
  goods:[],
  ratings:[],
  cardFood:[],
}

const mutations = {
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [REDUCE_FOOD_COUNT] (state, {food}) {
    if (food.count > 0) {
      food.count--
    }
    if (food.count === 0) {
      const index = state.cardFood.indexOf(food)
      state.cardFood.splice(index, 1)
    }
  },
  [ADD_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count++
    } else { // 第一次增加
      // 给food添加一个新的属性 count: 1   没有数据绑定
      // food.count = 1
      // Vue.set( target, key, value )
      Vue.set(food, 'count', 1)
      state.cardFood.push(food)
    }
  },
  [CLEAR_COUNT] (state) {
    // 将购物车中所有的food的count置为0
    state.cardFood.forEach(item => item.count = 0)
    state.cardFood = []


  }
}



const actions = {
  // 商家视屏分类
  async getInfo ({commit}) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  async getGoods ({commit}) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
    }
  },
  async getRatings ({commit}) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  updateFoodCount ({commit},{isAdd, food}) {
    if(isAdd) {
      commit(ADD_FOOD_COUNT, {food})
    }else {
      commit(REDUCE_FOOD_COUNT, {food})
    }
  },
  clearCount ({commit}){
      commit(CLEAR_COUNT)
  },
}
const getters = {
  //总数
  totalCount(state){
    return state.cardFood.reduce((pre,item) => pre +item.count,0)
  },
  //总价格
  totalPrice(state){
    return state.cardFood.reduce((pre,item) => pre+ item.count*item.price,0)
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}

