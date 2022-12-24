<template>
    <div class="decline-popup-container" :class="{'rtl' : $t('nav.home') === 'الرئيسية'}">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="popup-header">
            <h3 :class="{'float-right' : $t('nav.home') === 'الرئيسية'}">{{ $t("Add New Card") }}</h3>
            <i :class="{'float-left' : $t('nav.home') === 'الرئيسية'}" @click="closeDecline()" class="fas fa fa-times"></i>
        </div>
        <div class="popup-body">
            <div class="inputs-container" :class="{'rtl' : $t('nav.home') === 'الرئيسية'}">
                <h5 style="color:var(--font-navy); float:left">Card Info</h5>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder='Name Card Holder'>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder='Card Number'>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder='Expiry Date'>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder='CVV'>
                    </div>
                </form>
                <div class="btn-body">
                    <button>{{ $t("profile.save") }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class AddNewCardPopup extends Vue {
    comment = '';
    rejectionId = '1';
    commentErr = false;
    declineId = '';
    loaderFlag = false;
    closeDecline(){
        this.$emit('closePopup');
    }
    mounted() {
        this.declineId = this.$route.params.id;
    }
}
</script>

<style scoped>
.decline-popup-container{
    width: 45%;
    margin: auto;
    /* height: 50vh; */
    border-radius: 10px;
    background: #fff;
    color: var(--font-navy);
    position: absolute;
    z-index: 999;
    left: 50%;
    margin-left: -22.5%;
    top: 50%;
    margin-top: -35vh;
    padding: 30px;
}
.reason-body{
    margin-bottom: 15px;
}
.reason-body label{
    font-size: 15px;
}
.reason-body input{
    margin-right: 10px;
}
.popup-header h3{
    float: left;
}
.popup-header i{
    float: right;
    font-size: 17px;
    cursor: pointer;
}
.popup-header{
    clear: both;
    overflow: hidden;
}
.input-body{
    position: relative;
}
.input-body textarea{
    height: 75px;
    border: 1px solid var(--main-green);
    border-radius: 7px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    resize: none;
    outline: none;
}
.submit-btn button{
    width: 50%;
    height: 40px;
    background: var(--main-green);
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    display: block;
    margin: auto;
}
.submit-btn button:hover{
    opacity: 0.8;
}
.input-body span{
    font-size: 12px;
    color: var(--alert-color);
    position: absolute;
    clear: both;
    bottom: 0;
    left: 0;
}
.inputs-container form input{
    width: 100%;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 45px;
    border-radius: var(--md-radius);
    padding: 0px 20px;
    border: 1px solid var(--main-green);
    outline: none;
}
.input-field:nth-of-type(3){
    width: 49%;
    float: left;
}
.input-field:nth-of-type(4){
    width: 49%;
    float: right;
}
.btn-body{
    overflow:hidden;
    clear: both;
    display: block;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
}
.btn-body button{
    background: var(--main-green);
    color: #fff;
    border-radius: var(--sm-radius);
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 65px;
}
.btn-body button:hover{
    opacity: 0.8;
}
</style>