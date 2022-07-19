 <template>
    <div>
        <h1 v-if="show">This is from HomeComponent</h1>
        <h1 v-else>Clicked button to toggle next block</h1>   
        <h2>{{data}}</h2>  
        <p>{{msg}}</p>
        <button v-on:click="display">Click Here</button>
        <br>
        <h1>For Loop</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                 <th>{{user.id}}</th>
                <th>{{user.name}}</th>
                <th>{{user.age}}</th>
                <th>{{user.email}}</th>
            </tr>
        </table>
    </div>
 </template>
  <!-- <script>
 export default {
    name: 'HomeComponent',
    props:{
        data: String,
        msg: String,
    },methods:{
        hello(){
            console.log('Button clicked, Hello message displayed');
        }
    }
 }
 </script> -->
 <!-- <script>
 export default {
    name: 'HomeComponent',
    props:{
        data: String,
        msg: String,
    },methods:{
        display(){
            this.show=!this.show;
        }
    },data()
    {
        return {show:true}
    }
 }
 </script> -->
 
 <!-- LOOP -->
<script>
 export default {
    name: 'HomeComponent',
    props:{
        data: String,
        msg: String,
    },data()
    {
        return {
            users:[
                {id:1, name:'Peter', age:'23', email:'peter@email.com'},
                {id:2, name:'Sam', age:'22', email:'sam@email.com'},
                {id:3, name:'Tony', age:'23', email:'tony@email.com'},
                {id:4, name:'Wanda', age:'25', email:'wanda@email.com'},
            ]
        }
    }
 }
 </script>