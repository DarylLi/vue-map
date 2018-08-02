import Vue from 'vue'
import Router from 'vue-router'
import Bmap from '@/components/Bmap'
import Amap from '@/components/Gmap'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    redirect: '/Bmap'
  }, {
    path: '/Bmap',
    name: 'Bmap',
    component: Bmap
  }, {
    path: '/Amap',
    name: 'Amap',
    component: Amap
  }],
  mode: 'hash'
})
