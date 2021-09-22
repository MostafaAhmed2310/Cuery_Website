<template>
    <div class="reservation-item-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservation-item">
            <div class="block">
                <div class="profile-img">
                    <img :src="BaseUrl + reservationObj.image_path" alt="" v-if="reservationObj.image_path">
                    <i class="fas fa fa-user-circle" v-if="reservationObj.image_path == null"></i>
                </div>
                <div class="reservation-info">
                    <h4>{{reservationObj.name}}</h4>
                </div>
            </div>
            <div class="block">


                <h5><i class="fas fa fa-plus-square"></i>{{reservationObj.service_title}}</h5>
                <h5><i class="phone-icon fas fa fa-phone"></i>{{ $t("reservations.phone_num") }} {{reservationObj.phone}}</h5>
                <h5><i class="fas fa-map-marker-alt"></i>{{reservationObj.address}}</h5>
            </div>
            <div class="block">
                <div class="left-btn">
                    <button>{{reservationObj.Day}}</button>
                    <span>{{ $t("appoinetments.req_time") }}</span>
                    <span>{{ $t("sections.time") }} {{reservationObj.call_time}}</span>
                </div>
                <div class="right-btn">
                    <router-link :to="'/messages/'+ reservationObj.user_id">
                        <button>{{ $t("reservations.start_conversation") }}</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="reservation-btns">
                <button @click="confirmFun(reservationObj.id)">{{ $t("reservations.confirm") }}</button>
                <button @click="declineEmergencyReservation()">{{ $t("reservations.decline") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue,Watch } from 'vue-property-decorator';
import { getEmergencyReservation} from '@/endpoints/reservations';
import {acceptEmergencyReservation, declineEmergency} from '@/endpoints/emergency';
import {DoubleBounce} from 'vue-loading-spinner';
import {BaseUrl} from '@/app.config';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class EmergencyItem extends Vue {
    reservationObj = {}
    resId =this.$route.params.id
    loaderFlag = false
    BaseUrl = BaseUrl
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal) {
        this.resId =this.$route.params.id;
        this.getReservation(this.resId);
        this.scrollToTop();
    }
    async getReservation(resId){
        this.loaderFlag = true;
        this.reservationObj = await getEmergencyReservation(resId);
        this.loaderFlag = false;
    }
    async confirmFun(id){
        this.loaderFlag = true;
        let res = await acceptEmergencyReservation(id);
        this.loaderFlag = false;
        if(res){
            this.$fire({
                title: "SUCCESS!",
                text: "This reservation confirmed",
                type: "success",
                timer: 2000
            })
            this.$router.push('/emergency');
            this.$emit('updateEmergencyList');
        }
    }
    updateDetailsFun(){
        this.getReservation(this.resId);
    }
    async declineEmergencyReservation(){
        this.loaderFlag = true;
        let res = await declineEmergency(this.resId);
        this.loaderFlag = false;
        if(res){
            this.$router.push('/emergency');
            this.$emit('updateEmergencyList');
        }
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
.block h5 i{
    color: var(--main-green);
    margin-right: 10px;
    margin-left: 10px;
}
.phone-icon{
    transform: rotate(90deg);
}
</style>