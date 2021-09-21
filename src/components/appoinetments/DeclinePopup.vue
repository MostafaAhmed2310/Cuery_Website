<template>
    <div class="decline-popup-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="popup-header">
            <h3>What Do You Want To Report?</h3>
            <i @click="closeDecline()" class="fas fa fa-times"></i>
        </div>
        <div class="popup-body">
            <div class="reason-body">
                <input type="radio" id="1" value="1" v-model="rejectionId">
                <label for="1">The service provider has not arrived</label>
            </div>
            <div class="reason-body">
                <input type="radio" id="2" value="2" v-model="rejectionId">
                <label for="2">He did not take his money for the service provided</label>
            </div>
            <div class="reason-body">
                <input type="radio" id="3" value="3" v-model="rejectionId">
                <label for="3">Bad service provider</label>
            </div>
            <div class="reason-body">
                <input type="radio" id="4" value="4" v-model="rejectionId">
                <label for="4">Other</label>
            </div>
            <div class="input-body">
                <textarea placeholder="Comment" v-model="comment"></textarea>
                <span v-if="commentErr">Please Leave a comment</span>
            </div>
            <div class="submit-btn">
                <button @click="declineWithReason()">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {declineReservation} from '@/endpoints/reservations';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class DeclinePopup extends Vue {
    comment = '';
    rejectionId = '1';
    commentErr = false;
    declineId = '';
    loaderFlag = false;
    closeDecline(){
        this.$emit('closePopup');
    }
    updateDeclineId(declineId){
        this.declineId = declineId;
    }
    async declineWithReason(){
        if(this.comment == '' || this.comment.trim() == ''){
            this.commentErr = true;
        }else{
            let declineObj = {
                rejection_reason_id: this.rejectionId,
                rejection_reason: this.comment,
            }
            this.loaderFlag = true;
            let res = await declineReservation(this.declineId, declineObj);
            this.loaderFlag = false;
            if(res){
                this.closeDecline();
                if(this.$router.currentRoute.name == 'ReservationItem' || this.$router.currentRoute.name == 'reservations'){
                    this.$emit('updateReservationsList');
                    this.$router.push('/reservations');
                }else if(this.$router.currentRoute.name == 'hospitalHome'){
                    this.$emit('updateLatestReservations');
                    this.$router.push('/hospital_home');
                }else{
                    this.$emit('updateAppointmentList');
                    this.$router.push('/appoinetments');
                }
            }
        }
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
</style>