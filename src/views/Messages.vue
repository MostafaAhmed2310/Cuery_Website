<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="messages-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>Messages</h2>
            </div>
            <div class="messages-inputs-body">
                <div class="messages-panal">
                    <UserList/>
                </div>
                <div class="chat-body">
                    <Placeholder v-if="$router.currentRoute.name == 'messages'"/>
                    <router-view></router-view>
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
@Component({
    components: {
        DoubleBounce,
        UserList,
        Placeholder,
    },
})
export default class Messages extends Vue {
    loaderFlag = false;
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
    margin-top: -10%;
}
.messages-panal{
    width: 30%;
    float: left;
    background: rgba(241, 250, 245, 1);
    height: 100vh;
    padding-top: 10%;
}
.chat-body{
    float: right;
    width: 65%;
    padding-top: 10%;
    background: rgba(249, 253, 251, 1);
    height: 100vh;
}

</style>
