<template>
    <div>
        <h1>Employee List</h1>
        <table>
            <tr>
                <th>Emp Name</th>
                <th>Salary</th>
                <th>Age</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.employee_name}}</td>
                <td>{{item.employee_salary}}</td>
                <td>{{item.employee_age}}</td>
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
    name:'EmployeeListComponent',
    data(){
        return{
            list:''
        }
    },
    mounted() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        this.list = response.data.data;
        console.warn(this.list);
      });
    }
}
</script>   

<style>
    table tr th, table tr td{
        border: 1px solid black;
    }
</style>