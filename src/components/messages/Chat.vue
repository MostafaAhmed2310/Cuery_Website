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
    margin-top: -5%;
    height: 100px;
}
</style>