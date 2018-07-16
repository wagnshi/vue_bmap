import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MapDemo from '@/components/MapDemo'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
	{
      path: '/',
      name: 'MapDemo',
      component: MapDemo
    }
  ]
})
