<template>
    <div>
        <h1 v-bind="$attrs">User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <h1>{{data}}</h1>
    </div>

</template>

<script>
export default {
    name:'NonPropsComponent',
    inheritAttrs:false,
    props:{
        id:String,
        data:String,
    }
}
</script>