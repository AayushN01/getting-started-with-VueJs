<template>
    <div class="template">
        <h1>Template Component</h1>
        <h2 v-once>{{name}}</h2>
        <h2>{{name}}</h2>
        <h3>Sum is {{sum}}</h3>
        <h3>Difference is {{b-a}}</h3>
        <h4>{{active?'Active':'Inactive'}}</h4>
         <p v-html="row"></p>
        <button v-bind:disabled="disabled" v-on:click="updateText">Click Here</button>
        <button v-on:click="updateStatus">Toggle Status</button>
        <hr>
        <h1>Calculator</h1>
        <h4>{{type}}</h4>
        <button v-on:click="add">+</button>
        <button v-on:click="subtract">-</button>
        <button v-on:click="multiply">*</button>
        <button v-on:click="divide">/</button>
    </div>
</template>
<script>
export default {
    name:'TemplateComponent',
    data()
    {   
        return{
            name:'John',
            sum: 10+10,
            a: 15,
            b: 20,
            active:false,
            row:'<h5>This is new row </h5>',
            disabled:true,
            type:'Value (a=10 & b=20)',

        }
    },methods:{
        updateText(){
            this.name = 'Harry';
        },
        updateStatus(){
            this.active = !this.active
        },
        add(){
            return(this.type = "Sum is"+ ' '+ (10+20));
        },
        subtract(){
            return(this.type = "Difference is"+ ' '+ (10-20));
        },
        multiply(){
            return(this.type = "Product is"+ ' '+ (10*20));
        },
        divide(){
            return(this.type = "Division is"+ ' '+ (10/20));
        },
    }
}
</script>
<style>
    .template{
        background-color: aquamarine;
    }
</style>