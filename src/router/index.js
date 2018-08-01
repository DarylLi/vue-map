import Vue from 'vue'
import Router from 'vue-router'
import Bmap from '@/components/Bmap'
import Gmap from '@/components/Gmap'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Gmap',
      name: 'Gmap',
      component: Gmap
    }, {
      path: '/Bmap',
      name: 'Bmap',
      component: Bmap
    }
  ],
  mode:'history'
})
