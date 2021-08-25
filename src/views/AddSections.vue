<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="sections-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>
                    <router-link to="/sections">
                        <i class="fas fa-chevron-left"></i> 
                    </router-link>
                    Add New Section
                </h2>
            </div>
            <div class="sections-inputs-body">
                <div class="right-side">
                    <img src="@/assets/images/section-img.png" alt="">
                </div>
                <div class="left-side">
                    <multiselect v-model="mainArea" :options="options" label="main_title" track-by="main_title" :searchable="false"  :show-labels="false" placeholder="Select New Section"></multiselect>
                    <div class="add-section-btn">
                        <button @click="openSectionPanal()"><i class="fas fa-plus-circle"></i> Add Section</button>
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
import Multiselect from 'vue-multiselect';
import SectionAppointement from '@/components/sections/SectionAppointement.vue';
@Component({
    components: {
        DoubleBounce,
        Multiselect,
        SectionAppointement,
    },
})
export default class AddSections extends Vue {
    loaderFlag = false;
    options = [
        {
            id:1,
            main_title:"Sec1"
        },
        {
            id:2,
            main_title:"Sec2"
        },
        {
            id:3,
            main_title:"Sec3"
        },
        {
            id:4,
            main_title:"Sec4"
        },
        {
            id:5,
            main_title:"Sec5"
        },
    ];
    mainArea = '';


    openSectionPanal(){
        this.$refs.openSlidePanal.openSlidePanal();
    }
}
</script>

<style scoped>
.cover-img{
    position: relative;
}
.cover-img img{
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
    bottom: 35px;
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
</style>
