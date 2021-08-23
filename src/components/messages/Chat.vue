<template>
    <div class="chat-container">
        <div class="chat-head">
            <div class="profile-img">
                <img src="" alt="">
                <i class="fas fa fa-user-circle"></i>
            </div>
            <div class="user-info">
                <h4>{{this.conversation.sender_name}}</h4>
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
                <div class="msg-item" v-if="message.user_id != currentId">
                    <p v-if="message.message_type_id == 1">{{message.body}}</p>
                    <div class="img-container" v-if="message.message_type_id == 2">
                        <p v-if="message.body">{{message.body}}</p>
                        <img v-if="message.attachments[0]" :src="BaseUrl + message.attachments[0].attachment_path" alt="Image">
                    </div>
                    <div class="audio-container" v-if="message.message_type_id == 3">
                        <p  v-if="message.body">{{message.body}}</p>
                        <audio controls v-if="message.attachments[0]">
                            <source :src="BaseUrl + message.attachments[0].attachment_path" type="audio/ogg">
                            <source :src="BaseUrl + message.attachments[0].attachment_path" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="file-container" v-if="message.message_type_id == 4">
                        <p  v-if="message.body">{{message.body}}</p>
                        <iframe v-if="message.attachments[0]" :src="BaseUrl + message.attachments[0].attachment_path" frameborder="0"></iframe>
                    </div>
                    <span>{{message.created_at | moment("h:mm a")}}</span>
                </div>
                <div class="msg-item self-msg" v-if="message.user_id == currentId">
                    <i class="fas fa-trash" @click="deleteMsg(message.id)"></i>
                    <p v-if="message.message_type_id == 1">{{message.body}}</p>
                    <div class="img-container" v-if="message.message_type_id == 2">
                        <p v-if="message.body">{{message.body}}</p>
                        <img v-if="message.attachments[0]" :src="BaseUrl + message.attachments[0].attachment_path" alt="Image">
                    </div>
                    <div class="audio-container" v-if="message.message_type_id == 3">
                        <p  v-if="message.body">{{message.body}}</p>
                        <audio controls v-if="message.attachments[0]">
                            <source :src="BaseUrl + message.attachments[0].attachment_path" type="audio/ogg">
                            <source :src="BaseUrl + message.attachments[0].attachment_path" type="audio/mpeg">
                        </audio>      
                    </div>
                    <div class="file-container" v-if="message.message_type_id == 4">
                        <p  v-if="message.body">{{message.body}}</p>
                        <iframe v-if="message.attachments[0]" :src="BaseUrl + message.attachments[0].attachment_path" frameborder="0"></iframe>
                    </div>
                    <span>{{message.created_at | moment("h:mm a")}}</span>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <div class="inputs-body">
                <div class="upload-ions">
                    <i class="far fa-image"></i>
                    <input type="file" name="" id="" @change="uploadAttachment(2)">
                </div>
                <div class="upload-ions">
                    <i class="fas fa-volume-up"></i>
                    <input type="file" name="" id="" @change="uploadAttachment(3)">
                </div>
                <div class="upload-ions">
                    <i class="fas fa-paperclip"></i>
                    <input type="file" name="" id="" @change="uploadAttachment(4)">
                </div>
            </div>
            <div class="send-icon" @click="sendMsg($route.params.id)">
                <svg xmlns="http://www.w3.org/2000/svg" id="send_icon" data-name="send icon" width="35" height="35" viewBox="0 0 47.867 47.867">
                    <circle id="Ellipse_4" data-name="Ellipse 4" cx="23.934" cy="23.934" r="23.934" transform="translate(0 0)" fill="#30a362"/>
                    <path id="send" d="M23.136,11.932l-.007,0L2.719,3.463a1.126,1.126,0,0,0-1.062.1,1.178,1.178,0,0,0-.532.984V9.965a1.147,1.147,0,0,0,.933,1.126L13.19,13.149a.191.191,0,0,1,0,.376L2.058,15.583a1.147,1.147,0,0,0-.933,1.126v5.415a1.126,1.126,0,0,0,.506.941,1.144,1.144,0,0,0,.632.191,1.173,1.173,0,0,0,.455-.092l20.409-8.417.009,0a1.529,1.529,0,0,0,0-2.81Z" transform="translate(13.028 10.569)" fill="#fff"/>
                </svg>
            </div>
            <textarea placeholder="Send Your Message" v-model="msgBody"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getUserConversation, sendMsg, deleteMsg } from '@/endpoints/messages';
import {getUserInfo} from '@/endpoints/user';
import {BaseUrl} from '@/app.config';

@Component({
    components: {

    },
})
export default class Chat extends Vue {
    msg:any='';
    data:any = {};
    msgBody:String = '';
    messages:any[] = [];
    conversation:any={};
    profileObj:any = {};
    currentId:any = '';
    uploadFile:any = {};
    fileData:any= [];
    message_type_id:Number = 1;
    extension:any = '';
    base64Str:any  ='';
    imgPreview:Boolean = false;
    txtPreview:Boolean = false;
    fileFile:any = {}
    BaseUrl:any = BaseUrl
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange() {
        let id =this.$route.params.id
        this.getUserConversation(id)
    }
    openInfo(){
        this.$emit('openInfo');
    }
    async getUserConversation(userId:any){
        let currentUserObj = await getUserInfo();
        this.currentId= currentUserObj.id
        this.conversation = await getUserConversation(userId);
        this.messages = this.conversation.messages;
    }

    uploadAttachment(message_type_id:any){
        this.uploadFile = (<any>event).target;
        if (this.uploadFile.files && this.uploadFile.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.fileData = (<any>e.target).result;
                this.message_type_id=message_type_id
                this.extension = this.fileData.split(";")[0].split("/")[1]
                this.base64Str = this.fileData.split(",")[1]
            }
            reader.readAsDataURL(this.uploadFile.files[0]);
            this.fileFile = this.uploadFile.files[0];
            if(message_type_id== 2){
                this.imgPreview = true
                this.txtPreview = false
            }else{
                this.imgPreview = false
                this.txtPreview = true
            }
        }
    }

    async sendMsg(userId:any){
        if(this.message_type_id == 1){
            this.data = {
                body:this.msgBody,
                message_type_id:this.message_type_id,
            }
        }else{
            this.data = {
                body:this.msgBody,
                message_type_id:this.message_type_id,
                ext: this.extension,
                file: this.base64Str,
            }
        }
        let res = await sendMsg(userId,this.data);
        if(res){
            this.message_type_id = 1;
            this.fileFile = '';
            this.uploadFile = '';
            this.fileData = '';
            this.base64Str = '';
            this.extension = '';
        }
        this.getUserConversation(this.$route.params.id);
        this.msgBody = ''
        this.$emit('updateHeadChat');
    }

    deleteMsg(msgId:any){
        deleteMsg(msgId);
        this.getUserConversation(this.$route.params.id);
        this.$emit('updateHeadChat');
    }

    mounted(){
        this.getUserConversation(this.$route.params.id);
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
    height: 55vh;
    overflow: auto;
    padding: 30px;
    margin-bottom: 15px;
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
    overflow: hidden;
}
.msg-item span{
    float: right;
    margin-top: 10px;
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
    padding-right: 165px;
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
input[type=file]{ 
   position: absolute;
   width: 100%;
   height: 100%;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   opacity: 0;
   cursor: pointer;
}
.upload-ions{
    width: 30px;
    height: 30px;
    position: relative;
    display: inline-block;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    background: var(--main-green);
    line-height: 2;
    margin-right: 10px;
    cursor: pointer;
}
.inputs-body{
    position: absolute;
    top: 22px;
    right: 95px;
}
.img-container img{
    width: 85%;
    height: auto;
    border-radius: 3px;
}
.fa-trash{
    float: right;
    cursor: pointer;
}
.audio-container audio{
    width: 85%;
}
.file-container iframe{
    width: 85%;
    height: auto;
}
</style>