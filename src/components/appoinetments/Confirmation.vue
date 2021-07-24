<template>
    <div class="confirmation-code-container">
        <div class="confirmation-code-body">
            <div class="card-title">
                <i class="fas fa fa-check"></i>
                <h4>CONFIRMATION</h4>
            </div>
            <div class="card-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="28.27" height="21.339" viewBox="0 0 38.27 31.339">
                    <path id="mobile_icon_" data-name="mobile icon " d="M26.639,31.339H12.065a2.88,2.88,0,0,1-2.087-.834,2.731,2.731,0,0,1-.856-2.033V2.868A2.734,2.734,0,0,1,9.979.833,2.874,2.874,0,0,1,12.065,0H26.639a2.878,2.878,0,0,1,2.087.834,2.726,2.726,0,0,1,.855,2.034v25.6a2.73,2.73,0,0,1-.856,2.034,2.871,2.871,0,0,1-2.083.833ZM12.065,27.072H26.639V4.268H12.065ZM34.1,20.2a6.421,6.421,0,0,0,1.984-4.667A6,6,0,0,0,34.1,11l1.437-1.467A8.192,8.192,0,0,1,38.27,15.67a7.784,7.784,0,0,1-2.737,6ZM0,15.67A8.19,8.19,0,0,1,2.737,9.535L4.174,11A6,6,0,0,0,2.19,15.537,6.421,6.421,0,0,0,4.174,20.2L2.737,21.671A7.782,7.782,0,0,1,0,15.67ZM31.018,17.2a2.474,2.474,0,0,0,0-3.267l1.437-1.4a4.383,4.383,0,0,1,1.369,3.134,3.959,3.959,0,0,1-1.369,3ZM4.448,15.67a4.384,4.384,0,0,1,1.369-3.134l1.437,1.4a2.474,2.474,0,0,0,0,3.267L5.816,18.67A3.959,3.959,0,0,1,4.448,15.67Z" fill="#2e3a60"/>
                </svg>
                <span>Please Type the Verification Code We Sent to +0123456789</span>
            </div>
            <div class="numbers-panal">
                <input type="number" v-model="num1" placeholder="-">
                <input type="number" v-model="num2" placeholder="-">
                <input type="number" v-model="num3" placeholder="-">
                <input type="number" v-model="num4" placeholder="-">
            </div>
            <h5>Resend Code</h5>
            <div class="confirm-btn">
                <button @click="confirmPatient()">Confirm <i class="fas fa fa-sort-up"></i></button>
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
export default class Confirmation extends Vue {
    confirmPatient(){
        this.$router.push('/success_page');
    }
}
</script>

<style scoped>
.confirmation-code-container{
    width: 60%;
    height: 55vh;
    margin: auto;
    background: rgba(241, 250, 245, 1);
    border-radius: var(--md-radius);
    box-shadow: 0px 1px 2px 0px #ddd;
}
.confirmation-code-body{
    width: 80%;
    margin: auto;
    padding: 10% 0px;
}
.card-title{
    width: 60%;
    margin: auto;
    color: var(--main-green);
    overflow: hidden;
    clear: both;
    margin-bottom: 30px;
}
.card-title i{
    float: left;
    margin-right: 10%;
}
.card-title h4{
    margin: 0;
}
.card-info{
    overflow: hidden;
    clear: both;
    width: 65%;
    margin: auto;
    margin-bottom: 30px;
}
.card-info svg{
    float: left;
    margin-right: 5%;
    margin-top: 10px;
}
.card-info span{
    font-size: 11px;
    color: var(--font-navy);
}
.numbers-panal{
    width: 70%;
    margin: auto;
    height: 8vh;
    background: var(--main-green);
    border-radius: var(--sm-radius);
    padding: 3%;
    text-align: center;
}
.numbers-panal input{
    width: 16%;
    height: 5vh;
    float: left;
    text-align: center;
    border: none;
    outline: none;
    border-radius: var(--sm-radius);
    margin-left: 7.5%;
}
.confirmation-code-body h5{
    cursor: pointer;
    color: var(--font-navy);
    width: 70%;
    margin: auto;
    margin-top: 20px;
}
.confirmation-code-body h5:hover{
    text-decoration: underline;
}
.confirm-btn{
    clear: both;
    overflow: hidden;
    text-align: center;
    margin-top: 30px;
}
.confirm-btn button{
    padding: 10px 20px;
    background: var(--main-green);
    color: #fff;
    outline: none;
    border-radius: var(--sm-radius);
    cursor: pointer;
    border: none;
}
.confirm-btn button:hover{
    opacity: 0.8;
}
.confirm-btn button i{
    transform: rotate(90deg);
}
</style>