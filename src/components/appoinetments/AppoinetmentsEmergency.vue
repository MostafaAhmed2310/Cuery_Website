<template>
    <div class="appoinetments-list-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="appoinetments-item" v-for="item in emergencyItems" :key="item">
            <router-link :to="'/emergency-appoinetment-details/' + item.id">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <div class="appoinetments-info">
                    <h4>{{item.name}}</h4>
                    <span>{{item.service_title}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { getEmergencyAppoinetmentsList, finishAppoinetment } from '@/endpoints/appoinetments';
import {DoubleBounce} from 'vue-loading-spinner';

@Component({
    components: {
        DoubleBounce,
    },
})
export default class AppoinetmentsEmergency extends Vue {
    emergencyItems=[];
    loaderFlag = false;
    length = 0;
    async getEmergencyAppoinetmentsList(){
        this.loaderFlag = true;
        this.emergencyItems = await getEmergencyAppoinetmentsList();
        this.length = this.emergencyItems.length;
        this.checkArrayLength();
        this.loaderFlag = false;
    }
    checkArrayLength(){
        this.$emit('updateEmergencyLength', this.length);
    }

    mounted(){
        this.getEmergencyAppoinetmentsList();
    }
}
</script>

<style scoped>
.appoinetments-list-container{
    overflow: auto;
    position: relative;
    width: 100%;
    padding: 30px 0px;
    height: 80vh;
}
.appoinetments-item{
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
.appoinetments-info{
    float: right;
    width: 70%;
    color: var(--font-navy);
}
.appoinetments-info h4{
    margin: 0px 0px 5px 0px;
    font-size: 15px;
}
.appoinetments-info span{
    font-size: 11px;
}
.appoinetments-btns button{
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 6%;
    border-radius: var(--sm-radius);
    padding: 5px 10px;
    margin-top: 10px;
    color: #fff;
    background: var(--font-navy);
    float: right;
}
.appoinetments-btns button:hover{
    opacity: 0.8;
}
</style>