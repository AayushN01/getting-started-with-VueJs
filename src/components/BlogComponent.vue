<template>
    <!-- <slot> <h1> Blog Component (Default value)</h1></slot>
    <slot> <h1> Blog Component (Default value)</h1></slot> -->
    <header>
        <slot name="header">

        </slot>
    </header>
    <content>
        <slot name="main">
            
        </slot>
    </content>
    <footer>
        <slot name="footer">
            <button>Submit</button>
        </slot>
    </footer>
    
</template>

<script>
export default {
    name:'BlogComponent',
    props:{
        data:String,
    }
}
</script>