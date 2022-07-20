<template>
    <div>
        <h1>Class and Style binding</h1>
        <h1 class="first">Using Class Only</h1>
        <h2 v-bind:style="{color:'red',background:'white',padding:'20px'}">Using Style</h2>
        <h3 v-bind:class="{third:show}">Class with Object</h3>
        <h4 v-bind:class="[arr]">Class with array</h4>
        <h5 v-bind:class="[cond?'yesShow':'noShow']">Class with condition</h5>
        <h6>Style with property</h6>
    </div>
</template>
<script>
export default {
    name:'ClassStyleBindingComponent',
    data(){
        return{
            show:true,
            arr:'arrayClass',
            cond:false,
        }
    }
}
</script>
<style>
    .first{
        color: #fff;
        background-color: black;
        padding: 20px;
    }
    .third{
        background-color: aqua;
        color: red;
        padding: 20px;
    }
    .arrayClass{
        background-color: blueviolet;
        color: #fff;
        padding: 20px;
    }
    .yesShow{
        background-color: cadetblue;
        color: #000;
        padding: 20px;
    }

    .noShow{
        background-color: rgb(65, 111, 83);
        color: #000;
        padding: 20px;
    }
</style>