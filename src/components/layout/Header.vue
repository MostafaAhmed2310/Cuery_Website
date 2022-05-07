<template>
    <div class="header-container">
        <div class="nav-bar-body">
            <div class="logo-body" :class="{'float-right margin-logo' : $t('nav.home') === 'الرئيسية'}">
                <img class="logo-img" src="@/assets/logo.png"/>
            </div>
            <ul class="nav-bar-list" v-if="auth_state == false" :class="{'float-left rtl margin-ul' : $t('nav.home') === 'الرئيسية'}">
                <li><router-link to="/home" active-class="active">{{ $t("nav.home") }}</router-link></li>
                <li><router-link to="/medical_team" active-class="active">{{ $t("nav.medical_team") }}</router-link></li>
                <li><router-link to="/about_us" active-class="active">{{ $t("nav.about") }}</router-link></li>
                <li class="global-li" @click="moreMenu = !moreMenu">
                    <i class="fas fa fa-globe"></i>
                </li>
                <li class="login-btn"><router-link to="/login">{{ $t("nav.sign_in") }}</router-link></li>
                <div class="locale-switcher-static" v-if="openStaticLang">
                    <select v-model="$i18n.locale">
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </div>
            </ul>
            <ul class="nav-bar-list-hospital" v-if="auth_state == true" :class="{'float-left rtl margin-ul' : $t('nav.home') === 'الرئيسية'}">
                <li><router-link to="/hospital_home" active-class="active">{{ $t("nav.home") }}</router-link></li>
                <li><router-link to="/contact_us" active-class="active">{{ $t("nav.contact_us") }}</router-link></li>
                <li><router-link to="/reservation-history" active-class="active">{{ $t("nav.reservation_history") }}</router-link></li>
                <li>
                    <router-link to="/profile" active-class="active">
                        <i :class="{'margin-icon' : $t('nav.home') === 'الرئيسية'}" class="profile-icon far fa fa-user-circle"></i>
                        <span>{{ $t("nav.profile") }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/support" active-class="active">
                        <i :class="{'margin-icon' : $t('nav.home') === 'الرئيسية'}" class="profile-icon fas fa-headset"></i>
                        <span>{{ $t("nav.support") }}</span>
                    </router-link>
                </li>
                <li class="global-li" @click="moreMenu = !moreMenu">
                    <i class="fas fa fa-globe"></i>
                </li>
                <li @click="openNotificationPopup()">
                    <i class="fas fa fa-bell"></i>
                    <span v-if="unseenCount != 0" class="unseen-count">{{unseenCount}}</span>
                </li>
                <li @click="moreMenu = !moreMenu">
                    <i :class="{'margin-icon' : $t('nav.home') === 'الرئيسية'}" class="profile-icon fas fa fa-ellipsis-v"></i>
                    <span>{{ $t("nav.more") }}</span>
                </li>
            </ul>
        </div>
        <div :class="{'left-menu rtl' : $t('nav.home') === 'الرئيسية'}" class="more-menu" v-if="moreMenu" v-click-outside="externalClickOutMore">
            <div v-if="mainMenue">
                <router-link to="/ratings" v-if="auth_state == true">
                    <span @click="moreMenu = !moreMenu">
                        <i class="fas fa fa-star"></i>
                        {{ $t("nav.view_your_rate") }}
                    </span>
                </router-link>
                <span @click="switchToLangPopup()">
                    <i class="fas fa fa-globe"></i>
                    {{$t('nav.lang')}}
                </span>
                <span @click="logout()" v-if="auth_state == true">
                    <i class="fas fa fa-sign-out-alt"></i>
                    {{ $t("nav.sign_out") }}
                </span>
            </div>
            <div v-if="langMenu">
                <div>
                    <select v-model="$i18n.locale" @change="goToDefaultMenu($event.target.value)">
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </div>
            </div>
        </div>
        <div :class="{'notifications-rtl' : $t('nav.home') === 'الرئيسية'}" class="notifications-popup" @click="notificationPopup = !notificationPopup" v-if="notificationPopup" v-click-outside="externalClickOutNotifications">
            <Notifications ref="refetch"/>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { getAuthState } from '@/helpers/utils';
import {clearAuthInfo} from '@/helpers/utils';
import Notifications from '@/components/notifications/Notifications.vue';
import vClickOutside from 'v-click-outside';
import FirebaseFile from "@/firebase";

@Component({
    components: {
        Notifications,
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
})
export default class Header extends Vue {
    auth_state = false;
    moreMenu = false;
    openStaticLang = false;
    openAuthLang = false;
    mainMenue = true;
    langMenu = false;
    notificationPopup = false;
    unseenCount = '';
    externalClickOutNotifications(){
        this.notificationPopup = false;
    }
    externalClickOutMore(){
        this.moreMenu = false;
        this.langMenu = false;
    }
    logout(){
        clearAuthInfo()
        this.$router.push('/home');
        window.location.reload()
    }
    switchToLangPopup(){
        this.mainMenue = false;
        this.langMenu = true;
    }
    goToDefaultMenu(lang){
        this.mainMenue = true;
        this.langMenu = false;
        this.moreMenu = false;
        localStorage.setItem("locale", lang);
    }
    openNotificationPopup(){
        this.resetCount();
        this.notificationPopup = !this.notificationPopup;
        if(this.notificationPopup){
            this.$refs.refetch.refetchNotificationList();
        }
    }
    async resetCount(){
        let res = await FirebaseFile.getDataFromRealtimeDatabase(56);
        res.set(0);
    }
    mounted() {
        this.auth_state = getAuthState();  
    }
    async created() {
        let res = await FirebaseFile.getDataFromRealtimeDatabase(56);
        res.on('value', (snapshot) => {
            const data = snapshot.val();
            this.unseenCount = data;
        });
    }
  
}
</script>

<style scoped>
.nav-bar-body{
    background: var(--active-green);
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 85px;
    z-index: 9999;
    overflow: hidden;
    clear: both;
    color: #fff;
}
.nav-bar-body i{
    font-size: 20px;
}
.logo-body{
    float: left;
    margin-left: 65px;
}
.logo-body .logo-img{
    width: 100%;
}

.nav-bar-list{
    float: right;
    line-height: 3;
}
.nav-bar-list-hospital{
    float: right;
    line-height: 3;
}
.login-btn{
    background: #fff;
    color: var(--main-green);
    padding: 0px 20px;
    border-radius: var(--sm-radius);
    line-height: 2;
}
.global-li{
   margin-right: 30px !important;
}
ul li{
    list-style: none;
    display: inline-block;
    margin-right: 35px;
    cursor: pointer;
}
.nav-bar-list li a,
.nav-bar-list-hospital li a{
    color: #fff !important;
}
.active{
    border-bottom: 2.5px solid #fff;
    height: 45px;
    display: inline-block;
}
.nav-bar-list .login-btn a{
    color: var(--main-green) !important;
}
.profile-icon{
    margin-right: 10px;
}
.more-menu{
    width: 180px;
    /* height: 155px; */
    position: fixed;
    right: 50px;
    top: 75px;
    border-radius: var(--md-radius);
    border: 1px solid var(--main-green);
    background: #fff;
    color: var(--main-green);
    z-index: 999;
    padding-top: 10px;
    padding-bottom: 10px;
}
.more-menu span{
    display: block;
    height: 45px;
    padding-left: 20px;
    cursor: pointer;
    line-height: 3;
}
.more-menu span:nth-of-type(2){
    padding-left: 23px;
}
.more-menu span:hover{
    background: #ddd;
}
.more-menu a{
    color: var(--main-green);
}
.locale-switcher-auth{
    position: absolute;
    bottom: -10px;
    right: 200px;
}
.locale-switcher-static{
    position: absolute;
    right: 170px;
    bottom: -10px;
}
.locale-switcher-auth select,
.locale-switcher-static select{
    width: 100px;
    height: 25px;
    border-radius: 4px;
    outline: none;
    border: 1px solid var(--font-navy);
}
.locale-switcher-static select option,
.locale-switcher-auth select option{
    height: 30px;
}
.margin-logo{
    margin-right: 65px !important;
}
.margin-icon{
    margin-left: 10px !important;
}
.margin-ul{
    margin-left: 45px;
}
.left-menu{
    left: 40px !important;
}
.left-menu span{
    padding-right: 20px;
    padding-left: 0px !important;
}
.more-menu select{
    width: 95%;
    height: 40px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid var(--main-green);
    cursor: pointer;
    color: var(--main-green);
    margin: auto;
    display: block;
    margin-top: 10px;
    outline: none;
}
.more-menu select option{
    font-size: 15px;
    cursor: pointer !important;
}
.notifications-popup{
    width: 400px;
    height: 400px;
    position: fixed;
    background: #fff;
    border-radius: var(--md-radius);
    border: 1px solid var(--main-green);
    z-index: 9999;
    right: 130px;
    top: 65px;
}
.unseen-count{
    width: 17px;
    height: 17px;
    display: inline-block;
    background: var(--font-navy);
    border-radius: 50%;
    border: 1px solid #fff;
    line-height: 1.4;
    color: #fff;
    font-size: 12px;
    text-align: center;
    position: absolute;
    margin-left: -5px;
    margin-top: 0px;
}
.notifications-rtl{
    left: 130px;
    right: initial !important;
}
</style>