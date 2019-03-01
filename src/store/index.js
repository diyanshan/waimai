import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import actions from './actions'
import getters from './getters'
import msite from './module/msite'
import shop from './module/shop'
import user from './module/user'


Vue.use(Vuex)

export default new Store({
  actions,
  getters,
  modules:{
    msite,
    shop,
    user
  }
})
