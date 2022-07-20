<template>
    <div class="prop">
        <h1>Props in Vue JS</h1>
        <h4 v-for="user in name" :key="user.name">{{user.name}}</h4>
    </div>
</template>

<script>
export default {
    name: 'PropComponent',
    props:[
        'name',
    ]
}
</script>
<style>
    div.prop{
        margin-top: 20px;
        background-color: darkgoldenrod;
    }
</style>