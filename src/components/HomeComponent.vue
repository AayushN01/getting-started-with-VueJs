 <template>
    <div>
        <h1>This is from HomeComponent</h1>
        <h2>{{data}}</h2>  
        <p>{{msg}}</p>      
    </div>
 </template>
 <script>
 export default {
    name: 'HomeComponent',
    props:{
        data: String,
        msg: String,
    }
 }
 </script>