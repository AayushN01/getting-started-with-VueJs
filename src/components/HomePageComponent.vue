<template>
    <div>
        <h1>Home Page</h1>
        <BlogComponent>
            <template  v-slot:header>
                <h1>From blog page</h1>
            </template>
            <template v-slot:main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos a fugiat, temporibus exercitationem minima labore sit molestiae adipisci harum deserunt, eveniet neque quos quam corrupti mollitia pariatur est fuga distinctio.</p>
            </template>
            <template v-slot:footer>
                <button>Buy Now</button>
            </template>
        </BlogComponent>
                <BlogComponent>
            <template  v-slot:header>
                <h1>From blog page</h1>
            </template>
            <template v-slot:main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos a fugiat, temporibus exercitationem minima labore sit molestiae adipisci harum deserunt, eveniet neque quos quam corrupti mollitia pariatur est fuga distinctio.</p>
            </template>
            <template v-slot:footer>
                <button>Buy Now</button>
            </template>
        </BlogComponent>
        <teleport to="#footer">
            <FooterComponent/>
        </teleport>
    </div>
</template>

<script>
import BlogComponent from './BlogComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    name: "HomePageComponent",
    components: { BlogComponent, FooterComponent }
}
</script>