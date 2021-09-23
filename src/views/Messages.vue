<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="messages-body">
            <div class="cover-img">
                <img :class="{'mirror-img' : $t('nav.home') === 'الرئيسية'}" src="@/assets/images/profile-cover.png" alt="">
                <h2 :class="{'rtl pages-title-ar' : $t('nav.home') === 'الرئيسية'}">
                    <router-link to="/hospital_home">
                        <i :class="{'rotate-icon' : $t('nav.home') === 'الرئيسية'}" class="fas fa-chevron-left"></i> 
                    </router-link>
                    {{ $t("messages.title") }}
                </h2>
            </div>
            <div v-if="placeHolderFlag && !loaderFlag">
                <PagePlaceholder/>
            </div>
            <div class="messages-inputs-body" v-if="messageBodyFlag">
                <div class="messages-panal" :class="{'float-right pages-panal' : $t('nav.home') === 'الرئيسية'}">
                    <UserList @updateLength="updateLength" ref="updateUserList"/>
                </div>
                <div :class="['chat-body '+chatWidth, {'float-right' : $t('nav.home') === 'الرئيسية'}]" >
                    <Placeholder v-if="$router.currentRoute.name == 'messages'"/>
                    <router-view @updateHeadChat="updateHeadChat" @openInfo="openInfo"></router-view>
                </div>
                <div :class="['info-panal '+openInfoAnimate, {'msg-info-ar' : $t('nav.home') === 'الرئيسية'}]" >
                    <CloseIcon class="close-icon" @closeAction="closeInfo"/>
                    <InfoPanal @closeInfo="closeInfo"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import UserList from '@/components/messages/UserList.vue';
import Placeholder from '@/components/messages/Placeholder.vue';
import InfoPanal from '@/components/messages/InfoPanal.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import PagePlaceholder from '@/views/PagePlaceholder.vue';
@Component({
    components: {
        DoubleBounce,
        UserList,
        Placeholder,
        InfoPanal,
        CloseIcon,
        PagePlaceholder
    },
})
export default class Messages extends Vue {
    loaderFlag = false;
    openInfoAnimate = '';
    chatWidth = '';
    messageBodyFlag = true;
    placeHolderFlag = false;
    openInfo(){
        this.openInfoAnimate = 'open-info-animate';
        this.chatWidth = 'chat-width';
    }
    closeInfo(){
        this.chatWidth = 'open-chat';
        this.openInfoAnimate = 'close-info-animate';
    }
    updateHeadChat(){
        this.$refs.updateUserList.updateUserList();
    }
    updateLength(len){
        if(len == 0){
            this.placeHolderFlag = true;
            this.messageBodyFlag = false;
        }else{
            this.placeHolderFlag = false;
            this.messageBodyFlag = true;
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
.cover-img{
    position: relative;
}
.cover-img img{
    width: 100%;
}
.cover-img h2{
    position: absolute;
    bottom: 25%;
    left: 10%;
    color: var(--font-navy);
}
.messages-inputs-body{
    width: 85%;
    margin: auto;
    overflow: hidden;
    margin-top: -14%;
}
.messages-panal{
    width: 30%;
    float: left;
    background: rgba(241, 250, 245, 1);
    height: 100vh;
    padding-top: 10%;
    margin-top: 6%;
    margin-right: 5%;
}
.placeholder-body{
    float: right;
    width: 65%;
    padding-top: 10%;
    background: rgba(249, 253, 251, 1);
    height: 100vh;
}
.chat-body{
    position: relative;
    height: 110vh;
    width: 65%;
    margin: auto;
    float: left;
    background: rgba(249, 253, 251, 1);
}
.info-panal{
    width: 0%;
    opacity: 0;
    position: absolute;
    right: 0;
    height: 110vh;
    background: rgba(249, 253, 251, 1);
}
.close-icon{
    width: 30px;
    float: right;
    margin-bottom: 40px;
    display: block;
    clear: both;
    margin-top: 30px;
    cursor: pointer;
}
.close-icon .close-icon svg{
    width: 100%;
}
.open-info-animate{
    width: 22% !important;
    opacity: 1 !important;
    transition: 0.5s;
}
.chat-width{
    width: 45% !important;
    transition: 0.5s;
}
.close-info-animate{
    width: 0% !important;
    opacity: 0 !important;
    transition: 0.5s;
}
.open-chat{
    width: 65% !important;
    transition: 0.5s;
}
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
.msg-info-ar{
    left: 0;
    right: unset !important;
}
</style>
