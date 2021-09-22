<template>
    <div class="user-list-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="user-item" v-for="headChat in chatList" :key="headChat">
            <div v-if="headChat.send_to_id == currentUserId">
                <span v-if="headChat.unseen_messages != 0" class="unseen-count">{{headChat.unseen_messages}}</span>
                <router-link :to="'/messages/' + headChat.sender_id" active-class="active-chat">
                    <div class="profile-img">
                        <img v-if="headChat.sender_image_path && headChat.send_to_id == currentUserId" :src="BaseUrl+headChat.sender_image_path" alt="">
                        <i class="fas fa fa-user-circle"  v-if="headChat.sender_image_path == null && headChat.send_to_id == currentUserId"></i>
                        <img v-if="headChat.send_to_user_image_path && headChat.sender_id == currentUserId" :src="BaseUrl+headChat.send_to_user_image_path" alt="">
                        <i class="fas fa fa-user-circle"  v-if="headChat.send_to_user_image_path == null && headChat.sender_id == currentUserId"></i>
                    </div>
                    <div class="user-info">
                        <h4 v-if="headChat.send_to_id == currentUserId">{{headChat.sender_name}}</h4>
                        <h4 v-if="headChat.sender_id == currentUserId">{{headChat.send_to_user}}</h4>
                        <span :class="{'latest-msg' : headChat.unseen_messages != 0}" v-if="headChat.latest_message && headChat.latest_message.body && !headChat.latest_message.attachments[0]">{{headChat.latest_message.body}}</span>
                        <span :class="{'latest-msg' : headChat.unseen_messages != 0}" v-if="headChat.latest_message && headChat.latest_message.attachments[0] && headChat.latest_message.user_id != currentUserId">{{headChat.sender_name}} send an attachment</span>
                        <span :class="{'latest-msg' : headChat.unseen_messages != 0}" v-if="headChat.latest_message && headChat.latest_message.attachments[0] && headChat.latest_message.user_id == currentUserId">You send an attachment</span>
                    </div>
                </router-link>
            </div>
            <div v-if="headChat.sender_id == currentUserId">
                <span v-if="headChat.unseen_messages != 0" class="unseen-count">{{headChat.unseen_messages}}</span>
                <router-link :to="'/messages/' + headChat.send_to_id" active-class="active-chat">
                    <div class="profile-img">
                        <img v-if="headChat.sender_image_path && headChat.send_to_id == currentUserId" :src="BaseUrl+headChat.sender_image_path" alt="">
                        <i class="fas fa fa-user-circle"  v-if="headChat.sender_image_path == null && headChat.send_to_id == currentUserId"></i>
                        <img v-if="headChat.send_to_user_image_path && headChat.sender_id == currentUserId" :src="BaseUrl+headChat.send_to_user_image_path" alt="">
                        <i class="fas fa fa-user-circle"  v-if="headChat.send_to_user_image_path == null && headChat.sender_id == currentUserId"></i>
                    </div>
                    <div class="user-info">
                        <h4 v-if="headChat.send_to_id == currentUserId">{{headChat.sender_name}}</h4>
                        <h4 v-if="headChat.sender_id == currentUserId">{{headChat.send_to_user}}</h4>
                        <span :class="{'latest-msg' : headChat.unseen_messages != 0}" v-if="headChat.latest_message && headChat.latest_message.body && !headChat.latest_message.attachments[0]">{{headChat.latest_message.body}}</span>
                        <span :class="{'latest-msg' : headChat.unseen_messages != 0}" v-if="headChat.latest_message && headChat.latest_message.attachments[0] && headChat.latest_message.user_id != currentUserId">{{headChat.sender_name}} send an attachment</span>
                        <span :class="{'latest-msg' : headChat.unseen_messages != 0}" v-if="headChat.latest_message && headChat.latest_message.attachments[0] && headChat.latest_message.user_id == currentUserId">You send an attachment</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {getMyConversations} from  '@/endpoints/messages';
import {getUserInfo} from '@/endpoints/user';
import {DoubleBounce} from 'vue-loading-spinner';
import {BaseUrl} from '@/app.config';
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
    length = 0;
    BaseUrl = BaseUrl;
    updateUserList(){
        this.getChatList();
    }
    async getChatList(){
        this.loaderFlag = true;
        this.chatList = await getMyConversations();
        this.length = this.chatList.length;
        this.checkArrayLength();
        this.loaderFlag = false;
    }
    async getCurrentUser(){
        this.currentUser = await getUserInfo();
        this.currentUserId = this.currentUser.id;
    }
    checkArrayLength(){
        this.$emit('updateLength', this.length)
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
    position: relative;
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
.profile-img img{
    width: 100%;
    height: 100%;
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
.unseen-count{
    position: absolute;
    width: 17px;
    height: 17px;
    display: inline-block;
    background: var(--font-navy);
    color: #fff;
    right: 15px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
}
.latest-msg{
    font-weight: bold !important;
    color: #000 !important;
}
</style>