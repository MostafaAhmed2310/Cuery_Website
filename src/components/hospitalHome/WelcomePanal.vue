<template>
    <div class="welcome-panal-container">
        <div class="panal-profile-img">
            <img src="" alt="">
            <i class="fas fa fa-user-circle"></i>
        </div>
        <div class="welcome-panal-info">
            <h3>Hi "Hospital Name"</h3>
            <h4>Welcome Back</h4>
            <span>To Keep the body in good health is a duty .. otherwise We shall not be able to keep our mind strong and clear .</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {

    },
})
export default class WelcomePanal extends Vue {
  
}
</script>

<style scoped>
.welcome-panal-container{
    width: 100%;
    height: 180px;
    border-radius: var(--md-radius);
    background-image: url('../../assets/images/welcome-img.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 25px 50px;
    color: var(--font-navy);
    margin-bottom: 30px;
}
.panal-profile-img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: #fff;
    background: var(--main-green);
    float: left;
    margin-right: 2%;
    text-align: center;
    font-size: 48px;
    line-height: 1.5;
    margin-top: 20px;
}
.welcome-panal-info{
    float: right;
    width: 85%;
}
.welcome-panal-info h3,h4{
    margin: 10px 0px;
}
.welcome-panal-info span{
    display: block;
    width: 70%;
    font-size: 13px;
}
</style>