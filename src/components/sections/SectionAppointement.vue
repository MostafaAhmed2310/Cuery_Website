<template>
    <div :class="'section-appointement-container ' + slidePanal">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="section-appointement-head">
            <h4 v-if="$t('nav.home') === 'الرئيسية'">
                <i @click="closePanal()" class="fas fa-chevron-left"></i> 
                {{ selectedSection.section_title_ar }}
            </h4>
            <h4 v-if="$t('nav.home') === 'Home'">
                <i @click="closePanal()" class="fas fa-chevron-left"></i> 
                {{ selectedSection.section_title }}
            </h4>
            <div class="section-icon">
                <img v-if="selectedSection.icon_id == 1" src="@/assets/images/sectionIcons/blood.png" alt="">
                <img v-if="selectedSection.icon_id == 5" src="@/assets/images/sectionIcons/brain.png" alt="">
                <img v-if="selectedSection.icon_id == 2" src="@/assets/images/sectionIcons/cancer.png" alt="">
                <img v-if="selectedSection.icon_id == 3" src="@/assets/images/sectionIcons/cardiogram.png" alt="">
                <img v-if="selectedSection.icon_id == 6" src="@/assets/images/sectionIcons/eye.png" alt="">
                <img v-if="selectedSection.icon_id == 7 || selectedSection.icon_id == 0" src="@/assets/images/sectionIcons/firstaid.png" alt="">
                <img v-if="selectedSection.icon_id == 8" src="@/assets/images/sectionIcons/lungs.png" alt="">
                <img v-if="selectedSection.icon_id == 10" src="@/assets/images/sectionIcons/rooms.png" alt="">
                <img v-if="selectedSection.icon_id == 9" src="@/assets/images/sectionIcons/stomach.png" alt="">
                <img v-if="selectedSection.icon_id == 11" src="@/assets/images/sectionIcons/teeth.png" alt="">
                <img v-if="selectedSection.icon_id == 12" src="@/assets/images/sectionIcons/women.png" alt="">
                <img v-if="selectedSection.icon_id == 4" src="@/assets/images/sectionIcons/x-ray.png" alt="">
            </div>
        </div>
        <div class="section-body">
            <div class="date-container">
                <h5>{{ $t("sections.date") }}</h5>
                <span :class="activeDay1"  @click="addOrDeleteDay(1)">{{ $t("sections.saturday") }}</span>
                <span :class="activeDay2"  @click="addOrDeleteDay(2)">{{ $t("sections.sunday") }}</span>
                <span :class="activeDay3"  @click="addOrDeleteDay(3)">{{ $t("sections.monday") }}</span>
                <span :class="activeDay4"  @click="addOrDeleteDay(4)">{{ $t("sections.tuesday") }}</span>
                <span :class="activeDay5"  @click="addOrDeleteDay(5)">{{ $t("sections.wednesday") }}</span>
                <span :class="activeDay6"  @click="addOrDeleteDay(6)">{{ $t("sections.thursday") }}</span>
                <span :class="activeDay7"  @click="addOrDeleteDay(7)">{{ $t("sections.friday") }}</span>
            </div>
            <div class="time-container">
                <h5>{{ $t("sections.time") }}</h5>
                <div class="from-time">
                    <span class="time-label">{{ $t("sections.from") }}</span>
                    <vue-timepicker @change="getFromTime" format="hh:mm A" :placeholder='$t("sections.from")' v-model="FromTime"></vue-timepicker>
                    <div class="filter-bar">
                        <div class="filter-btns">
                            <span @click="selectAmFrom()">{{ $t("sections.am") }}</span>
                            <span @click="selectPmFrom()">{{ $t("sections.pm") }}</span>
                            <span :class="'toggle-active '+toggleToPmFrom"></span>
                        </div>
                    </div>
                </div>
                <div class="to-time">
                    <span class="time-label">{{ $t("sections.to") }}</span>
                    <vue-timepicker @change="getToTime" format="hh:mm A" :placeholder='$t("sections.to")' v-model="ToTime"></vue-timepicker>
                    <div class="filter-bar">
                        <div class="filter-btns">
                            <span @click="selectAmTo()">{{ $t("sections.am") }}</span>
                            <span @click="selectPmTo()">{{ $t("sections.pm") }}</span>
                            <span :class="'toggle-active '+toggleToPmTo"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="price-container">
                <span>{{ $t("sections.price") }}</span>
                <label for="price">{{ $t("sections.egp") }}</label>
                <input type="text" id="price" v-model="price">
            </div>
            <div class="save-btn">
                <button @click="addDetails()">{{ $t("sections.save") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import VueTimepicker from 'vue2-timepicker';
import {addDetailsToSection} from '@/endpoints/sections';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        VueTimepicker,
        DoubleBounce
    },
})
export default class SectionAppointement extends Vue {
    week = [1,2,3,4,5,6,7];
    toggleToPmFrom = '';
    toggleToPmTo = '';
    slidePanal = '';
    selectedSection = {};
    userSectionId = '';
    daysList = [];
    price = '';
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
    addOrDeleteDay(day){
        var flag = this.daysList.includes(day);
        if (flag){
            const i = this.daysList.indexOf(day);
            if(i > -1){
                this.daysList.splice(i, 1);
                this.removeActiveFromDays(day);
            }
        }else{
            this.daysList.push(day);
            this.addActiveToDays(day);
        }
    }
    addActiveToDays(day){
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
    removeActiveFromDays(day){
        if(day == 1){
            this.activeDay1 = '';
        }
        if(day == 2){
            this.activeDay2 = '';
        }
        if(day == 3){
            this.activeDay3 = '';
        }
        if(day == 4){
            this.activeDay4 = '';
        }
        if(day == 5){
            this.activeDay5 = '';
        }
        if(day == 6){
            this.activeDay6 = '';
        }
        if(day == 7){
            this.activeDay7 = '';
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
    openSlidePanal(selectedSection, userSectionId, daysArr){
        this.userSectionId = userSectionId;
        this.selectedSection = selectedSection;
        if(this.$router.currentRoute.name == 'sectionDetails'){
            this.getOldData(daysArr);
        }
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
            charge:this.price,
            days_array:this.daysList
        }
        this.loaderFlag = true;
        let res = await addDetailsToSection(this.userSectionId, detailsObj);
        this.loaderFlag = false;
        if(res){
            this.$router.push('/sections')
        }
    }
    getOldData(daysArr){
        this.daysList = daysArr;
        for (let i = 0; i < this.daysList.length; i++) {
            const day = this.daysList[i];
            this.addActiveToDays(day);
        };
        this.price = this.selectedSection.charge;
        this.FromTime = {
            hh: this.selectedSection.from.slice(0,2),
            mm: this.selectedSection.from.slice(3,5),
            A: "AM"
        }
        this.ToTime = {
            hh: this.selectedSection.to.slice(0,2),
            mm: this.selectedSection.to.slice(3,5),
            A: "PM"
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
    padding: 20px 30px;
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
.price-container span{
    width: 100px;
    display: inline-block;
    font-weight: bold;
}
.price-container label{
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
    color: var(--main-green);
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
    margin-top: 30px;
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