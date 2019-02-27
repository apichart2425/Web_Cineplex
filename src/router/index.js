import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/movie'
import TheaterShowTime from '@/components/TheaterShowTime'
import PayMent from '@/components/PayMent'
import Login from '@/components/Login'
import Register from '@/components/Register'
import DetailMovie from '@/components/DetailMovie'
import CardMovie from '@/components/CardMovie'
import Ticket from "@/components/Ticket"

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
    {
      path: '/PayMent',
      name: 'PayMent',
      component: PayMent,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/DetailMovie',
      name: 'DetailMovie',
      component: DetailMovie,
    }, 
    {
      path: '/CardMovie',
      name: 'CardMovie',
      component: CardMovie,
    },
    {
      path: '/Ticket',
      name: 'Ticket',
      component: Ticket,
    },
  ]
})
