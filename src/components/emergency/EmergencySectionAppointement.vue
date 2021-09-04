<template>
    <div :class="'section-appointement-container ' + slidePanal">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="section-appointement-head">
            <h4>
                <i @click="closePanal()" class="fas fa-chevron-left"></i> 
                {{ selectedSection.service_title }}
            </h4>
            <div class="section-icon">
                <Energy v-if="selectedSection.icon_id == 4"/>
                <Ambulance v-if="selectedSection.icon_id == 1"/>
                <Oxygen v-if="selectedSection.icon_id == 2"/>
                <Visit v-if="selectedSection.icon_id == 3"/>
            </div>
        </div>
        <div class="section-body">
            <div class="date-container">
                <h5>Date</h5>
                <span :class="activeDay1"  @click="addDay(1)">Saturday</span>
                <span :class="activeDay2"  @click="addDay(2)">Sunday</span>
                <span :class="activeDay3"  @click="addDay(3)">Monday</span>
                <span :class="activeDay4"  @click="addDay(4)">Tuesday</span>
                <span :class="activeDay5"  @click="addDay(5)">Wednesday</span>
                <span :class="activeDay6"  @click="addDay(6)">Thursday</span>
                <span :class="activeDay7"  @click="addDay(7)">Friday</span>
            </div>
            <div class="time-container">
                <h5>Time</h5>
                <div class="from-time">
                    <span class="time-label">From</span>
                    <vue-timepicker @change="getFromTime" format="hh:mm A" placeholder="From" v-model="FromTime"></vue-timepicker>
                    <div class="filter-bar">
                        <div class="filter-btns">
                            <span @click="selectAmFrom()">AM</span>
                            <span @click="selectPmFrom()">PM</span>
                            <span :class="'toggle-active '+toggleToPmFrom"></span>
                        </div>
                    </div>
                </div>
                <div class="to-time">
                    <span class="time-label">To</span>
                    <vue-timepicker @change="getToTime" format="hh:mm A" placeholder="To" v-model="ToTime"></vue-timepicker>
                    <div class="filter-bar">
                        <div class="filter-btns">
                            <span @click="selectAmTo()">AM</span>
                            <span @click="selectPmTo()">PM</span>
                            <span :class="'toggle-active '+toggleToPmTo"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="price-container">
                <span>Time required</span>
                <label for="price">Mins</label>
                <input type="text" id="price" v-model="min">
            </div>
            <div class="price-container">
                <span>Price</span>
                <label for="price">EGP</label>
                <input type="text" id="price" v-model="price">
            </div>
            <div class="save-btn">
                <button @click="addDetails()">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import VueTimepicker from 'vue2-timepicker';
import Energy from '@/assets/icons/Energy.vue';
import Ambulance from '@/assets/icons/Ambulance.vue';
import Oxygen from '@/assets/icons/Oxygen.vue';
import Visit from '@/assets/icons/Visit.vue'
import {addDetailsToService} from '@/endpoints/emergency';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        VueTimepicker,
        Energy,
        Ambulance,
        Oxygen,
        Visit,
        DoubleBounce
    },
})
export default class EmergencySectionAppointement extends Vue {
    week = [1,2,3,4,5,6,7];
    toggleToPmFrom = '';
    toggleToPmTo = '';
    slidePanal = '';
    selectedSection = {};
    userSectionId = '';
    daysList = [];
    price = '';
    min = '';
    FromTime = {};
    ToTime = {};
    activeDay1 = '';
    activeDay2 = '';
    activeDay3 = '';
    activeDay4 = '';
    activeDay5 = '';
    activeDay6= '';
    activeDay7 = '';
    loaderFlag = false;
    addDay(day){
        this.daysList.push(day)
        if(day == 1){
            this.activeDay1 = 'active-day';
        }
        if(day == 2){
            this.activeDay2 = 'active-day';
        }
        if(day == 3){
            this.activeDay3 = 'active-day';
        }
        if(day == 4){
            this.activeDay4 = 'active-day';
        }
        if(day == 5){
            this.activeDay5 = 'active-day';
        }
        if(day == 6){
            this.activeDay6 = 'active-day';
        }
        if(day == 7){
            this.activeDay7 = 'active-day';
        }
    }
    selectAmFrom(){
        this.toggleToPmFrom = '';
        this.FromTime.A = 'AM'
    }
    selectPmFrom(){
        this.toggleToPmFrom = 'move-to-center';
        this.FromTime.A = 'PM'
    }
    selectAmTo(){
        this.toggleToPmTo = '';
        this.ToTime.A = 'AM'
    }
    selectPmTo(){
        this.toggleToPmTo = 'move-to-center';
        this.ToTime.A = 'PM'
    }
    openSlidePanal(selectedSection, userSectionId){
        this.userSectionId = userSectionId;
        this.selectedSection = selectedSection;
        this.slidePanal = 'open-slide-animate';
    }
    getFromTime(){
        var amOrPm = this.FromTime.A
        if (amOrPm == 'PM'){
            this.selectPmFrom()
        }else if (amOrPm == 'AM'){
            this.selectAmFrom()
        }
    }
    getToTime(){
        var amOrPm = this.ToTime.A
        if (amOrPm == 'PM'){
            this.selectPmTo()
        }else if (amOrPm == 'AM'){
            this.selectAmTo()
        }
    }
    closePanal(){
        this.slidePanal = '';
    }
    async addDetails(){
        let detailsObj = {
            from:this.FromTime.hh +':'+ this.FromTime.mm +' '+ this.FromTime.A,
            to:this.ToTime.hh +':'+ this.ToTime.mm +' '+ this.ToTime.A,
            waiting_time_in_mins:this.min,
            charge:this.price,
            days_array:this.daysList
        }
        this.loaderFlag = true
        let res = await addDetailsToService(this.userSectionId, detailsObj);
        this.loaderFlag = false;
        if(res){
            this.$router.push('/emergency-sections');
        }
    }
}
</script>

<style scoped>
.section-appointement-container{
    width: 30%;
    position: fixed;
    right: -30%;
    top: 0;
    bottom: 0;
    background: #fff;
    box-shadow: 1px 3px 6px 0px #ddd;
    z-index: 9999;
    padding: 10px 30px;
    color: var(--font-navy);
    opacity: 0;
    transition: 0.7s;
}
.open-slide-animate{
    right: 0;
    transition: 0.7s;
    opacity: 1;
}
.section-appointement-head i{
    cursor: pointer;
}
.section-appointement-container h4{
    text-align: center;
    margin: 15px 0px;
}
.section-appointement-container h5{
    margin: 10px 0px;
}
.section-appointement-container h4 i{
    margin-right: 20px;
}
.section-icon{
    width: 15%;
    margin: auto;
}
.section-icon img{
    width: 100%;
}
.date-container span{
    display: inline-block;
    padding: 10px 15px;
    background: #fff;
    border-radius: 3px;
    color: var(--font-navy);
    margin-right: 10px;
    border: 1px solid #fff;
    margin-bottom: 15px;
    box-shadow: 0px 1px 4px 0px #ddd;
    cursor: pointer;
}
.time-label{
    color: var(--font-navy);
    font-size: 12px;
    width: 50px;
    display: inline-block;
}
.time-container{
    margin-bottom: 30px;
}
.from-time{
    margin-bottom: 15px;
}
.filter-bar{
    width: 110px;
    background: var(--icon-navy);
    color: #fff;
    height: 35px;
    border-radius: 5px;
    font-size: 13px;
    float: right;
    line-height: 2.7;
    text-align: center;
    padding: 0px 30px;
    cursor: pointer;
    position: relative;
}
.filter-bar span{
    z-index: 10;
}
.filter-bar span:nth-of-type(1){
    position: absolute;
    left: 20px;
}

.filter-bar span:nth-of-type(2){
    position: absolute;
    right: 20px;
}
.toggle-active{
    position: absolute;
    background: var(--main-green);
    width: 55px;
    height: 35px;
    border-radius: 5px;
    left: 0;
    z-index: 5 !important;
    transition: 0.7s;
}
.move-to-center{
    transform: translateX(54px);
    transition: 0.7s;
}
.price-container{
    margin-bottom: 20px;
}
.price-container span{
    width: 155px;
    display: inline-block;
    font-weight: bold;
}
.price-container label{
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
    color: var(--main-green);
    width: 35px;
    display: inline-block;
}
.price-container input{
    width: 75px;
    height: 35px;
    outline: var(--main-green);
    border: none;
    border-radius: 5px;
    box-shadow: 0px 1px 4px 0px #ddd;
    padding: 0px 20px;
}
.save-btn{
    clear: both;
    display: block;
    overflow: hidden;
    margin-top: 15px;
    text-align: center;
}
.save-btn button{
    width: 80%;
    height: 45px;
    background: var(--main-green);
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: none;
    margin: auto;
}
.save-btn button:hover{
    opacity: 0.8;
}
.active-day{
    border: 1px solid var(--main-green) !important;
}
</style>