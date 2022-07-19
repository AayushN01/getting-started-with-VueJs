 <template>
    <div>
        <h1>This is from HomeComponent</h1>
        <h2>{{data}}</h2>  
        <p>{{msg}}</p>
        <button v-on:click="hello">Click Here</button>      
    </div>
 </template>
 <script>
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
 </script>