<template>
    <div>
        <h1>Main Component</h1>
        <UserComponent/>
        <ProductComponent msg="This is product component props"/>
        <TableComponent  msg="List of all users"/>
        <TemplateComponent/>
        <ClassStyleBindingComponent/>
        <DataBindingComponent/>
    </div>
</template>
<script>
import UserComponent from './UserComponent.vue'
import ProductComponent from './ProductComponent.vue'
import TableComponent from './TableComponent.vue'
import TemplateComponent from './TemplateComponent.vue'
import ClassStyleBindingComponent from './ClassStyleBindingComponent.vue'
import DataBindingComponent from './DataBindingComponent.vue'

export default {
    name:'MainComponent',
    components:{
    UserComponent,
    ProductComponent,
    TableComponent,
    TemplateComponent,
    ClassStyleBindingComponent,
    DataBindingComponent
}

}
</script>
<style>
    div{
        background-color: #c3c3b5;
        height: 100%;
        padding: 10px;  
    }
</style>