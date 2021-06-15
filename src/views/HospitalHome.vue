<template>
    <div class="hospital-home-container">
        <div class="home-left-side">
            <WelcomePanal/>
            <UpgradePanal/>
            <Tabs/>
            <AppointementsTable/>
            <ReservationsTable/>
        </div>
        <div class="home-right-side">

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WelcomePanal from "@/components/hospitalHome/WelcomePanal.vue";
import UpgradePanal from "@/components/hospitalHome/UpgradePanal.vue";
import Tabs from "@/components/hospitalHome/Tabs.vue";
import AppointementsTable from "@/components/hospitalHome/AppointementsTable.vue";
import ReservationsTable from "@/components/hospitalHome/ReservationsTable.vue";
@Component({
    components: {
        WelcomePanal,
        UpgradePanal,
        Tabs,
        AppointementsTable,
        ReservationsTable
    },
})
export default class HospitalHome extends Vue {
    
}
</script>

<style scoped>
.hospital-home-container{
    padding: 50px 100px;
    clear: both;
    overflow: hidden;
    display: block;
}
.home-left-side{
    width: 60%;
    margin-right: 10%;
    float: left;
}
.home-right-side{
    width: 30%;
    float: right;
}
</style>