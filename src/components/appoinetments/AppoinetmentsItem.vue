<template>
    <div class="reservation-item-container">
        <div class="reservation-item">
            <div class="block">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <div class="reservation-info">
                    <h4>{{ reservationObj.name }}</h4>
                </div>
            </div>
            <div class="block">
                <h5><i class="fas fa fa-plus-square"></i>{{ reservationObj.section_title }}</h5>
                <h5><i class="phone-icon fas fa fa-phone"></i>{{ reservationObj.phone }}</h5>
                <h5><i class="fas fa-map-marker-alt"></i>15 Albert Al Awal . Smouha , Alexandria</h5>
            </div>
            <div class="block">
                <div class="left-btn">
                    <button>{{ reservationObj.Day }}</button>
                    <span>Request Time</span>
                    <span>{{ reservationObj.reservation_date }} {{ reservationObj.start_time }}:00</span>
                </div>
                <div class="right-btn">
                    <span>200</span><span>EGP</span>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="reservation-btns">
                <router-link :to="'/confirmation/'+ $route.params.id"><button class="arrived-btn">Arrived</button></router-link>
                <button class="decline-btn">Decline</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getReservation } from '@/endpoints/reservations';


@Component({
    components: {

    },
    
})
export default class AppoinetmentsItem extends Vue {
  
    reservationObj = {}
    resId =this.$route.params.id
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) {
        this.resId =this.$route.params.id
        this.getReservation(this.resId)
    }
    async getReservation(resId:any){
        this.reservationObj = await getReservation(resId);
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
    line-height: 2.5;
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
</style>