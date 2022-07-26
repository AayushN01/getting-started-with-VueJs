import {createWebHistory, createRouter} from 'vue-router'
import HomePageComponent from './components/HomePageComponent.vue';
import AboutPageComponent from './components/AboutPageComponent.vue';

const routes = [
    {name:'Home',path:'/',component:HomePageComponent},
    {name:'About',path:'/about',component:AboutPageComponent},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;