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
                    {{ $t("nav.reservation_history") }}
                </h2>
            </div>
            <div v-if="placeHolderFlag">
                <PagePlaceholder/>
            </div>
            <div class="reservations-inputs-body" v-if="reservationBodyFlag">
                <div class="reservations-panal">
                    <ReservationsHistoryList @updateLength="updateLength"/>
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
import ReservationsHistoryList from '@/components/reservationHistory/ReservationsHistoryList.vue';
import PagePlaceholder from '@/views/PagePlaceholder.vue';
@Component({
    components: {
        ReservationsHistoryList,
        PagePlaceholder,
    },
})
export default class ReservationHistory extends Vue {
    loaderFlag:Boolean = false;
    placeHolderFlag:Boolean = false;
    reservationBodyFlag:Boolean = true;
    updateLength(len:any){
        if(len == 0){
            this.placeHolderFlag = true;
            this.reservationBodyFlag = false;
        }else{
            this.placeHolderFlag = false;
            this.reservationBodyFlag = true;
        }
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