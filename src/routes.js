import {createWebHistory, createRouter} from 'vue-router'
import HomePageComponent from './components/HomePageComponent.vue';
import AboutPageComponent from './components/AboutPageComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';

const routes = [
    {name:'Home',path:'/',component:HomePageComponent},
    {name:'About',path:'/about',component:AboutPageComponent},
    {name:'Profile',path:'/profile/:name',component:ProfileComponent},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;