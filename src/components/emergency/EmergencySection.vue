<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="sections-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>
                    <router-link to="/emergency">
                        <i class="fas fa-chevron-left"></i> 
                    </router-link>
                    Emergency
                </h2>
                <div class="section-btns">
                    <router-link to="/add-emergency-section">
                        <button class="add-section"><i class="fas fa-plus-circle"></i>Add New Section</button>
                    </router-link>
                </div>
            </div>
            <div class="sections-inputs-body">
                <div class="right-side">
                    <img src="@/assets/images/section-img.png" alt="">
                </div>
                <div class="left-side">
                    <div class="section-items" v-for="emergency in emergencySections" :key="emergency">
                        <router-link :to="'/emergency-section-details/' + emergency.id">
                            <div class="item">
                                <div class="section-item-img">
                                    <Energy v-if="emergency.icon_id == 4"/>
                                    <Ambulance v-if="emergency.icon_id == 1"/>
                                    <Oxygen v-if="emergency.icon_id == 2"/>
                                    <Visit v-if="emergency.icon_id == 3"/>
                                </div>
                                <span>{{emergency.service_title}}</span>
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
import {getMyServices} from '@/endpoints/emergency';
import Energy from '@/assets/icons/Energy.vue';
import Ambulance from '@/assets/icons/Ambulance.vue';
import Oxygen from '@/assets/icons/Oxygen.vue';
import Visit from '@/assets/icons/Visit.vue'
@Component({
    components: {
        DoubleBounce,
        Energy,
        Ambulance,
        Oxygen,
        Visit,
    },
})
export default class EmergencySection extends Vue {
    loaderFlag = false;
    emergencySections = [];
    async getMySections(){
        this.loaderFlag = true;
        this.emergencySections = await getMyServices();
        this.loaderFlag = false;
    }
    mounted(){
        this.getMySections()
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
    overflow: hidden;
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
    margin-right: 20px;
    margin-top: -5px;
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
