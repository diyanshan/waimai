<template>
  <div>
    <router-view></router-view>
    <Footerguide v-show="$route.meta.footerShow"/>
  </div>

</template>

<script>
  import Footerguide from './components/Footerguide.vue'
  import {reqPosition} from './api'

  export default {
    mounted(){
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')


    },
    components:{
      Footerguide
    },
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
