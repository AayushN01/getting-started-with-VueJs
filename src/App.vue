<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomeComponent/> -->
    <!-- <HomeComponent data="By: Aayush Niraula" msg="This is Vue JS Tutorial"/> -->
    <!-- <MainComponent/> -->
    <!-- <div v-if="display">
    <LifeCycleComponent/>
      <button v-on:click="toggle">Toggle</button>
    </div>
     -->
     <!-- <EmployeeListComponent/> -->
     <!-- <BootstrapComponent/> -->
     <!-- <PostComponent/> -->
     <!-- <UserDeleteComponent/> -->
     <div class="route">
           <router-link to="/">Home</router-link> <br><br>
          <router-link to="/dynamic">Dynamic Component</router-link> <br><br>
          <router-link to="/main">Main Component</router-link> <br><br>
          <router-link to="/about">About</router-link> <br><br>
          <router-link to="/profile">Profile</router-link> <br><br>
          <!-- <router-link to="/profile/anil">Anil Profile</router-link> <br><br>
          <router-link to="/profile/peter">Peter Profile</router-link> <br><br>
          <router-link to="/profile/bruce">Bruce Profile</router-link> <br><br> -->
          <router-link to="/blog">Blog</router-link> <br><br>
          <router-link to="/contact">Contact</router-link> <br><br>
          <router-link to="/non-props">Non Props</router-link> <br><br>
     </div>
          <router-view></router-view>
   </div>
</template>

<script>
// import EmployeeListComponent from './components/EmployeeListComponent.vue';
// import BootstrapComponent from './components/BootstrapComponent.vue';
// import PostComponent from './components/PostComponent.vue';
// import UserDeleteComponent from './components/UserDeleteComponent.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import MainComponent from './components/MainComponent.vue'
// import LifeCycleComponent from './components/LifeCycleComponent.vue';
export default {
  name: 'App',
  components: {
    // EmployeeListComponent,
    // BootstrapComponent,
    // PostComponent,
    // UserDeleteComponent
},data(){
  return{
    display:true
  }
},methods:{
  toggle(){
    this.display = !this.display;
  }
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.route{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.route a{
  padding: 5px 10px;
}
</style>
