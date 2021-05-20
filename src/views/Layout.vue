<template>
    <div class="layout">
        <Header/>
        <div class="body-container">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
@Component({
    components: {
        Header,
        Footer,
    },
})
export default class Layout extends Vue {
  
}
</script>
<style  scoped>
.body-container{
    min-height: 413px;
    background: var(--background-color);
    margin-top: 85px;
    overflow: hidden;
    clear: both;
}
</style>