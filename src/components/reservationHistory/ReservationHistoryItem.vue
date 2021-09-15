<template>
    <div class="reservation-item-container">
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
                <h5>Phone Num. : {{ reservationObj.phone }}</h5>
            </div>
            <div class="block">
                <div class="left-btn">
                    <button>{{ reservationObj.Day }}</button>
                    <span>{{ reservationObj.reservation_date }}</span>
                </div>
                <div class="right-btn">
                    <span class="finish"></span>
                    <!-- <span class="pending"></span>
                    <span class="cancel"></span> -->
                    <span class="status">Finished</span>
                </div>
            </div>
        </div>
        <div class="block">
            <h5>limit your time</h5>
            <h6>From <span>{{ reservationObj.start_time }}:00</span> To <span>{{ reservationObj.end_time }}:00 </span></h6>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue,Watch } from 'vue-property-decorator';
import { getReservation, confirmReservation } from '@/endpoints/reservations';
import {BaseUrl} from '@/app.config';

@Component({
    components: {

    },
})
export default class ReservationHistoryItem extends Vue {
    reservationObj = {}
    resId =this.$route.params.id
    BaseUrl = BaseUrl
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) {
        this.resId =this.$route.params.id
        this.getReservation(this.resId)
    }
    async getReservation(resId:any){
        this.reservationObj = await getReservation(resId);
    }
     confirmReservation(reservation_id:any){
        confirmReservation(reservation_id)

    }
    updateDetailsFun(){
        this.getReservation(this.resId)
    }
    mounted(){
        this.getReservation(this.resId)
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
.finish{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background: green;
    margin-right: 10px;
}
.pending{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background: yellow;
    margin-right: 10px;
}
.cancel{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background: red;
    margin-right: 10px;
}
.status{
    color: var(--font-navy);
    font-size: 12px;
    font-weight: bold;
}
</style>