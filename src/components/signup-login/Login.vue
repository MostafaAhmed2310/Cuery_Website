<template>
    <div class="login-container">
        <div class="login-body">
            <div class="login-img">
                <img src="@/assets/images/login/login-img.png" alt="">
            </div>
            <div class="login-form">
                <h2>Sign In</h2>
                <p>Dont Have An Account ? <span @click="pushToSignup()">Sign up.</span></p>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder="User Name" v-model="username">
                        <span v-if="usernameMsg">Please enter username</span>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="Password" v-model="password">
                        <span v-if="passwordMsg">Please enter password</span>
                        <span v-if="errorMsg">Wrong username or password</span>
                    </div>
                    <div class="login-btn">
                        <button type="button" @click="loginFun()">Sign in</button>
                    </div>
                    <span class="forget-password">Forget Your Password ?</span>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {login} from '@/endpoints/auth';
@Component({
    components: {
        
    },
})
export default class Login extends Vue {
    username:any = '';
    password:any = '';
    usernameMsg:Boolean = false;
    passwordMsg:Boolean = false;
    errorMsg:Boolean = false;
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
                await login(this.username,this.password)
                this.$fire({
                    title: "SUCCESS!",
                    text: "WELCOME !",
                    type: "success",
                    timer: 2000
                })
                this.$router.push('/hospital_home')
                window.location.reload()
            }catch(err) {
                this.errorMsg = true
            }
        }
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