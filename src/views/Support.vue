<template>
    <div class="support-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="support-body">
            <h1>{{$t("Support.need_some_help")}}</h1>
            <div class="support-types">
                <div :class="'type-body '+ activeBorder1" @click="getSubject('Complaints')">
                    <span class="red"><i class="far fa-question-circle"></i></span>
                    <p>{{$t("Support.complaints")}}</p>
                </div>
                <div :class="'type-body '+ activeBorder2" @click="getSubject('Inquiries')">
                    <span class="yellow"><i class="far fa-comment-dots"></i></span>
                    <p>{{$t("Support.inquiries")}}</p>
                </div>
                <div :class="'type-body '+ activeBorder3" @click="getSubject('FeedBack')">
                    <span class="green"><i class="far fa-file-alt"></i></span>
                    <p>{{$t("Support.feedback")}}</p>
                </div>
                <p class="alert-msg" v-if="categoryErr">{{$t("Validation.required_field")}}</p>
            </div>
            <div class="support-input">
                <textarea class="input" :placeholder="$t('Support.input_placeholder')" v-model="ticketMessage"></textarea>
                <button @click="sendMessage()">{{$t("Support.get_help")}}</button>
                <p class="alert-msg" v-if="messageErr">{{$t("Validation.required_field")}}</p>
            </div>
        </div>
        <div class="chat-body" v-if="chatBody">
            <TicketsList/>
        </div>
        <div class="chat-icon" @click="chatBody = !chatBody">
            <i class="far fa-comment-alt"></i>
        </div>         
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import {createTicket} from '@/endpoints/support';
import TicketsList from '@/components/Support/TicketsList.vue';

@Component({
    components: {
        DoubleBounce,
        TicketsList
    },
})
export default class Support extends Vue {
    ticketMessage = '';
    loaderFlag = false;
    messageSubject = '';
    activeBorder1 = '';
    activeBorder2 = '';
    activeBorder3 = '';
    categoryErr = false;
    messageErr = false;
    chatBody = false;

    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    getSubject(subject){
        this.messageSubject = subject;
        if(subject == 'Complaints'){
            this.activeBorder1 = 'active-border';
            this.activeBorder2 = '';
            this.activeBorder3 = '';
        }else if(subject == 'Inquiries'){
            this.activeBorder1 = '';
            this.activeBorder2 = 'active-border';
            this.activeBorder3 = '';
        }else if(subject == 'FeedBack'){
            this.activeBorder1 = '';
            this.activeBorder2 = '';
            this.activeBorder3 = 'active-border';
        }
    }
    async sendMessage(){
        if(this.messageSubject == ''){
            this.categoryErr = true;
        }else{
            this.categoryErr = false;
        }
        if(this.ticketMessage == '' || this.ticketMessage.trim() == ''){
            this.messageErr = true;
        }else{
            this.messageErr = false;
        }
        if(this.categoryErr == false && this.messageErr == false){
            let ticketBody = {
                subject: this.messageSubject,
                message: this.ticketMessage
            }
            this.loaderFlag = true;
            let res = await createTicket(ticketBody);
            if(res){
                this.messageSubject = '';
                this.ticketMessage = '';
                this.activeBorder1 = '';
                this.activeBorder2 = '';
                this.activeBorder3 = '';
            }
            this.loaderFlag = false;
        }
    }
    mounted() {
        this.scrollToTop();
    }
}
</script>

<style scoped>
.support-container {
  background-image: url("../assets/images/signin.png");
  display: block;
  width: 100%;
  background-attachment: fixed;
  min-height: 500px;
  padding: 65px 0px;
  background-color: rgba(241, 250, 245, 1);
  text-align: center;
}
.support-body {
  width: 80%;
  margin: auto;
  clear: both;
  overflow: hidden;
  background: #fff;
  border-radius: var(--md-radius);
  padding: 65px;
}
.support-body h1{
    color: var(--font-navy);
}
.support-input{
    width: 100%;
    height: 80px;
    position: relative;
}
.support-input textarea{
    width: 100%;
    border-radius: 4px;
    border: none;
    height: 65px;
    background: var(--main-table-color);
    outline: var(--font-navy);
    resize: none;
    padding: 20px;
    font-size: 17px;
    line-height: 1;
}
.support-input button{
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 15px 45px;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    border: none;
    background: var(--main-green);
    color: #fff;
    line-height: 1;
}
.support-input button:hover{
    opacity: 0.8;
}
.chat-icon{
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%;
    background: var(--main-green);
    color: #fff;
    font-size: 30px;
    line-height: 2;
    bottom: 60px;
    cursor: pointer;
    float: right;
    margin-right: 20px;
    margin-top: -65px;
}
.type-body{
    width: 130px;
    height: 130px;
    padding: 20px;
    border-radius: 5px;
    background: var(--main-table-color);
    float: left;
    margin-right: 15px;
}
.type-body:hover{
    box-shadow: 2px 3px 5px 1px #ddd;
}
.support-types{
    text-align: center;
    overflow: hidden;
    width: 460px;
    margin: auto;
    clear: both;
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
    padding: 10px;
}
.type-body span{
    overflow: hidden;
    width: 45px;
    height: 45px;
    display: block;
    margin: auto;
    border-radius: 50%;
    font-size: 30px;
    color: #fff;
    line-height: 45px;
    text-align: center;
}
.red{
    background: var(--alert-color);
}
.yellow{
    background: rgb(207, 207, 51);
}
.green{
    background: var(--main-green);
}
.active-border{
    border: 1px solid var(--font-navy);
}
.alert-msg{
    clear: both;
    text-align: start;
    color: var(--alert-color);
    font-size: 13px;
    display: block;
    padding-top: 10px;
}
.chat-body{
    position: absolute;
    right: 25px;
    bottom: 85px;
    box-shadow: 2px 3px 5px 1px #ddd;
    border-radius: var(--md-radius);
}
</style>