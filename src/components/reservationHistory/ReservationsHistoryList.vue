<template>
    <div class="reservatios-list-container">
        <div class="reservatios-item" v-for="reservation in reservationsList" :key="reservation">
            <router-link :to="'/reservation-history/' + reservation.id">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <div class="reservatios-info">
                    <h4> Reservation Name</h4>
                    <span>Section Title</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getReservationsList, confirmReservation, declineReservation } from '@/endpoints/reservations';

@Component({
    components: {

    },
})
export default class ReservationsHistoryList extends Vue {
    reservationsList = [0,1,2,3,4,5];
}
</script>

<style scoped>
.reservatios-list-container{
    overflow: auto;
    position: relative;
    width: 100%;
    padding: 30px 0px;
    height: 80vh;
}
.reservatios-item{
    width: 80%;
    margin: auto;
    background: #fff;
    border-radius: var(--md-radius);
    box-shadow: 0px 1px 2px 0px #ddd;
    padding: 20px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
}
.profile-img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 2%;
    background: var(--main-green);
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 1.5;
}
.reservatios-info{
    float: right;
    width: 70%;
    color: var(--font-navy);
}
.reservatios-info h4{
    margin: 0px 0px 5px 0px;
    font-size: 15px;
}
.reservatios-info span{
    font-size: 11px;
}
.reservations-btns button{
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 6%;
    border-radius: var(--sm-radius);
    padding: 5px 10px;
    margin-top: 10px;
    color: #fff;
}
.reservations-btns button:nth-of-type(1){
    background: var(--main-green);
}
.reservations-btns button:nth-of-type(2){
    background: var(--alert-color);
}
</style>