<template>
    <div>
        <h1>{{profile}}'s Profile</h1>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    name:'ProfileComponent',
    data(){
        return{
            profile:''
        }
    },mounted(){
        const route = useRoute();
        console.warn("route",route.params);
        this.profile = route.params.name;
    }
}
</script>