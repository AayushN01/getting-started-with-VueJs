import {createWebHistory, createRouter} from 'vue-router'
import HomePageComponent from './components/HomePageComponent.vue';
import AboutPageComponent from './components/AboutPageComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import PageNotFoundComponent from './components/PageNotFoundComponent.vue';
import DynamicComponent from './components/DynamicComponent.vue';
import MainComponent from './components/MainComponent.vue';
import NonPropsHomeComponent from './components/NonPropsHomeComponent.vue';
import BlogComponent from './components/BlogComponent.vue';

const routes = [
    {name:'Home',path:'/',component:HomePageComponent},
    {name:'About',path:'/about',component:AboutPageComponent},
    {name:'Profile',path:'/profile/:name',component:ProfileComponent},
    {name:'Dynamic',path:'/dynamic',component:DynamicComponent},
    {name:'Main',path:'/main',component:MainComponent},
    {name:'Non Props',path:'/non-props',component:NonPropsHomeComponent},
    {name:'Blog',path:'/blog',component:BlogComponent},
    {name:'Page Not Found',path:'/:pathMatch(.*)*',component:PageNotFoundComponent},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;