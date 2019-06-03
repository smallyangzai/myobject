import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import sort from './sort'
import mine from './mine'
import city from './city'

Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    sort,
    mine,
    city
  ]
})