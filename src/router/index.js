import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SingleEvent from '../views/SingleEvent.vue'
import CreateEvent from '../views/CreateEvent.vue'
import FinishedEvents from '../views/FinishedEvents.vue'
import Logout from '../views/Logout.vue'
import EventsToApprove from '../views/EventsToApprove.vue'
import ScoreBoard from '../views/ScoreBoard.vue'
import UserEvents from '../views/UserEvents.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/event/:id',
        name: 'SingleEvent',
        component: SingleEvent,   
        props:true
    },
    {
        path: '/newevent',
        name: 'CreateEvent',
        component: CreateEvent,
    },
    {
        path: '/finishedEvents',
        name: 'FinishedEvents',
        component: FinishedEvents,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },
    {
        path: '/approve',
        name: 'EventsToApprove',
        component: EventsToApprove,
    },
    {
        path: '/score',
        name: 'ScoreBoard',
        component: ScoreBoard,
    },
    {
        path: '/users/:id',
        name: 'UserEvents',
        component: UserEvents,
        props:true

    }

]
const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router