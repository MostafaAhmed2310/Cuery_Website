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
                    {{ $t("sections.suggest_section") }}
                </h2>
            </div>
            <div class="sections-inputs-body">
                <div class="input-body">
                    <input type="text" v-model="sectionEn" :placeholder='$t("sections.en_section_placeholder")'>
                    <span v-if="enSectionErr">{{ $t("sections.enter_en_section") }}n</span>
                </div>
                <div class="input-body">
                    <input type="text" v-model="sectionAr" :placeholder='$t("sections.ar_section_placeholder")'>
                    <span v-if="arSectionErr">{{ $t("sections.enter_ar_section") }}</span>
                </div>
                <div class="input-body">
                    <input type="text" v-model="description" :placeholder='$t("sections.desc_placeholder")'>
                    <span v-if="descriptionErr">{{ $t("sections.enter_desc") }}</span>
                </div>
                <div class="section-icons-body">
                    <h4> {{ $t("sections.select_icon") }} </h4>
                    <div :class="'section-icon '+ activeBorder1" @click="addIcon(1)">
                        <img src="@/assets/images/sectionIcons/blood.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder2" @click="addIcon(5)">
                        <img src="@/assets/images/sectionIcons/brain.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder3" @click="addIcon(2)">
                        <img src="@/assets/images/sectionIcons/cancer.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder4" @click="addIcon(3)">
                        <img src="@/assets/images/sectionIcons/cardiogram.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder5" @click="addIcon(11)">
                        <img src="@/assets/images/sectionIcons/teeth.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder6" @click="addIcon(6)">
                        <img src="@/assets/images/sectionIcons/eye.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder7" @click="addIcon(0)">
                        <img src="@/assets/images/sectionIcons/firstaid.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder8" @click="addIcon(8)">
                        <img src="@/assets/images/sectionIcons/lungs.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder9" @click="addIcon(4)">
                        <img src="@/assets/images/sectionIcons/x-ray.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder10" @click="addIcon(10)">
                        <img src="@/assets/images/sectionIcons/rooms.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder11" @click="addIcon(12)">
                        <img src="@/assets/images/sectionIcons/women.png" alt="">
                    </div>
                    <div :class="'section-icon '+ activeBorder12" @click="addIcon(9)">
                        <img src="@/assets/images/sectionIcons/stomach.png" alt="">
                    </div>
                    <span v-if="iconErr">{{ $t("sections.pls_select_icon") }}</span>
                </div>
                <div class="suggest-section-btn">
                    <button @click="suggestSection()">{{ $t("sections.submit") }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import {suggestSection} from '@/endpoints/sections';

@Component({
    components: {
        DoubleBounce,
    },
})
export default class SuggestSections extends Vue {
    loaderFlag = false;
    sectionEn = '';
    sectionAr = '';
    description = '';
    icon_id = '';
    enSectionErr = false;
    arSectionErr = false;
    descriptionErr = false;
    iconErr = false;
    activeBorder1 = '';
    activeBorder2 = '';
    activeBorder3 = '';
    activeBorder4 = '';
    activeBorder5 = '';
    activeBorder6 = '';
    activeBorder7 = '';
    activeBorder8 = '';
    activeBorder9 = '';
    activeBorder10 = '';
    activeBorder11 = '';
    activeBorder12 = '';
    addIcon(iconId){
        this.icon_id = iconId;
        if(iconId == 1){
            this.activeBorder1 = 'active-border';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 5){
            this.activeBorder1 = '';
            this.activeBorder2 = 'active-border';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 2){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = 'active-border';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 3){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = 'active-border';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 11){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = 'active-border';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 6){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = 'active-border';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 0){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = 'active-border';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 8){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = 'active-border';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 4){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = 'active-border';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 10){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = 'active-border';
            this.activeBorder11 = '';
            this.activeBorder12 = '';
        }else if(iconId == 12){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = 'active-border';
            this.activeBorder12 = '';
        }else if(iconId == 9){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
            this.activeBorder4 = '';
            this.activeBorder5 = '';
            this.activeBorder6 = '';
            this.activeBorder7 = '';
            this.activeBorder8 = '';
            this.activeBorder9 = '';
            this.activeBorder10 = '';
            this.activeBorder11 = '';
            this.activeBorder12 = 'active-border';
        }
    }
    async suggestSection() {
        if(this.sectionEn == '' || this.sectionEn.trim() == ''){
            this.enSectionErr = true
        }else{
            this.enSectionErr = false
        }
        if(this.sectionAr == '' || this.sectionAr.trim() == ''){
            this.arSectionErr = true
        }else{
            this.arSectionErr = false
        }
        if(this.description == '' || this.description.trim() == ''){
            this.descriptionErr = true
        }else{
            this.descriptionErr = false
        }
        if(this.icon_id == ''){
            this.iconErr = true
        }else{
            this.iconErr = false
        }
        if(this.enSectionErr == false && this.arSectionErr == false && this.descriptionErr == false && this.iconErr == false){
            let suggestObj = {
                section_title: this.sectionEn,
                section_title_ar: this.sectionAr,
                icon_id: this.icon_id,
                description: this.description
            };
            this.loaderFlag = true;
            let res = await suggestSection(suggestObj);
            this.loaderFlag = false;
            if(res){
                this.$router.push('/sections');
            }
        }
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
.input-body span{
    display: block;
    font-size: 11px;
    color: var(--alert-color);
    position: absolute;
    margin-top: 5px;
}
.section-icons-body span{
    display: block;
    font-size: 11px;
    color: var(--alert-color);
    overflow: hidden;
    clear: both;
    margin-bottom: 10px;
}
.active-border{
    border: 2px solid var(--font-navy) !important;
}
</style>
