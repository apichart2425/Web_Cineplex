import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/movie'
import TheaterShowTime from '@/components/TheaterShowTime'
import {
  homedir
} from 'os';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie,
    },
    {
      path: '/TheaterShowTime',
      name: 'TheaterShowTime',
      component: TheaterShowTime,
    },
  ]
})
