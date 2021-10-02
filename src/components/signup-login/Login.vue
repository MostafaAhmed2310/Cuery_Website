<template>
    <div class="login-container">
        <div class="login-body">
            <div class="login-img">
                <img src="@/assets/images/login/login-img.png" alt="">
            </div>
            <div class="login-form">
                <h2>{{ $t("nav.sign_in") }}</h2>
                <p>{{ $t("login.have_not_account") }} <span @click="pushToSignup()">{{ $t("login.sign_up") }} </span></p>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder="User Name" v-model="username">
                        <span v-if="usernameMsg">{{ $t("login.enter_username") }}</span>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="Password" v-model="password">
                        <span v-if="passwordMsg">{{ $t("login.enter_password") }}</span>
                        <span v-if="errorMsg"> {{ $t("login.wrong_data") }}</span>
                    </div>
                    <div class="login-btn">
                        <button type="button" @click="loginFun()">{{ $t("login.sign_in") }} </button>
                    </div>
                    <span class="forget-password">{{ $t("login.forget_password") }}</span>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {login} from '@/endpoints/auth';
import FirebaseFile from "@/firebase";
import {saveFcmToken} from '@/endpoints/notifications';
@Component({
    components: {
        
    },
})
export default class Login extends Vue {
    username = '';
    password = '';
    usernameMsg = false;
    passwordMsg = false;
    errorMsg = false;
    role_id = 2;
    pushToSignup(){
        this.$router.push('/signup')
    }
    async loginFun(){
        if(this.username == ''){
            this.usernameMsg = true
            this.errorMsg = false
        }else {
            this.usernameMsg = false
        }
        if(this.password == '') {
            this.passwordMsg = true
            this.errorMsg = false
        }else  {
            this.passwordMsg = false
        }
        if(this.usernameMsg == false && this.passwordMsg == false) {
            try {
                await login(this.username,this.password, this.role_id);
                await FirebaseFile.registerSW();
                const tokenFCM = await FirebaseFile.getFCMToken();
                await saveFcmToken({fcm_token: tokenFCM});
                this.$router.push('/hospital_home');
                window.location.reload();
            }catch(err) {
                console.log('rrrrrrrrrrrr', err.response);
                if(err == 'Error: Request failed with status code 401' && err.response.data.status == 'Pending'){
                    this.$fire({
                        title: "401 - Pending",
                        text: "Please wait to review your account and approve it",
                        type: "warning",
                        timer: 10000
                    })
                }else if(err == 'Error: Request failed with status code 401' && err.response.data.error == 'Invalid Credentials'){
                    this.$fire({
                        title: "401 - Unauthorized",
                        text: "Your authorization failed .. Please try refreshing the page and fill in the correct login details",
                        type: "warning",
                        timer: 10000
                    })
                }else{
                    this.errorMsg = true
                }
            }
        }
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted() {
        this.scrollToTop();
    }
    
}
</script>

<style  scoped>
.login-container{
    background-image: url('../../assets/images/signin.png');
    display: block;
    width: 100%;
    background-attachment: fixed;
    min-height: 500px;
    padding: 65px 0px;
    background-color: rgba(241, 250, 245, 1);
}
.login-body{
    width: 80%;
    margin: auto;
    clear: both;
    overflow: hidden;
    background: #fff;
    border-radius: var(--md-radius);
    padding: 100px;
}
.login-img{
    width: 50%;
    float: left;
}
.login-img img{
    width: 100%;
}
.login-form{
    width: 40%;
    float: right;
}
.login-form h2{
    color: var(--font-navy);
}
.login-form p{
    color: var(--font-navy);
}
.login-form p span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.login-form p span:hover{
    opacity: 0.8;
    transition: 0.7s;
}
.input-field{
    height: 70px;
}
.input-field span{
    font-size: 12px;
    color: var(--alert-color);
}
.input-field input{
    width: 100%;
    height: 45px;
    border-radius: var(--md-radius);
    outline: none;
    border: 1.5px solid var(--main-green);
    padding: 0px 20px;
}
.login-btn{
    height: 70px;
}
.login-btn button{
    width: 100%;
    outline: none;
    cursor: pointer;
    border: 1.5px solid var(--main-green);
    background: var(--main-green);
    color: #fff;
    height: 45px;
    border-radius: var(--md-radius);
}
.login-btn button:hover{
    opacity: 0.8;
    transition: 0.7s;
}
.login-form .forget-password{
    text-decoration: underline;
    font-weight: bold;
    color: var(--font-navy);
    clear: both;
    display: block;
    cursor: pointer;
}
.login-form .forget-password:hover{
    opacity: 0.8;
    transition: 0.7s;
}
</style>