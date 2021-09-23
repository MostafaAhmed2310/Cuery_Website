<template>
    <div class="table-container" :class="{'rtl' : $t('nav.home') === 'الرئيسية'}">
        <div class="table-title">
            <h4>{{ $t("hospital_home.nearest_appointements") }}</h4>
        </div>
        <div v-if="tableArr.length == 0" class="table-body placeholder">
            <AppoinetementsSVG/>
            <span>{{ $t("hospital_home.no_appointements_found") }}</span>
        </div>
        <div  v-if="tableArr" class="table-body">
            <div class="table-row" v-for="row in tableArr" :key="row">
                <div class="profile-img" :class="{'float-right img-margin-left' : $t('nav.home') === 'الرئيسية'}">
                    <img :src="BaseUrl+row.image_path" alt="" v-if="row.image_path">
                    <i class="fas fa fa-user-circle" v-if="row.image_path == null"></i>
                </div>
                <span class="patient-name">{{row.name}}</span>
                <span class="section-name">{{row.section_title}}</span>
                <router-link :to="'/normal-appoinetment-details/'+row.id">
                    <span class="see-more">{{ $t("more") }}</span>
                </router-link>
                <div class="table-btns" :class="{'float-left' : $t('nav.home') === 'الرئيسية'}">
                    <router-link :to="'/confirmation/'+row.id">
                        <button class="navy-btn">{{ $t("hospital_home.patient_arrived") }}</button>
                    </router-link>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getNearestAppointment} from '@/endpoints/appoinetments';
import {BaseUrl} from '@/app.config';
import AppoinetementsSVG from '@/assets/icons/AppoinetmentsSVG.vue';
@Component({
    components: {
        AppoinetementsSVG,
    },
})
export default class AppointementsTable extends Vue {
    tableArr:any[] = [];
    BaseUrl = BaseUrl;
    async getNearest(){
        this.tableArr = await getNearestAppointment();
    }
    mounted() {
        this.getNearest();
    }
}
</script>

<style scoped>
.table-container{
    background: rgba(241, 250, 245, 1);
    border-radius: var(--md-radius);
    padding: 30px;
    clear: both;
    width: 98%;
    margin: auto;
    overflow: hidden;
    margin-bottom: 30px;
}
.table-title h4{
    margin: 15px 0px;
    color: var(--font-navy)
}
.profile-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: var(--main-green);
    float: left;
    margin-right: 2%;
    text-align: center;
    font-size: 27px;
    line-height: 1.5;
    margin-top: 5px;
    overflow: hidden;
}
.profile-img img{
    width: 100%;
    height: 100%;
}
.table-row{
    overflow: hidden;
    line-height: 3;
}
.patient-name{
    width: 150px;
    display: inline-block;
    font-size: 14px;
    color: var(--font-navy);
    font-weight: bold;
}
.section-name{
    width: 150px;
    display: inline-block;
    font-size: 12px;
    color: var(--font-navy);
}
.see-more{
    color: var(--main-green);
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}
.table-btns{
    float: right;
}
.table-btns button{
    padding: 10px 15px;
    border-radius: var(--sm-radius);
    outline: none;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
}
.table-btns button:hover{
    opacity: 0.8;
    transition: 0.6s;
}
.navy-btn{
    background: var(--font-navy);
}
.placeholder{
    text-align: center;
    color: var(--font-navy);
}
</style>