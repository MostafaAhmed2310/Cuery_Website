<template>
    <div class="reservation-item-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="popup-overlay" v-if="declinePopup">
            <DeclinePopup @updateReservationsList="updateReservationsList" @closePopup="closePopup"/>
        </div>
        <div class="reservation-item">
            <div class="block">
                <div class="profile-img">
                    <img :src="BaseUrl + reservationObj.image_path" alt="" v-if="reservationObj.image_path">
                    <i class="fas fa fa-user-circle" v-if="reservationObj.image_path == null"></i>
                </div>
                <div class="reservation-info">
                    <h4>{{ reservationObj.name }}</h4>
                </div>
            </div>
            <div class="block">
                <h5>{{ reservationObj.section_title }}</h5>
                <h5>{{ $t("reservations.phone_num") }} {{ reservationObj.phone }}</h5>
            </div>
            <div class="block">
                <div class="left-btn">
                    <button>{{ reservationObj.Day }}</button>
                    <span>{{ reservationObj.reservation_date }}</span>
                </div>
                <div class="right-btn">
                    <router-link :to="'/messages/'+ reservationObj.user_id">
                        <button>{{ $t("reservations.start_conversation") }}</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="block">
            <h5>{{ $t("reservations.limit_your_time") }}</h5>
            <h6>{{ $t("reservations.from") }} <span>{{ reservationObj.start_time }}:00</span> {{ $t("reservations.to") }} <span>{{ reservationObj.end_time }}:00 </span></h6>
        </div>
        <div class="block">
            <div class="reservation-btns">
                <button @click="confirmReservation(reservationObj.id)">{{ $t("reservations.confirm") }}</button>
                <button @click="openDeclinePopup()">{{ $t("reservations.decline") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue,Watch } from 'vue-property-decorator';
import { getReservation, confirmReservation, declineReservation  } from '@/endpoints/reservations';
import {DoubleBounce} from 'vue-loading-spinner';
import {BaseUrl} from '@/app.config';
import DeclinePopup from '@/components/appoinetments/DeclinePopup.vue';
@Component({
    components: {
        DoubleBounce,
        DeclinePopup,
    },
})
export default class ReservationItem extends Vue {
    reservationObj = {};
    loaderFlag = false;
    resId =this.$route.params.id;
    BaseUrl = BaseUrl;
    declinePopup = false;
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal) {
        this.resId =this.$route.params.id;
        this.getReservation(this.resId);
        this.scrollToTop();
    }
    async getReservation(resId){
        this.loaderFlag = true;
        this.reservationObj = await getReservation(resId);
        this.loaderFlag = false;
    }
    async confirmReservation(reservation_id){
        this.loaderFlag = true;
        let res = await confirmReservation(reservation_id);
        this.loaderFlag = false;
        if(res){
            this.$fire({
                title: "SUCCESS!",
                text: "This reservation confirmed",
                type: "success",
                timer: 2000
            })
            this.$router.push('/reservations');
        }
    }
    openDeclinePopup(){
        this.declinePopup = true;
    }
    closePopup(){
        this.declinePopup = false;
    }
    updateDetailsFun(){
        this.getReservation(this.resId)
    }
    updateReservationsList(){
        this.$emit('updateReservationsList');
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted(){
        this.getReservation(this.resId);
        this.scrollToTop();
    }
}
</script>

<style scoped>
.reservation-item{
    background: #fff;
    padding: 30px;
    border-radius: var(--md-radius);
    box-shadow: 0px 1px 2px 0px #ddd;
    overflow: hidden;
    position: relative;
    clear: both;
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
.profile-img img{
    width: 100%;
    height: 100%;
}
.reservation-info{
    float: left;
}
.reservation-info h4{
    margin: 12px 0px;
    color: var(--font-navy);
}
.block{
    display: block;
    clear: both;
    overflow: hidden;
}
.block h5{
    color: var(--font-navy);
}
.block h6{
    color: var(--font-navy);
}
.block h6 span{
    background: #fff;
    border-radius: var(--sm-radius);
    color: var(--main-green);
    margin: 0 10px;
    padding: 2px 5px;
}
.block .reservation-btns{
    float: right;
}
.left-btn{
    float: left;
}
.left-btn button{
    width: 50px;
    height: 50px;
    border-radius: var(--sm-radius);
    color: #fff;
    background: var(--font-navy);
    border: none;
    outline: none;
    margin-right: 5%;
    float: left;
}
.left-btn span{
    display: block;
    float: left;
    font-size: 12px;
    color: var(--font-navy);
    font-weight: bold;
    margin-top: 5px;
}
.right-btn{
    float: right;
}
.right-btn button{
    background: var(--main-green);
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: var(--sm-radius);
}
.right-btn button:hover{
    opacity: 0.8;
}
.reservation-btns button{
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: var(--sm-radius);
    padding: 10px 20px;
    color: #fff;
}
.reservation-btns button:hover{
    opacity: 0.8;
}
.reservation-btns button:nth-of-type(1){
    background: var(--main-green);
    margin-right: 20px;
}
.reservation-btns button:nth-of-type(2){
    background: var(--alert-color);
}
.popup-overlay{
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
}
</style>