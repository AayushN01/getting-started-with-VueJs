<template>
    <div>
        <h1>Delete User using API</h1>
        <table style="border:1px solid black;">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.address}}</td>
                <td><button v-on:click="deleteUser(user.id)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = Vue.createApp()
app.use(VueAxios, axios)

export default {
    name:'UserDeleteComponent',
    data(){
        return{
            users:null
        }
    },methods:{
        getUsers(){
            axios.get('http://localhost:3000/users').then((response)=>{
            // console.log(response.data);
            this.users = response.data;
            });
        },
        deleteUser(id){
            // console.log(id);
            axios.delete('http://localhost:3000/users/'+id).then((response)=>{
            // console.log(response.data);
            this.users = response;
            console.log('user deleted');
            this.getUsers();  
            });
        }
    },mounted(){
        this.getUsers();    
    }
}
</script>