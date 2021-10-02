<template>
    <div class="static-home-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservations-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>
                    {{pageTitle}}
                </h2>
                <img class="logo" src="@/assets/logo-final.png" alt="">
            </div>
            <div class="static-page-body">
                <div v-html="pageContent"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import {getStaticPages} from "@/endpoints/static_pages";

@Component({
    components: {
      
    },
})
export default class StaticPages extends Vue {
    pageContent = '';
    pageTitle = '';
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange() {
        this.getOldData();
        this.scrollToTop();
    }
    async getOldData(){
        let res = await getStaticPages();             
        if(this.$router.currentRoute.name == 'about_us'){
            this.pageContent = res[0].body;
            this.pageTitle = 'About Us';
        }else if(this.$router.currentRoute.name == 'privacy'){
                this.pageContent = res[1].body;
                this.pageTitle = 'Privacy Policy';
        }else if(this.$router.currentRoute.name == 'terms'){
            this.pageContent = res[2].body;
            this.pageTitle = 'Terms Of Us';
        }else if(this.$router.currentRoute.name == 'patientPrivacy'){
            this.pageContent = res[3].body;
            this.pageTitle = 'Patients Privacy Policy';
        }
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted() {
        this.getOldData();
        this.scrollToTop();
    }
  
}
</script>

<style scoped>
.clear{
    clear: both;
}
.cover-img{
    position: relative;
}
.cover-img img{
    width: 100%;
}
.cover-img h2{
    position: absolute;
    bottom: 25%;
    left: 10%;
    color: var(--font-navy);
}
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
.logo{
    width: 100px !important;
    position: absolute;
    right: 200px;
    bottom: 50px;
}
.static-page-body{
    width: 75%;
    margin: auto;
}
</style>
