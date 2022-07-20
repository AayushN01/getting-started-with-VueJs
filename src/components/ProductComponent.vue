<template>
    <div class="product">
        <h2>This is Product Component</h2>
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    name:'ProductComponent',
    props:{
        msg:String
    }
}
</script>
<style>
    .product{
        background-color: #9292cd;
        height: 120px;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: flex-end;
        padding: 20px;
        flex-direction: column;
        flex-wrap: nowrap;
}
</style>