<template>
    <div class="footer-container">
        <div class="footer-body">
            <div class="logo-body">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="footer-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos voluptates enim esse tempora eaque explicabo ut praesentium dolorum! Nam sequi doloribus dolore dolorem</p>
                <span><i class="fab fa-facebook-f"></i></span>
                <span><i class="fab fa-instagram"></i></span>
                <span><i class="fab fa-twitter"></i></span>
            </div>
            <div class="footer-links">
                <span>{{ $t("nav.about") }}</span>
                <span>{{ $t("nav.medical_team") }}</span>
                <span>{{ $t("footer.careers") }}</span>
            </div>
            <div class="footer-help">
                <p>{{ $t("footer.are_you_a_patient") }}</p>
                <span>{{ $t("footer.join_our_patient_app") }}</span>
            </div>
            <div class="footer-help">
                <p>{{ $t("footer.need_help") }}</p>
                <router-link to="/contact_us"><span> {{ $t("nav.contact_us") }}</span></router-link>
                <span>{{ $t("footer.privacy_policy") }}</span>
                <span>{{ $t("footer.terms") }}</span>
                <span>{{ $t("footer.patients_privacy_policy") }}</span>
            </div>
            <div class="footer-apps">
                <div>
                    <img src="@/assets/images/google-play.png" alt="">
                </div>
                <div>
                    <img src="@/assets/images/app-store.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
})
export default class Footer extends Vue {
  
}
</script>

<style scoped>
.footer-container{
    background: var(--main-green);
    padding: 30px 65px;
    color: #fff;
    overflow: hidden;
    clear: both;
    display: block;
}
.footer-info span{
    width: 25px;
    height: 25px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    background: #fff;
    line-height: 1.8;
    color: var(--main-green);
    margin-right: 20px;
    cursor: pointer;
}
.footer-info{
    width: 350px;
    float: left;
    margin-right: 5%;
}
.footer-links{
    width: 100px;
    float: left;
    margin-right: 5%;
}
.footer-links span{
    display: block;
    margin-top: 18px;
}
.footer-links span:hover{
    cursor: pointer;
    text-decoration: underline;
}
.footer-help{
    width: auto;
    float: left;
    margin-right: 5%;
}
.footer-help p{
    font-size: 23px;
    margin: 11px 0px;
}
.footer-help span{
    display: block;
    margin-bottom: 18px;
}
.footer-help span:hover{
    cursor: pointer;
    text-decoration: underline;
}
.footer-help a{
    color: #fff;
}
.footer-apps{
    width: auto;
    float: left;
    margin-top: 5%;
}
.footer-apps div{
    width: 150px;
    cursor: pointer;
}
.footer-apps div img{
    width: 100%;
}
</style>