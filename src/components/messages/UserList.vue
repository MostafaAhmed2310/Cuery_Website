<template>
    <div class="user-list-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="user-item" v-for="headChat in chatList" :key="headChat">
            <router-link :to="'/messages/' + headChat.sender_id" active-class="active-chat">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <div class="user-info">
                    <h4>{{headChat.sender_name}}</h4>
                    <span v-if="headChat.latest_message.body && !headChat.latest_message.attachments[0]">{{headChat.latest_message.body}}</span>
                    <span v-if="headChat.latest_message.attachments[0] && headChat.latest_message.user_id != currentUserId">{{headChat.sender_name}} send an attachment</span>
                    <span v-if="headChat.latest_message.attachments[0] && headChat.latest_message.user_id == currentUserId">You send an attachment</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {getMyConversations} from  '@/endpoints/messages';
import {getUserInfo} from '@/endpoints/user';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class UserList extends Vue {
    chatList = [];
    currentUser = {};
    currentUserId = '';
    loaderFlag = false;
    updateUserList(){
        this.getChatList();
    }
    async getChatList(){
        this.loaderFlag = true;
        this.chatList = await getMyConversations();
        this.loaderFlag = false;
    }
    async getCurrentUser(){
        this.currentUser = await getUserInfo();
        this.currentUserId = this.currentUser.id;
    }
    mounted(){
        this.getChatList();
        this.getCurrentUser();
    }
}
</script>

<style scoped>
.user-list-container{
    overflow: auto;
    position: relative;
    width: 100%;
    padding: 30px 0px;
    height: 80vh;
}
.user-item{
    width: 80%;
    margin: auto;
    background: #fff;
    border-radius: var(--md-radius);
    box-shadow: 0px 1px 2px 0px #ddd;
    padding: 20px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
}
.user-item:hover{
    opacity: 0.9;
}
.profile-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 2%;
    background: var(--main-green);
    color: #fff;
    font-size: 35px;
    text-align: center;
    line-height: 1.5;
}
.user-info{
    float: right;
    width: 70%;
    color: var(--font-navy);
}
.user-info h4{
    margin: 0px 0px 5px 0px;
}
.user-info span{
    font-size: 11px;
}
.active-chat{
    background: var(--font-navy);
    color: #fff;
    transition: 0.7s;
}
</style>