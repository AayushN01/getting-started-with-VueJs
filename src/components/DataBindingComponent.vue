<template>
    <div class="data-binding">
        <h1>Data Binding</h1>
        <p>{{text}}</p>
        <input type="text" v-model="text">
        <p style="white-space:pre;">{{message}}</p>
        <textarea v-model="message"></textarea>
    </div>
</template>
<script>
export default {
    name:'DataBindingComponent',
    data(){
        return{
            text:'Enter text',
            message:'Enter your message here'
        }
    }
}
</script>
<style>
.data-binding{
    background-color: cornflowerblue;
}
</style>