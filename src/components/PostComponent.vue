<template>
    <div>
        <h1>Post Component</h1>
        <form @submit="postData">
            <input type="text" name="title" placeholder="Enter title" v-model="details.title"> <br><br>
            <input type="text" name="author" placeholder="Author name" v-model="details.author"> <br><br>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = Vue.createApp()
app.use(VueAxios, axios)

export default {
    name:'PostComponent',
    data(){
        return{
            details:{id:null,title:null,
                  author:null}     
        }
    },methods:{
        postData(e){
            e.preventDefault();
            console.log(this.details);
            if(this.details.title && this.details.author){
                axios.post('http://localhost:3000/posts',this.details).then((response)=>{
                    console.log(response);
                });
            } else {
                console.log("enter title and author");
            }
        }
    }
}
</script>

