<template>
    <div>
        <h1>About Page</h1>
        <h2>Watchers example</h2>
        <h3>{{count}}</h3>
        <button v-on:click="count=count+1">Increase</button>
        <button v-on:click="count=count-1">Decrease</button>
    </div>
</template>

<script>
export default {
    name:'AboutPageComponent',
    data(){
        return{
            count:0
        }
    },watch:{
        count(val,prev)
        {
           if(val>5 && val>prev){
            this.count=0
            alert("Stop counting");
           }
        }
    }
}
</script>