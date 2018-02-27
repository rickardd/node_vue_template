import Vue from 'vue'
import Router from 'vue-router'
import CreateUserComponent from '@/components/CreateUserComponent'
import UsersComponent from '@/components/UsersComponent'
import UserComponent from '@/components/UserComponent'
import HomeComponent from '@/components/HomeComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/user/create',
      name: 'Register',
      component: CreateUserComponent
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersComponent
    },
    {
      path: '/user/:id',
      name: 'User',
      component: UserComponent,
      props: true // When props is set to true, the route.params will be set as the component props.
    },
    {
      path: '/user/update/:id',
      name: 'UpdateUser',
      component: CreateUserComponent,
      props: true // When props is set to true, the route.params will be set as the component props.
    }

  ]
})
