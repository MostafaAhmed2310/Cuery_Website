<template>
    <div class="header-container">
        <div class="nav-bar-body">
            <div class="logo-body">
                <img class="logo-img" src="@/assets/logo.png"/>
            </div>
            <!-- <div class="locale-switcher">
                <select v-model="$i18n.locale">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </div> -->
            <ul class="nav-bar-list" v-if="auth_state == false">
                <li><router-link to="/home" active-class="active">{{ $t("nav.home") }}</router-link></li>
                <li><router-link to="/medical_team" active-class="active">{{ $t("nav.medical_team") }}</router-link></li>
                <li>{{ $t("nav.about") }}</li>
                <li class="global-li" @click="openStaticLang = !openStaticLang">
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
            <ul class="nav-bar-list-hospital" v-if="auth_state == true">
                <li><router-link to="/hospital_home" active-class="active">{{ $t("nav.home") }}</router-link></li>
                <li><router-link to="/contact_us" active-class="active">{{ $t("nav.contact_us") }}</router-link></li>
                <li><router-link to="/reservation-history" active-class="active">{{ $t("nav.reservation_history") }}</router-link></li>
                <li>
                    <router-link to="/profile" active-class="active">
                        <i class="profile-icon far fa fa-user-circle"></i>
                        <span>{{ $t("nav.profile") }}</span>
                    </router-link>
                </li>
                <li class="global-li" @click="openAuthLang = !openAuthLang">
                    <i class="fas fa fa-globe"></i>
                </li>
                <li>
                    <i class="fas fa fa-bell"></i>
                </li>
                <li @click="moreMenu = !moreMenu">
                    <i class="profile-icon fas fa fa-ellipsis-v"></i>
                    <span>{{ $t("nav.more") }}</span>
                </li>
                <div class="locale-switcher-auth" v-if="openAuthLang">
                    <select v-model="$i18n.locale">
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </div>
            </ul>
        </div>
        <div class="more-menu" v-if="moreMenu" @click="moreMenu = !moreMenu">
            <router-link to="/ratings">
                <span>
                    <i class="fas fa fa-star"></i>
                    {{ $t("nav.view_your_rate") }}
                </span>
            </router-link>
            <span @click="logout()">
                <i class="fas fa fa-sign-out-alt"></i>
                {{ $t("nav.sign_out") }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAuthState } from '@/helpers/utils';
import {clearAuthInfo} from '@/helpers/utils';

@Component({
  components: {
  },
})
export default class Header extends Vue {
    auth_state:Boolean = false;
    moreMenu:Boolean = false;
    openStaticLang:Boolean = false;
    openAuthLang:Boolean = false;
    logout(){
        clearAuthInfo()
        this.$router.push('/home');
        window.location.reload()
    }
    mounted() {
        this.auth_state = getAuthState();   
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
    margin-right: 55px;
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
    height: 110px;
    position: fixed;
    right: 50px;
    top: 75px;
    border-radius: var(--md-radius);
    border: 1px solid var(--main-green);
    background: #fff;
    color: var(--main-green);
    z-index: 999;
    padding-top: 10px;
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
</style>