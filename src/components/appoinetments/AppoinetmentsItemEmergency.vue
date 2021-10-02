<template>
    <div class="reservation-item-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservation-item">
            <div class="block">
                <div class="profile-img">
                    <img :src="BaseUrl+reservationObj.image_path" alt="" v-if="reservationObj.image_path">
                    <i class="fas fa fa-user-circle" v-if="reservationObj.image_path == null"></i>
                </div>
                <div class="reservation-info">
                    <h4>{{ reservationObj.name }}</h4>
                </div>
            </div>
            <div class="block">
                <h5><i class="fas fa fa-plus-square"></i>{{reservationObj.service_title}}</h5>
                <h5><i class="phone-icon fas fa fa-phone"></i>{{ reservationObj.phone }}</h5>
                <h5><i class="fas fa-map-marker-alt"></i>{{ reservationObj.address }}</h5>
            </div>
            <div class="block">
                <div class="left-btn">
                    <button>{{ reservationObj.Day }}</button>
                    <span>{{ $t("appoinetments.req_time") }}</span>
                    <span>At {{ reservationObj.call_time }}</span>
                </div>
            </div>
            <div class="block emergency-block">
                <div class="left-btn">
                    <h6>{{reservationObj.service_title}}</h6>
                    <h5>{{ $t("appoinetments.max_time") }} : {{reservationObj.waiting_time_in_mins}}</h5>
                </div>
                <div class="right-btn">
                    <span>{{ reservationObj.charge }}</span><span>{{ $t("sections.egp") }}</span>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="reservation-btns">
                <router-link :to="'/emergency-confirmation/'+ $route.params.id"><button  class="arrived-btn">{{ $t("appoinetments.arrived") }}</button></router-link>
                <button class="decline-btn" @click="declineemergency($route.params.id)">{{ $t("reservations.decline") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getEmergencyReservation } from '@/endpoints/reservations';
import {DoubleBounce} from 'vue-loading-spinner';
import {BaseUrl} from '@/app.config';
import {declineEmergency} from '@/endpoints/emergency';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class AppoinetmentsItemEmergency extends Vue {
  reservationObj =[];
  resId =this.$route.params.id;
  loaderFlag = false;
  BaseUrl = BaseUrl;
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal) {
        this.resId =this.$route.params.id;
        this.getEmergencyReservation(this.resId);
        this.scrollToTop();
    }
    async getEmergencyReservation(resId){
        this.loaderFlag = true;
        this.reservationObj = await getEmergencyReservation(resId);
        this.loaderFlag = false;
    }
    async declineemergency(id){
        this.loaderFlag = true;
        let res = await declineEmergency(id);
        this.loaderFlag = false;
        if(res){
            this.$emit('updateEmergencyAppointment');
        }
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted(){
        this.getEmergencyReservation(this.resId);
        this.scrollToTop();
    }

}
</script>

<style scoped>
.reservation-item{
    background: #fff;
    padding: 30px 0px;
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
    padding: 0px 30px;
}
.block h5{
    color: var(--font-navy);
    margin: 15px 0px;
}
.block h6{
    color: var(--font-navy);
    margin: 10px 0px;
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
    clear: both;
    display: block;
    margin-top: 40px;
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
    font-size: 20px;
    line-height: 3.5;
    font-weight: bold;
}
.right-btn span:nth-of-type(1){
    color: var(--main-green);
    margin-right: 5px;
}
.right-btn span:nth-of-type(2){
    color: var(--font-navy);
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
.arrived-btn{
    background: var(--main-green);
    margin-right: 20px;
}
.decline-btn{
    background: var(--alert-color) !important;
}
.block h5 i{
    color: var(--main-green);
    margin-right: 10px;
    margin-left: 10px;
}
.phone-icon{
    transform: rotate(90deg);
}
.emergency-block{
    background: rgba(241, 250, 245, 1);
    margin-top: 20px;
}
</style>