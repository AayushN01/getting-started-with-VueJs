 <template>
    <div>
        <h1 v-if="show">This is from HomeComponent</h1>
        <h1 v-else>This is from HomeComponent else block</h1>   
        <!-- <h2>{{data}}</h2>  
        <p>{{msg}}</p> -->
        <button v-on:click="display">Click Here</button>      
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
 <script>
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
        return {show:false}
    }
 }
 </script>