<template>
    <div :class="'section-appointement-container ' + slidePanal">
        <div class="section-appointement-head">
            <h4>
                <i @click="closePanal()" class="fas fa-chevron-left"></i> 
                Cancer Section
            </h4>
            <div class="section-icon">
                <img src="@/assets/images/services/cardiogram.png" alt="">
            </div>
        </div>
        <div class="section-body">
            <div class="date-container">
                <h5>Date</h5>
                <span>Saturday</span>
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
            </div>
            <div class="time-container">
                <h5>Time</h5>
                <div class="from-time">
                    <span class="time-label">From</span>
                    <vue-timepicker format="hh:mm A" placeholder="From" v-model="FromTime"></vue-timepicker>
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
                    <vue-timepicker format="hh:mm A" placeholder="To" v-model="ToTime"></vue-timepicker>
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
                <span>Price</span>
                <label for="price">EGP</label>
                <input type="text" id="price" v-model="price">
            </div>
            <div class="save-btn">
                <button>Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import VueTimepicker from 'vue2-timepicker';
@Component({
    components: {
        VueTimepicker,
    },
})
export default class SectionAppointement extends Vue {
    week = [0,1,2,3,4,5,6];
    toggleToPmFrom = '';
    toggleToPmTo = '';
    slidePanal = '';

    selectAmFrom(){
        this.toggleToPmFrom = '';
    }

    selectPmFrom(){
        this.toggleToPmFrom = 'move-to-center';
    }

    selectAmTo(){
        this.toggleToPmTo = '';
    }

    selectPmTo(){
        this.toggleToPmTo = 'move-to-center';
    }
    openSlidePanal(){
        this.slidePanal = 'open-slide-animate';
    }
    closePanal(){
        this.slidePanal = '';
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
</style>