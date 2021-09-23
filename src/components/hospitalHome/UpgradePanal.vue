<template>
    <div class="upgrade-panal-container" :class="{'upgrade-ar' : $t('nav.home') === 'الرئيسية'}">
        <div class="upgrade-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 83.933 83.933">
                <g id="upgrade_icon_" data-name="upgrade icon " transform="translate(0.001 0)">
                    <path id="Path_659" data-name="Path 659" d="M47.946,83.933H35.986L31.173,73.769l-4.061-1.684L16.521,75.87,8.062,67.411,11.847,56.82,10.163,52.76,0,47.947V35.986l10.164-4.813,1.684-4.061L8.062,16.522l8.459-8.459,10.6,3.788,4.052-1.679L35.986,0H47.946l4.816,10.171,4.052,1.679,10.6-3.788,8.459,8.459L72.085,27.113l1.684,4.061,10.164,4.813V47.947L73.769,52.76,72.085,56.82,75.87,67.411,67.411,75.87,56.82,72.085l-4.061,1.684Zm0,0" fill="#fff"/>
                    <path id="Path_660" data-name="Path 660" d="M157.146,130.8H136.163v-18.36H125.215l21.44-25.012,21.44,25.012H157.146Zm0,0" transform="translate(-104.688 -73.094)" fill="#ff9100"/>
                    <g id="Group_312" data-name="Group 312" transform="translate(31.475 62.95)">
                        <path id="Path_661" data-name="Path 661" d="M288,384h5.246v5.246H288Zm0,0" transform="translate(-272.263 -384)" fill="#ff9100"/>
                        <path id="Path_662" data-name="Path 662" d="M192,384h5.246v5.246H192Zm0,0" transform="translate(-192 -384)" fill="#ff9100"/>
                    </g>
                </g>
            </svg>
        </div>
        <div class="upgrade-panal-info">
            <h4>{{ $t("hospital_home.get_better") }}</h4>
            <h5>{{ $t("hospital_home.upgrade_msg") }}</h5>
        </div>
        <div class="upgrade-btn">
            <button>{{ $t("hospital_home.upgrade") }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {

    },
})
export default class UpgradePanal extends Vue {
  
}
</script>

<style scoped>
.upgrade-panal-container{
    width: 98%;
    height: 85px;
    background: rgba(151, 209, 176, 1);
    border-radius: var(--md-radius);
    margin: auto;
    padding: 10px 50px;
    margin-bottom: 35px;
}
.upgrade-icon{
    float: left;
    margin-right: 3%;
}
.upgrade-panal-info{
    float: left;
}
.upgrade-panal-info h4,h5{
    margin: 10px 0px;
    color: var(--font-navy);
}
.upgrade-btn button{
    padding: 10px 20px;
    background: rgba(255, 145, 0, 1);
    color: #fff;
    border-radius: var(--sm-radius);
    outline: none;
    cursor: pointer;
    border: none;
    float: right;
    margin-top: 15px;
}
.upgrade-btn button:hover{
    opacity: 0.8;
}
.upgrade-ar{
    direction: rtl;
    line-height: 1.2;
}
</style>