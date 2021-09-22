<template>
    <div class="contact-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="contact-body">
            <div class="contact-img">
                <img src="@/assets/images/contact-img.png" alt="" />
            </div>
            <div class="contact-form">
                <h2>Contact Us</h2>
                <h3>GET IN TOUCH</h3>
                <p>Always Within Your Reach</p>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder="Name" v-model="name"/>
                        <span v-if="nameErr">Please enter your name</span>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Email" v-model="email"/>
                        <span v-if="emailErr">Please enter your email</span>
                        <span v-if="emailFormat">Please check email format</span>
                    </div>
                    <div class="input-field-message">
                        <textarea placeholder="Message" v-model="msg"></textarea>
                        <span v-if="msgErr">Please enter your message</span>
                    </div>
                    <div class="contact-btn">
                        <button @click="sendMsg()" type="button">Send Message</button>
                    </div>
                </form>
            </div>
        </div>         
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import {contactUs} from '@/endpoints/static_pages';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class ContactUs extends Vue {
    loaderFlag = false;
    nameErr = false;
    emailErr = false;
    msgErr = false;
    emailFormat = false;
    name = '';
    email = '';
    msg = '';
    async sendMsg(){
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.name == '' || this.name.trim() == ''){
            this.nameErr = true;
        }else{
            this.nameErr = false;
        }
        if(!this.email.match(emailRegex) && this.email != ''){
            this.emailFormat = true;
        }else{
            this.emailFormat = false;
        }
        if(this.email == '' || this.email.trim() == ''){
            this.emailErr = true;
        }else{
            this.emailErr = false;
        }
        if(this.msg == '' || this.msg.trim() == ''){
            this.msgErr = true;
        }else{
            this.msgErr = false;
        }
        if(
            this.nameErr == false &&
            this.emailErr == false &&
            this.msgErr == false &&
            this.emailFormat == false
        ){
            try{
                let contactObj = {
                    name: this.name,
                    email: this.email,
                    message: this.msg
                }
                this.loaderFlag = true;
                let res = await contactUs(contactObj);
                this.loaderFlag = false;
                if(res){
                    this.name = '';
                    this.email = '';
                    this.msg = '';
                    this.$fire({
                        title: "SUCCESS!",
                        text: "Your Message sent successfully",
                        type: "success",
                        timer: 2000
                    })
                }
            }catch(err){
                this.$fire({
                    title: "WARNING!",
                    text: "Somthing went wrong, please try again later",
                    type: "error",
                    timer: 2000
                })
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

<style scoped>
.contact-container {
  background-image: url("../../assets/images/signin.png");
  display: block;
  width: 100%;
  background-attachment: fixed;
  min-height: 500px;
  padding: 65px 0px;
  background-color: rgba(241, 250, 245, 1);
}
.contact-body {
  width: 80%;
  margin: auto;
  clear: both;
  overflow: hidden;
  background: #fff;
  border-radius: var(--md-radius);
  padding: 100px;
}
.contact-img {
  width: 40%;
  float: right;
}
.contact-img img {
  width: 100%;
}
.contact-form {
  width: 40%;
  float: left;
}
.contact-form h2 {
  color: var(--font-navy);
}
.contact-form h3 {
    color: var(--main-green);
}
.contact-form p {
  color: var(--font-navy);
}

.input-field {
  height: 70px;
  position: relative;
}
.input-field-message {
    height: 150px;
}
.input-field span,
.input-field-message span {
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
.input-field-message textarea{
    height: 125px;
    padding: 20px 20px;
    width: 100%;
    border-radius: var(--md-radius);
    outline: none;
    border: 1.5px solid var(--main-green);
    resize: none;
}
.contact-btn {
  height: 70px;
}
.contact-btn button {
  width: 100%;
  outline: none;
  cursor: pointer;
  border: 1.5px solid var(--main-green);
  background: var(--main-green);
  color: #fff;
  height: 45px;
  border-radius: var(--md-radius);
}
.contact-btn button:hover {
  opacity: 0.8;
  transition: 0.7s;
}
</style>