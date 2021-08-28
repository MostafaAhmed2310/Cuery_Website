<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="sections-body">
            <div class="cover-img">
                <img class="profile-cover" src="@/assets/images/profile-cover.png" alt="">
                <h2>
                    <router-link to="/sections">
                        <i class="fas fa-chevron-left"></i> 
                    </router-link>
                    Room Section
                </h2>
                <img src="@/assets/images/sectionIcons/rooms.png" alt="" class="calendar">
            </div>
            <div class="sections-inputs-body">
                <div class="right-side">
                    <button @click="openSectionPanal()" class="edit-btn"><i class="fas fa-pen"></i>Edit Your Schedule</button>
                    <button class="delete-btn"><i class="fas fa-trash"></i>Delete Section</button>
                </div>
                <div class="left-side">
                    <h4>Previous Appointments</h4>
                    <div class="appointment-body">
                        <div class="item" v-for="day in days" :key="day">
                            <div class="day-square">Mon</div>
                            <span class="time-body">From 6:30am</span>
                            <span class="time-body">To 6:30am</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-panal">
                <SectionAppointement ref="openSlidePanal"/>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import SectionAppointement from '@/components/sections/SectionAppointement.vue';

@Component({
    components: {
        DoubleBounce,
        SectionAppointement,
    },
})
export default class SectionDetails extends Vue {
    loaderFlag = false;
    days = [0,1,2,3];
    async openSectionPanal(){       
        this.$refs.openSlidePanal.openSlidePanal();
    }
    async mounted(){

    }
}
</script>

<style scoped>
.cover-img{
    position: relative;
}
.cover-img .profile-cover{
    width: 100%;
}
.cover-img h2{
    position: absolute;
    bottom: 25%;
    left: 10%;
    color: var(--font-navy);
}
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
.sections-inputs-body{
    width: 85%;
    margin: auto;
    margin-top: 20px;
}
.right-side{
    float: right;
    width: 25%;
    text-align: center;
}
.right-side img{
    width: 100%;
}
.left-side{
    width: 70%;
    float: left;
}
.section-items .item{
    width: 230px;
    height: 70px;
    border-radius: 5px;
    background: rgba(241, 250, 245, 1);
    overflow: hidden;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    padding: 20px;
}
.section-item-img{
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 10px;
}
.section-item-img img{
    width: 100%;
    height: 100%;
}
.item span{
    line-height: 2;
    color: var(--font-navy);
}
.add-section-btn{
    position: absolute;
    bottom: 20%;
}
.add-section-btn button{
    padding: 10px 15px;
    background: var(--main-green);
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-right: 20px;
}
.add-section-btn button:hover{
    opacity: 0.8;
}
.add-section-btn button i{
    margin-right: 10px;
}
.calendar{
    position: absolute;
    bottom: 60px;
    right: 190px;
}
.right-side button{
    display: block;
    margin-bottom: 25px !important;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    color: #fff;
    border: none;
    margin: auto;
}
.right-side button:hover{
    opacity: 0.8;
}
.right-side .edit-btn{
    background: var(--main-green);
    padding: 10px 35px;
}
.right-side .delete-btn{
    background: var(--alert-color);
    padding: 10px 25px;
}
.right-side i{
    margin-right: 10px;
}
.day-square{
    background: var(--font-navy);
    color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 3px;
    text-align: center;
    line-height: 3.6;
    float: left;
    margin-right: 10px;
}
.item{
    overflow: hidden;
    display: block;
    margin-bottom: 20px;
}
.time-body{
    display: block;
    font-size: 12px;
    line-height: 1.5 !important;
}
.time-body:nth-of-type(1){
    margin-top: 10px;
}
.left-side h4{
    color: var(--font-navy);
}
</style>
