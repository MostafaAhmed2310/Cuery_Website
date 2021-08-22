<template>
    <div class="reservations-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservations-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>Appoinetments</h2>
                <AppoinetmentsSVG class="calendar"/>
            </div>
            <div class="reservations-inputs-body">
                <div class="reservations-panal">
                    <div class="appoinetments-tabs">
                        <span @click="openGeneral()" :class="activeTabGeneral">General</span>
                        <span @click="openEmergency()" :class="activeTabEmergency">Emergency</span>
                    </div>
                    <AppoinetmentsLists v-if="normalList"/>
                    <AppoinetmentsEmergency v-if="emergencyList"/>
                </div>
                <div class="reservation-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppoinetmentsLists from '@/components/appoinetments/AppoinetmentsLists.vue';
import AppoinetmentsSVG from '@/assets/icons/AppoinetmentsSVG.vue';
import AppoinetmentsEmergency from '@/components/appoinetments/AppoinetmentsEmergency.vue';
@Component({
    components: {
        AppoinetmentsLists,
        AppoinetmentsSVG,
        AppoinetmentsEmergency
    },
})
export default class Appoinetments extends Vue {
    loaderFlag:Boolean = false;
    activeTabGeneral:any = 'activeTab';
    activeTabEmergency:any = '';
    normalList:Boolean = true;
    emergencyList:Boolean = false;

    openEmergency(){
        this.activeTabGeneral = '';
        this.activeTabEmergency = 'activeTab';
        this.emergencyList = true;
        this.normalList = false;
    }
    openGeneral(){
        this.activeTabGeneral = 'activeTab';
        this.activeTabEmergency = '';
        this.emergencyList = false;
        this.normalList = true;
    }
}
</script>

<style scoped>
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
.reservations-inputs-body{
    width: 85%;
    margin: auto;
    overflow: hidden;
    margin-top: -14%;
}
.reservations-panal{
    width: 30%;
    float: left;
    background: rgba(241, 250, 245, 1);
    height: 100vh;
    padding-top: 10%;
    margin-top: 6%;
    margin-right: 5%;
}
.calendar{
    position: absolute;
    bottom: 60px;
    right: 190px;
}
.reservation-body{
    width: 65%;
    float: left;
    height: 110vh;
    padding: 20% 50px 0px 50px;
    background: rgba(249, 253, 251, 1);
}
.appoinetments-tabs{
    width: 100%;
    height: 30px;
    color: rgba(97, 97, 97, 1);
}
.appoinetments-tabs span{
    width: 50%;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    height: 30px;
}
.activeTab{
    color: var(--font-navy);
    border-bottom: 1px solid var(--main-green);
    font-weight: bold;
}
</style>