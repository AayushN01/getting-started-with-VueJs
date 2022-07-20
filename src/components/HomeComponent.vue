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
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.email}}</td>
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
    },methods:{
        display(){
            console.log('Button clicked message displayed on console');
        }
    },data()
    {
        return {
            users:[
                {id:1, name:'Steve', age:'23', email:'steve@email.com'},
                {id:2, name:'Peter', age:'22', email:'peter@email.com'},
                {id:3, name:'Tony', age:'23', email:'tony@email.com'},
                {id:4, name:'Wanda', age:'25', email:'wanda@email.com'},
                {id:5, name:'Nat', age:'24', email:'nat@email.com'},
            ]
        }
    }
 }
 </script>