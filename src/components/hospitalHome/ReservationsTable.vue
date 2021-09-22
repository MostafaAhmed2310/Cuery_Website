<template>
    <div class="table-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="popup-overlay" v-if="declinePopup">
            <DeclinePopup @updateLatestReservations="updateLatestReservations" @closePopup="closePopup" ref="updateId"/>
        </div>
        <div class="table-title">
            <h4>{{ $t("hospital_home.latest_reservations") }}</h4>
        </div>
        <div v-if="tableArr.length == 0" class="table-body placeholder">
            <Calendar/>
            <span>{{ $t("hospital_home.no_reservations_found") }}</span>
        </div>
        <div v-if="tableArr" class="table-body">
            <div class="table-row" v-for="row in tableArr" :key="row">
                <div class="profile-img">
                    <img :src="BaseUrl + row.image_path" alt="" v-if="row.image_path">
                    <i class="fas fa fa-user-circle" v-if="row.image_path == null"></i>
                </div>
                <span class="patient-name">{{ row.name}}</span>
                <span class="section-name">{{ row.section_title}}</span>
                <router-link :to="'/reservations/'+row.id">
                    <span class="see-more">{{ $t("more") }}</span>
                </router-link>
                <div class="table-btns">
                    <button class="green-btn" @click="ConfirmReservation(row.id)">{{ $t("reservations.confirm") }}</button>
                    <button class="red-btn" @click="openDeclinePopup(row.id)">{{ $t("reservations.decline") }}</button>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { getlatestReservations, confirmReservation} from '@/endpoints/reservations';
import Calendar from '@/assets/icons/Calendar.vue';
import {DoubleBounce} from 'vue-loading-spinner';
import {BaseUrl} from '@/app.config';
import DeclinePopup from '@/components/appoinetments/DeclinePopup.vue';
@Component({
    components: {
        Calendar,
        DoubleBounce,
        DeclinePopup
    },
})
export default class ReservationsTable extends Vue {
    tableArr = [];
    loaderFlag = false;
    BaseUrl = BaseUrl;
    declinePopup = false;
    async getlatestReservations(){
        this.tableArr = await getlatestReservations();
    }
    async ConfirmReservation(reservation_id){
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
            this.getlatestReservations();
        }
    }
    updateLatestReservations(){
        this.getlatestReservations();
    }
    openDeclinePopup(declineId){
        this.declinePopup = true;
        setTimeout(() => {
            this.$refs.updateId.updateDeclineId(declineId);
        }, 300);
    }
    closePopup(){
        this.declinePopup = false;
    }
    mounted(){
        this.getlatestReservations()
    }
}
</script>

<style scoped>
.table-container{
    background: rgba(241, 250, 245, 1);
    border-radius: var(--md-radius);
    padding: 30px;
    clear: both;
    width: 98%;
    margin: auto;
    margin-bottom: 30px;
    overflow: hidden;
}
.table-title h4{
    margin: 15px 0px;
    color: var(--font-navy)
}
.profile-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: var(--main-green);
    float: left;
    margin-right: 2%;
    text-align: center;
    font-size: 27px;
    line-height: 1.5;
    margin-top: 5px;
    overflow: hidden;
}
.profile-img img{
    width: 100%;
    height: 100%;
}
.table-row{
    overflow: hidden;
    line-height: 3;
}
.patient-name{
    width: 150px;
    display: inline-block;
    font-size: 14px;
    color: var(--font-navy);
    font-weight: bold;
}
.section-name{
    width: 150px;
    display: inline-block;
    font-size: 12px;
    color: var(--font-navy);
}
.see-more{
    color: var(--main-green);
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}
.table-btns{
    float: right;
}
.table-btns button{
    padding: 10px 15px;
    border-radius: var(--sm-radius);
    outline: none;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
}
.table-btns button:hover{
    opacity: 0.8;
    transition: 0.6s;
}
.green-btn{
    background: rgba(48, 163, 98, 1);
    margin-right: 30px;
}
.red-btn{
    background: rgba(197, 58, 58, 1);
}
.placeholder{
    text-align: center;
    color: var(--font-navy);
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