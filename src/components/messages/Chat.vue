<template>
    <div class="chat-container">
        <div class="chat-head">
            <div class="profile-img">
                <img src="" alt="">
                <i class="fas fa fa-user-circle"></i>
            </div>
            <div class="user-info">
                <h4>Mostafa Ahmed</h4>
            </div>
            <div class="info-icon" @click="openInfo">
                <svg xmlns="http://www.w3.org/2000/svg" id="info-circle" width="30" height="30" viewBox="0 0 43.867 43.867">
                    <path id="Path_19" data-name="Path 19" d="M21.934,41.125A19.192,19.192,0,1,0,2.742,21.934,19.192,19.192,0,0,0,21.934,41.125Zm0,2.742A21.934,21.934,0,1,0,0,21.934,21.934,21.934,0,0,0,21.934,43.867Z" fill="#30a362" fill-rule="evenodd"/>
                    <path id="Path_20" data-name="Path 20" d="M21.651,14.823l-6.62.83-.236,1.1,1.3.24c.849.2,1.018.509.833,1.356L14.794,28.375c-.56,2.593.3,3.814,2.336,3.814a5.988,5.988,0,0,0,4.235-1.728l.254-1.2a3.2,3.2,0,0,1-1.984.711c-.8,0-1.085-.558-.879-1.541Z" transform="translate(3.022 2.647)" fill="#30a362"/>
                    <path id="Path_21" data-name="Path 21" d="M21.533,10.766a2.891,2.891,0,1,1-2.891-2.891A2.891,2.891,0,0,1,21.533,10.766Z" transform="translate(3.292 1.646)" fill="#30a362"/>
                </svg>
            </div>
        </div>
        <div class="chat-msgs">
            <div v-for="message in messages" :key="message">
                <div class="msg-item" v-if="message.id == currentId">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit magni,</p>
                    <span>2:17 AM</span>
                </div>
                <div class="msg-item self-msg" v-if="message.id != currentId">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis maxime assumenda atque, quod aperiam error eos impedit voluptates numquam. Quod maiores ex aliquam veritatis repellat, quasi illo ad tempora accusamus.</p>
                    <span>2:17 AM</span>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <div class="send-icon">
                <svg xmlns="http://www.w3.org/2000/svg" id="send_icon" data-name="send icon" width="35" height="35" viewBox="0 0 47.867 47.867">
                    <circle id="Ellipse_4" data-name="Ellipse 4" cx="23.934" cy="23.934" r="23.934" transform="translate(0 0)" fill="#30a362"/>
                    <path id="send" d="M23.136,11.932l-.007,0L2.719,3.463a1.126,1.126,0,0,0-1.062.1,1.178,1.178,0,0,0-.532.984V9.965a1.147,1.147,0,0,0,.933,1.126L13.19,13.149a.191.191,0,0,1,0,.376L2.058,15.583a1.147,1.147,0,0,0-.933,1.126v5.415a1.126,1.126,0,0,0,.506.941,1.144,1.144,0,0,0,.632.191,1.173,1.173,0,0,0,.455-.092l20.409-8.417.009,0a1.529,1.529,0,0,0,0-2.81Z" transform="translate(13.028 10.569)" fill="#fff"/>
                </svg>
            </div>
            <textarea placeholder="Send Your Message"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {

    },
})
export default class Chat extends Vue {
    currentId:any = 1;
    messages:any[] = [
        {id:1},
        {id:1},
        {id:2},
        {id:1},
        {id:2},
        {id:1},
        {id:2},
        {id:2},
        {id:1},
        {id:2},
        {id:1},
        {id:2},
        {id:1},
        {id:2},
        {id:1},
    ]
    openInfo(){
        this.$emit('openInfo');
    }
}
</script>

<style scoped>
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
    float: left;
    color: var(--font-navy);
    line-height: 3;
}
.user-info h4{
    margin: 0px 0px 5px 0px;
}
.chat-head{
    overflow: hidden;
    background: #fff;
    padding: 20px;
}
.info-icon{
    float: right;
    margin-top: 10px;
    cursor: pointer;
}
.chat-msgs{
    height: 80vh;
    overflow: auto;
    padding: 30px;
}
.msg-item{
    width: 60%;
    padding: 15px;
    border-radius: var(--md-radius);
    background: #fff;
    font-size: 14px;
    margin-bottom: 20px;
    color: var(--font-navy);
    clear: both;
    display: block;
}
.msg-item span{
    float: right;
    margin-top: -20px;
    font-size: 11px;
    color: var(--main-green);
}
.self-msg{
    background: rgba(241, 250, 245, 1);
    float: right;
}
.chat-input{
    position: relative;
}
.chat-input textarea{
    width: 90%;
    border-radius: var(--lg-radius);
    border: 1.5px solid var(--main-green);
    resize: none;
    height: 80px;
    margin: auto;
    display: block;
    padding: 20px;
    outline: none;
}
.send-icon{
    position: absolute;
    right: 60px;
    top: 20px;
    cursor: pointer;
}
.send-icon:hover{
    opacity: 0.9;
}
</style>