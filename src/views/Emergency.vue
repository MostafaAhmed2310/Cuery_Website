<template>
    <div class="reservations-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservations-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>
                    <router-link to="/hospital_home">
                        <i class="fas fa-chevron-left"></i> 
                    </router-link>
                    Emergency
                </h2>
                <Emergency class="calendar"/>
            </div>
            <div class="placeholder-body" v-if="placeholderFlag && !loaderFlag">
                <PagePlaceholder/>
            </div>
            <div class="reservations-inputs-body" v-if="bodyFlag">
                <div class="reservations-panal">
                    <EmergencyList @updateLength="updateLength" ref="updateEmergencyList"/>
                </div>
                <div class="reservation-body">
                    <router-view @updateEmergencyList="updateEmergencyList"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import EmergencyList from '@/components/emergency/EmergencyList.vue';
import Emergency from '@/assets/icons/Emergency.vue';
import PagePlaceholder from '@/views/PagePlaceholder.vue';
@Component({
    components: {
        EmergencyList,
        Emergency,
        PagePlaceholder
    },
})
export default class Eemergency extends Vue {
    loaderFlag = false;
    bodyFlag = true;
    placeholderFlag = false;
    updateLength(len){
        if(len == 0){
            this.bodyFlag = false;
            this.placeholderFlag = true;
        }else{
            this.bodyFlag = true;
            this.placeholderFlag = false;
        }
    }
    updateEmergencyList(){
        this.$refs.updateEmergencyList.updateEmergencyList();
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted() {
        this.scrollToTop();
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
    background: rgba(249, 253, 251, 1);
    height: 110vh;
    padding: 20% 50px 0px 50px;
}
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
</style>