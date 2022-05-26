<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="sections-body">
            <div class="cover-img">
                <img :class="{'mirror-img' : $t('nav.home') === 'الرئيسية'}" src="@/assets/images/profile-cover.png" alt="">
                <h2 :class="{'rtl pages-title-ar' : $t('nav.home') === 'الرئيسية'}">
                    <router-link to="/hospital_home">
                        <i :class="{'rotate-icon' : $t('nav.home') === 'الرئيسية'}" class="fas fa-chevron-left"></i> 
                    </router-link>
                   {{ $t("sections.my_sections") }}
                </h2>
                <div class="section-btns" v-if="sections.length != 0" :class="{'actions-btns-ar' : $t('nav.home') === 'الرئيسية'}">
                    <router-link to="/add-section">
                        <button class="add-section"><i class="fas fa-plus-circle"></i>{{ $t("sections.add_new") }}</button>
                    </router-link>
                    <router-link to="/suggest-sections">
                        <button class="suggest-section"><i class="fas fa-plus-circle"></i>{{ $t("sections.suggest_section") }}</button>
                    </router-link>
                </div>
            </div>
            <div class="placeholder-body" v-if="sections.length == 0 && !loaderFlag">
                <PagePlaceholder/>
            </div>
            <div class="sections-inputs-body" v-if="sections.length != 0">
                <div class="right-side">
                    <img src="@/assets/images/section-img.png" alt="">
                </div>
                <div class="left-side">
                    <div class="section-items" v-for="section in sections" :key="section">
                        <router-link :to="'/section-details/' + section.id">
                            <div class="item">
                                <div v-if="section.is_verified == 'n' && titleHover == true && sectionId == section.id" class="pending-title">{{ $t("sections.not_verified") }}</div>
                                <i @mouseover="showTitle(section.id)" @mouseleave="hideTitle()" v-if="section.is_verified == 'n'" class="fas fa-exclamation-circle"></i>
                                <div class="section-item-img">
                                    <img v-if="section.icon_id == 1" src="@/assets/images/sectionIcons/blood.png" alt="">
                                    <img v-if="section.icon_id == 5" src="@/assets/images/sectionIcons/brain.png" alt="">
                                    <img v-if="section.icon_id == 2" src="@/assets/images/sectionIcons/cancer.png" alt="">
                                    <img v-if="section.icon_id == 3" src="@/assets/images/sectionIcons/cardiogram.png" alt="">
                                    <img v-if="section.icon_id == 6" src="@/assets/images/sectionIcons/eye.png" alt="">
                                    <img v-if="section.icon_id == 7 || section.icon_id == 0" src="@/assets/images/sectionIcons/firstaid.png" alt="">
                                    <img v-if="section.icon_id == 8" src="@/assets/images/sectionIcons/lungs.png" alt="">
                                    <img v-if="section.icon_id == 10" src="@/assets/images/sectionIcons/rooms.png" alt="">
                                    <img v-if="section.icon_id == 9" src="@/assets/images/sectionIcons/stomach.png" alt="">
                                    <img v-if="section.icon_id == 11" src="@/assets/images/sectionIcons/teeth.png" alt="">
                                    <img v-if="section.icon_id == 12" src="@/assets/images/sectionIcons/women.png" alt="">
                                    <img v-if="section.icon_id == 4" src="@/assets/images/sectionIcons/x-ray.png" alt="">
                                </div>
                                <span v-if="$i18n.locale == 'en'">{{section.section_title}}</span>
                                <span v-if="$i18n.locale == 'ar'">{{section.section_title_ar}}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import {getMySections} from '@/endpoints/sections';
import PagePlaceholder from '@/views/PagePlaceholder.vue';
@Component({
    components: {
        DoubleBounce,
        PagePlaceholder,
    },
})
export default class Sections extends Vue {
    loaderFlag = false;
    sections = [];
    titleHover = false;
    sectionId = '';
    async getMySections(){
        this.loaderFlag = true
        this.sections = await getMySections();
        this.loaderFlag = false
    }
    showTitle(id){
        this.sectionId = id
        this.titleHover = true;
    }
    hideTitle(){
        this.titleHover = false;
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted() {
        this.getMySections();
        this.scrollToTop();
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
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    padding: 20px;
    position: relative;
}
.section-items .item i{
    position: absolute;
    top: -10px;
    right: 10px;
    font-size: 20px;
    color: var(--alert-color);
    border: 3px solid var(--alert-color);
    border-radius: 50%;
    line-height: 1.2;
    width: 30px;
    height: 30px;
    text-align: center;
    cursor: pointer;
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
.section-btns{
    position: absolute;
    right: 100px;
    bottom: 70px;
}
.section-btns button{
    padding: 10px 15px;
    background: var(--font-navy);
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-right: 20px;
}
.section-btns button:hover{
    opacity: 0.8;
}
.section-btns button i{
    margin-right: 10px;
}
.pending-title{
    padding: 10px;
    background: var(--alert-color);
    color: #fff;
    border-radius: 3px;
    position: absolute;
    top: -55px;
    font-size: 11px;
    right: 15px;
}
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
</style>
