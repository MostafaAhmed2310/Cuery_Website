<template>
    <div class="header-container">
        <div class="nav-bar-body">
            <div class="logo-body">
                <img class="logo-img" src="@/assets/logo.png"/>
            </div>
            <ul class="nav-bar-list" v-if="auth_state == false">
                <li><router-link to="/home" active-class="active">Home</router-link></li>
                <li><router-link to="/medical_team" active-class="active">Medical Team</router-link></li>
                <li>About Us</li>
                <li>عربي</li>
                <li class="login-btn"><router-link to="/login">Sign in</router-link></li>
            </ul>
            <ul class="nav-bar-list" v-if="auth_state == true">
                <li><router-link to="/home" active-class="active">Home</router-link></li>
                <li><router-link to="/medical_team" active-class="active">Contact Us</router-link></li>
                <li>Last Reservations</li>
                <li>عربي</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAuthState } from '@/helpers/utils';

@Component({
  components: {
  },
})
export default class Header extends Vue {
    auth_state:Boolean = false;

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
ul li:nth-of-type(5){
    background: #fff;
    color: var(--main-green);
    padding: 0px 20px;
    border-radius: var(--sm-radius);
    line-height: 2;
}
ul li{
    list-style: none;
    display: inline-block;
    margin-right: 55px;
    cursor: pointer;
}
.nav-bar-list li a{
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
</style>