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
                    Suggest New Section
                </h2>
            </div>
            <div class="sections-inputs-body">
                <div class="input-body">
                    <input type="text" v-model="sectionEn" placeholder="Write Section Name EN">
                </div>
                <div class="input-body">
                    <input type="text" v-model="sectionAr" placeholder="Write Section Name AR">
                </div>
                <div class="section-icons-body">
                    <h4>Select The Suggestion Icon </h4>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/blood.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/brain.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/cancer.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/cardiogram.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/teeth.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/eye.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/firstaid.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/lungs.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/x-ray.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/rooms.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/women.png" alt="">
                    </div>
                    <div class="section-icon">
                        <img src="@/assets/images/sectionIcons/stomach.png" alt="">
                    </div>
                </div>
                <div class="suggest-section-btn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';


@Component({
    components: {
        DoubleBounce,
        
    },
})
export default class SuggestSections extends Vue {
    loaderFlag = false;
    sectionEn = '';
    sectionAr = '';
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
.input-body{
    margin-bottom: 20px;
}
.input-body input{
    width: 300px;
    height: 45px;
    border: none;
    border-bottom: 1.5px solid var(--font-navy);
    outline: none;
    color: var(--font-navy);
}
.section-icon{
    width: 70px;
    height: 70px;
    border: 1px solid var(--main-green);
    border-radius: 5px;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    line-height: 7;
}
.section-icon:nth-of-type(10){
    line-height: 6;
}
.section-icon img{
    width: 80%;
    margin: auto;
}
.section-icons-body{
    margin-top: 40px;
    overflow: hidden;
    width: 575px;
}
.suggest-section-btn{
    clear: both;
    display: block;
    margin-bottom: 45px;
}
.suggest-section-btn button{
    width: 340px;
    height: 35px;
    background: var(--main-green);
    color: #fff;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    border: none;
}
.suggest-section-btn button:hover{
    opacity: 0.8;
}
</style>
