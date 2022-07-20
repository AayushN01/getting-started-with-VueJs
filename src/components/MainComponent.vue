<template>
    <div>
        <h1>Main Component</h1>
        <UserComponent/>
        <ProductComponent msg="This is product component props"/>
        <TableComponent  msg="List of all users"/>
    </div>
</template>
<script>
import UserComponent from './UserComponent.vue'
import ProductComponent from './ProductComponent.vue'
import TableComponent from './TableComponent.vue'
export default {
    name:'MainComponent',
    components:{
    UserComponent,
    ProductComponent,
    TableComponent
}

}
</script>
<style>
    div{
        background-color: #c3c3b5;
        height: 1000px;
        padding: 10px;  
    }
</style>