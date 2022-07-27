<template>
    <div>
        <h1>Non Props Data</h1>
        <NonPropsComponent data="Some Text" id="text"/>
    </div>
</template>

<script>
import NonPropsComponent from './NonPropsComponent.vue';

export default {
    name: "NonPropsHomeComponent",
    components: { NonPropsComponent }
}
</script>