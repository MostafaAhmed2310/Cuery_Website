<template>
    <div class="info-panal-container">
        <div class="info-card">
            <div class="profile-info">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <p>Mostafa Ahmed</p>
            </div>
            <button @click="closeInfo()">{{ $t("messages.back_to_con") }}</button>
            <div class="personal-info">
                <p>Section Name</p>
                <p>{{ $t("messages.phone") }} 0123456789</p>
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
export default class InfoPanal extends Vue {
    closeInfo(){
        this.$emit('closeInfo');
    }
}
</script>

<style scoped>
.info-panal-container{
    position: relative;
    clear: both;
}
.info-card{
    position: relative;
    width: 85%;
    margin: auto;
    background: #fff;
    box-shadow: 0px 1px 2px 0px #ddd;
    padding: 30px;
    border-radius: var(--md-radius);
}
.profile-info{
    text-align: center;
    color: var(--font-navy);
    font-weight: bold;
}
.profile-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: var(--main-green);
    color: #fff;
    font-size: 35px;
    text-align: center;
    line-height: 1.5;
    margin: auto;
}
.info-card button{
    padding: 10px 20px;
    background: var(--main-green);
    color: #fff;
    border-radius: var(--sm-radius);
    outline: none;
    border: 0;
    cursor: pointer;
    margin: auto;
    display: block;
    clear: both;
    margin-bottom: 20px;
    width: 100%;
}
.info-card button:hover{
    opacity: 0.8;
}
.personal-info{
    font-size: 12px;
    color: var(--font-navy);
}
</style>