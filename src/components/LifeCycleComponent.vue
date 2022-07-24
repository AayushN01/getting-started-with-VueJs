<template>
    <div>
        <h1 id="name">{{name}}</h1>
    </div>
</template>

<script>
export default {
    name:'LifeCycleComponent',
    data(){
        return{
            name: 'Jon Doe'
        }
    },
    beforeCreate(){
        this.name = 'Sam';
        console.warn("before",this.name);
    },
    created(){
        console.warn('Created',this.name);
    },beforeMount(){
        // console.warn('before mount',this.$el);
        console.log(document.getElementById('name'));
    },mounted(){
        // console.warn('mounted',this.$el);
        console.log(document.getElementById('name').innerHTML = 'Tony');
    },beforeUnmount()
    {
        alert('beforeDestroy/beforeUnmount');
        console.log('beforedestroy');
    },unmounted(){
        console.log('destroyed');
    }
}
</script>