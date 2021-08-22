<template>
    <div class="reservations-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservations-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>Reservations</h2>
                <Calendar class="calendar"/>
            </div>
            <div class="reservations-inputs-body">
                <div class="reservations-panal">
                    <ReservationsList @updateDetails="updateReservationDetails"/>
                </div>
                <div class="reservation-body">
                    <router-view ref="updatePage"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ReservationsList from '@/components/reservations/ReservationsList.vue';
import Calendar from '@/assets/icons/Calendar.vue';
@Component({
    components: {
        ReservationsList,
        Calendar
    },
})
export default class Reservations extends Vue {
    loaderFlag:Boolean = false;
    updateReservationDetails(){
        (<any>this.$refs.updatePage).updateDetailsFun();
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
</style>