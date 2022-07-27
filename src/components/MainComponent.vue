<template>
    <div>
        <h1>Main Component</h1>
        <UserComponent/>
        <ProductComponent msg="This is product component props"/>
        <TableComponent  msg="List of all users"/>
        <TemplateComponent/>
        <ClassStyleBindingComponent/>
        <DataBindingComponent/>
        <PropComponent v-bind:name="users"/> 
        <ChildComponent v-on:newTitle="changeTitle($event)"/>
        <FormComponent/>
        <FormValidationComponent/>
        <LifeCycleComponent/>
        <!-- <h2>$ {{(dollars*rupeeVal) - discount}}</h2> -->
        <h2>$ {{getResult}}</h2>
    </div>
</template>

<script>
import LifeCycleComponent from './LifeCycleComponent.vue'
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
    // ProductComponent,
    ChildComponent,
    FormComponent,
    FormValidationComponent,
    LifeCycleComponent
},data(){
        return{
            // users:[
            //     {name:'Sam'},
            //     {name:'Tony'},
            //     {name:'Bruce'}
            //     ],
            // title:"Main Component"
            dollars: 100,
            rupeeVal: 127,
            discount:10,

        }
    // },methods:{
    //     changeTitle(title){
    //         this.title = title
    //     }
    // }
         },computed:{
            getResult()
            {
                return ((this.dollars*this.rupeeVal)-this.discount);
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