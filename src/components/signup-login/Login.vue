<template>
    <div class="login-container">
        <div class="login-body">
            <div class="login-img">
                <img src="@/assets/images/login/login-img.png" alt="">
            </div>
            <div class="login-form" v-if="formStep === 1">
                <h2>{{ $t("nav.sign_in") }}</h2>
                <p>{{ $t("login.have_not_account") }} <span @click="pushToSignup()">{{ $t("login.sign_up") }} </span></p>
                <form>
                    <div class="input-field">
                        <input type="text" :placeholder='$t("sign_up.username_placeholder")' v-model="username">
                        <span v-if="usernameMsg">{{ $t("login.enter_username") }}</span>
                    </div>
                    <div class="input-field">
                        <input :type="passType" :placeholder='$t("sign_up.password_placeholder")' v-model="password">
                        <i class="fas fa fa-eye" @click="showPassword()" v-if="passType == 'password' && password"></i>
                        <i class="fas fa fa-eye-slash" @click="hidePassword()" v-if="passType == 'text' && password"></i>
                        <span v-if="passwordMsg">{{ $t("login.enter_password") }}</span>
                        <span v-if="errorMsg"> {{ $t("login.wrong_data") }}</span>
                    </div>
                    <div class="login-btn">
                        <button type="button" @click="loginFun()">{{ $t("login.sign_in") }} </button>
                    </div>
                    <span @click="formStep = 2" class="forget-password">{{ $t("login.forget_password") }}</span>
                </form>
            </div>
            <div class="login-form" v-if="formStep === 2">
                <h2>{{ $t("Forget Password") }}</h2>
                <p>{{ $t("Please fill your email to reset password") }}</p>
                <form>
                    <div class="input-field">
                        <input type="text" :placeholder='$t("sign_up.username_placeholder")' v-model="email">
                        <span v-if="usernameMsg">{{ $t("login.enter_username") }}</span>
                    </div>
                    <div class="login-btn">
                        <button :disabled="email == ''" type="button" @click="getTokenToResetPassword()">{{ $t("Continue") }} </button>
                    </div>
                    <div class="login-btn-back" @click="formStep = 1">
                        <button type="button">{{ $t("Back") }} </button>
                    </div>
                </form>
            </div>
            <div class="login-form" v-if="formStep === 3">
                <h2>{{ $t("Forget Password") }}</h2>
                <p>{{ $t("Please fill your email to reset password") }}</p>
                <form>
                    <div class="input-field">
                        <input type="text" :placeholder='$t("Token")' v-model="token">
                        <span v-if="usernameMsg">{{ $t("login.enter_username") }}</span>
                    </div>
                    <div class="input-field">
                        <input :type="forgetPassType" :placeholder='$t("sign_up.password_placeholder")' v-model="forgetPassword">
                        <i class="fas fa fa-eye" @click="forgetPassType = 'text'" v-if="forgetPassType == 'password' && forgetPassword"></i>
                        <i class="fas fa fa-eye-slash" @click="forgetPassType = 'password'" v-if="forgetPassType == 'text' && forgetPassword"></i>
                        <span v-if="forgetPassMsg">{{ $t("login.enter_password") }}</span>
                    </div>
                    <div class="input-field">
                        <input :type="forgetC_PassType" :placeholder='$t("sign_up.password_placeholder")' v-model="confirmPassword">
                        <i class="fas fa fa-eye" @click="forgetC_PassType = 'text'" v-if="forgetC_PassType == 'password' && confirmPassword"></i>
                        <i class="fas fa fa-eye-slash" @click="forgetC_PassType = 'password'" v-if="forgetC_PassType == 'text' && confirmPassword"></i>
                        <span v-if="confirmPassMsg">{{ $t("login.enter_password") }}</span>
                    </div>
                    <div class="login-btn">
                        <button @click="verifyNewPassword()" type="button">{{ $t("Reset Password") }} </button>
                    </div>
                    <div class="login-btn-back" @click="formStep = 2">
                        <button type="button">{{ $t("Back") }} </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {login} from '@/endpoints/auth';
import { sendEmail, resetPassword } from "@/endpoints/resetPassword";

@Component({
    components: {
        
    },
})
export default class Login extends Vue {
    email = '';
    password = '';
    forgetPassword = '';
    confirmPassword = '';
    usernameMsg = false;
    passwordMsg = false;
    errorMsg = false;
    role_id = 2;
    passType = 'password';
    formStep = 1;
    forgetPassType = 'password';
    forgetC_PassType = 'password';
    forgetPassMsg = false;
    confirmPassMsg = false;
    token = '';

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

    showPassword(){
        this.passType = 'text'
    }

    hidePassword(){
        this.passType = 'password'
    }

    async getTokenToResetPassword(){
        try{
            const res = await sendEmail({email: this.email});
            console.log("res", res);
            if(res.status == 200){
                this.formStep = 3;
            }
        }catch(err){
            this.$fire({
                title: "Error",
                text: err.response.data.message,
                type: "warning",
                timer: 10000
            })
        }
    }

    async verifyNewPassword(){
        try{
            const data = {
                token: this.token,
                password: this.password,
                password_confirm: this.confirmPassword
            }
            const res = await resetPassword(data);
            if(res.status == 200){
                this.formStep = 1;
            }
        }catch(err){
            this.$fire({
                title: "Error",
                text: err.response.data.message,
                type: "warning",
                timer: 10000
            })
        }
        
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
    position: relative;
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
.fa-eye,
.fa-eye-slash{
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 14px;
    color: var(--active-green);
    cursor: pointer;
}
.login-btn-back button{
    width: 100%;
    outline: none;
    cursor: pointer;
    border: 1.5px solid var(--main-green);
    background: #fff;
    color: var(--main-green);
    height: 45px;
    border-radius: var(--md-radius);
}
</style>