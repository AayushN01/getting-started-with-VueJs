<template>
    <div class="data-binding">
        <h1>Data Binding</h1>
        <p>{{text}}</p>
        <input type="text" v-model="text">
        <p style="white-space:pre;">{{message}}</p>
        <textarea v-model="message"></textarea>
        <br>
        <select name="dropdown" id="" v-model="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <label for="dropdown">Selected value is: {{select}}</label>
        <br><br><br>
        <input type="radio" v-model="checked" value="1">1
        <input type="radio" v-model="checked" value="2">2
        <h5>Checked value is {{checked}}</h5>
    </div>
</template>
<script>
export default {
    name:'DataBindingComponent',
    data(){
        return{
            text:'Enter text',
            message:'Enter your message here',
            select: '',
            checked:''
        }
    }
}
</script>
<style>
.data-binding{
    background-color: cornflowerblue;
    height: 400px;
}
</style>