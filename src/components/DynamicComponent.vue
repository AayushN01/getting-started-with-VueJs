<template>
    <div>
        <h1>Dynamic Component</h1>
        <button @click="tab='LoginComponent'">Login</button>
        <button @click="tab='RegisterComponent'">Register</button>
        <!-- <LoginComponent />
        <RegisterComponent/> -->
        <component :is="tab"/>
    </div>
</template>

<script>
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'


export default {
    name:'MainComponent',
    components:{
    LoginComponent,
    RegisterComponent
},data(){
        return{
            tab:'RegisterComponent'
        }
    }

}
</script>
<style>
    div{
        background-color: #c3c3b5;
        height: 100%;
        padding: 10px;  
    }
</style>