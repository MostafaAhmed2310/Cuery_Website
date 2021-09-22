<template>
    <div class="static-home-container">
        <Cover/>
        <Services/>
        <SpecialHospital/>
        <!-- <Customers/> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from "@/components/staticHome/Cover.vue";
import Services from "@/components/staticHome/Services.vue";
import SpecialHospital from "@/components/staticHome/SpecialHospital.vue";
import Customers from "@/components/staticHome/Customers.vue";
@Component({
    components: {
        Cover,
        Services,
        SpecialHospital,
        Customers
    },
})
export default class StaticHome extends Vue {

    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted() {
        this.scrollToTop();
    }
  
}
</script>

<style scoped>
.clear{
    clear: both;
}
</style>
