<template>
    <div>
        <h1>This is child Component.</h1>
        <p>To send props from child component to parent component</p>
        <button v-on:click="updateTitle">Click to update parent title</button>
    </div>
</template>

<script>
export default {
    name:'ChildComponent',
    methods:{
        updateTitle(){
            // alert('Button clicked!');
            this.$emit('newTitle','This is Main Component (Title Changed)');
        }
    }
}
</script>