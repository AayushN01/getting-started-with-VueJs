<template>
    <div>
        <h1>{{title}}</h1>
        <UserComponent/>
        <ProductComponent msg="This is product component props"/>
        <TableComponent  msg="List of all users"/>
        <TemplateComponent/>
        <ClassStyleBindingComponent/>
        <DataBindingComponent/>
        <!-- <PropComponent v-bind:name="users"/> -->
        <ChildComponent v-on:newTitle="changeTitle($event)"/>
        <FormComponent/>
        <FormValidationComponent/>
    </div>
</template>
<script>
import UserComponent from './UserComponent.vue'
import ProductComponent from './ProductComponent.vue'
import TableComponent from './TableComponent.vue'
import TemplateComponent from './TemplateComponent.vue'
import ClassStyleBindingComponent from './ClassStyleBindingComponent.vue'
import DataBindingComponent from './DataBindingComponent.vue'
// import PropComponent from './PropComponent.vue'
import ChildComponent from './ChildComponent.vue'
import FormComponent from './FormComponent.vue'
import FormValidationComponent from './FormValidationComponent.vue'

export default {
    name:'MainComponent',
    components:{
    UserComponent,
    ProductComponent,
    TableComponent,
    TemplateComponent,
    ClassStyleBindingComponent,
    DataBindingComponent,
    // PropComponent,
    ChildComponent,
    FormComponent,
    FormValidationComponent
},data(){
        return{
            // users:[
            //     {name:'Sam'},
            //     {name:'Tony'},
            //     {name:'Bruce'}
            //     ],
            title:"Main Component"
            
        }
    },methods:{
        changeTitle(title){
            this.title = title
        }
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