<template>
    <div class="welcome-panal-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="panal-profile-img">
            <img :src="BaseUrl+imagePath" alt="" v-if="imagePath">
            <i class="fas fa fa-user-circle" v-if="imagePath == null || !imagePath"></i>
        </div>
        <div class="welcome-panal-info">
            <h3>{{ $t("hospital_home.hi") }} " {{userName}} "</h3>
            <h4>{{ $t("hospital_home.welcome") }}</h4>
            <span>{{ $t("hospital_home.welcome_msg") }}</span>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {getUserInfo} from '@/endpoints/user';
import {BaseUrl} from '@/app.config';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class WelcomePanal extends Vue {
    userName = '';
    imagePath = '';
    BaseUrl = BaseUrl;
    loaderFlag = false;
    async getInfo(){
        this.loaderFlag = true;
        let res = await getUserInfo();
        this.userName = res.name;
        this.imagePath = res.image_path;
        this.loaderFlag = false;
    }
    mounted() {
        this.getInfo();
    }
}
</script>

<style scoped>
.welcome-panal-container{
    width: 100%;
    height: 180px;
    border-radius: var(--md-radius);
    background-image: url('../../assets/images/welcome-img.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 25px 50px;
    color: var(--font-navy);
    margin-bottom: 30px;
}
.panal-profile-img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: #fff;
    background: var(--main-green);
    float: left;
    margin-right: 2%;
    text-align: center;
    font-size: 48px;
    line-height: 1.5;
    margin-top: 20px;
    overflow: hidden;
}
.panal-profile-img img{
    width: 100%;
    height: 100%;
}
.welcome-panal-info{
    float: right;
    width: 85%;
}
.welcome-panal-info h3,h4{
    margin: 10px 0px;
}
.welcome-panal-info span{
    display: block;
    width: 70%;
    font-size: 13px;
}
</style>