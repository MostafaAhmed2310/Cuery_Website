<template>
    <div class="reservations-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservations-body">
            <div class="cover-img">
                <img :class="{'mirror-img' : $t('nav.home') === 'الرئيسية'}" src="@/assets/images/profile-cover.png" alt="">
                <h2 :class="{'rtl pages-title-ar' : $t('nav.home') === 'الرئيسية'}">
                    <router-link to="/hospital_home">
                        <i :class="{'rotate-icon' : $t('nav.home') === 'الرئيسية'}" class="fas fa-chevron-left"></i> 
                    </router-link>
                    {{ $t("nav.my_wallet") }}
                </h2>
            </div>
            <div v-if="placeHolderFlag">
                <PagePlaceholder/>
            </div>
            <div class="reservations-inputs-body" v-if="reservationBodyFlag">
                <div class="reservations-panal">
                    <div class="my-wallet-container">
                        <h3>Balance</h3>
                        <h1>200 <span>EGP</span></h1>
                        <p>Currently Credit in Wallet</p>
                    </div>
                </div>
                <div class="reservation-body">
                    <div class="card-view">
                        <h4 style="color:var(--font-navy);">Current Card Use</h4>
                        <VisaCard/>
                    </div>
                    <div class="cards-inputs width-50">
                        <h5 style="color:var(--font-navy); float:left">Your Cards</h5>
                        <h5 @click="openAddCardPopup()" style="color:var(--main-green); float:right; cursor:pointer">Add Card</h5>
                        <div class="card-item" v-for="card in cards" :key="card">
                            <i v-if="card.type == 'cash'" class="fa-solid fa fa-money-bill"></i>
                            <img v-if="card.type == 'mastercard'" class="mastercard" src="@/assets/images/mastercard.png" alt="">
                            <img v-if="card.type == 'visa'" class="visa" src="@/assets/images/visa.png" alt="">
                            <span>{{card.text}}</span>
                        </div>
                    </div>
                </div>
                <div class="popup-overlay" v-if="newCardPopup">
                    <AddNewCardPopup @closePopup="closePopup"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ReservationsHistoryList from '@/components/reservationHistory/ReservationsHistoryList.vue';
import PagePlaceholder from '@/views/PagePlaceholder.vue';
import VisaCard from '@/assets/icons/VisaCard.vue';
import AddNewCardPopup from '@/components/wallet/AddNewCardPopup.vue';

@Component({
    components: {
        ReservationsHistoryList,
        PagePlaceholder,
        VisaCard,
        AddNewCardPopup
    },
})
export default class MyWallet extends Vue {
    loaderFlag:Boolean = false;
    placeHolderFlag:Boolean = false;
    reservationBodyFlag:Boolean = true;
    cards: any[] = [
        {text: "Cash", type: 'cash'},
        {text: "• • • • • • • •  • • • •  5461 ", type: 'mastercard'},
        {text: "• • • • • • • •  • • • •  1620 ", type: 'visa'}
    ];
    newCardPopup: Boolean = false;
    openAddCardPopup() {
        this.newCardPopup = true;
    }
    closePopup(){
        this.newCardPopup = false;
    }
    updateLength(len:any){
        if(len == 0){
            this.placeHolderFlag = true;
            this.reservationBodyFlag = false;
        }else{
            this.placeHolderFlag = false;
            this.reservationBodyFlag = true;
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
.reservations-inputs-body{
    width: 85%;
    margin: auto;
    overflow: hidden;
    margin-top: -14%;
}
.reservations-panal{
    width: 30%;
    float: left;
    background: rgba(241, 250, 245, 1);
    height: 100vh;
    padding-top: 10%;
    margin-top: 6%;
    margin-right: 5%;
}
.calendar{
    position: absolute;
    bottom: 60px;
    right: 190px;
}
.reservation-body{
    width: 65%;
    float: left;
    background: rgba(249, 253, 251, 1);
    height: 110vh;
    padding: 20% 50px 0px 50px;
}
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
.my-wallet-container{
    padding: 20px;
}
.my-wallet-container h3{
    color: var(--font-navy);
}
.my-wallet-container h1{
    text-align: center;
}
.my-wallet-container p{
    text-align: center;
    font-size: 13px;
    color: var(--font-navy);
    font-weight: bold;
}
.my-wallet-container h1{
    color: var(--main-green);
}
.my-wallet-container h1 span{
    color: var(--font-navy);
}
.card-item{
    width: 100%;
    border: 1px solid var(--main-green);
    border-radius: 5px;
    margin-top: 20px;
    height: 45px;
    padding: 0 20px;
    color: var(--font-navy);
    clear: both;
    display: block;
}
.card-item i{
    color: var(--main-green);
    font-size: 20px;
    line-height: 2;
    float: left;
}
.card-item img{
    float: left;
}
.card-item span{
    margin: 0 20px;
    font-size: 13px;
    font-weight: bold;
    line-height: 3;
}
.mastercard{
    margin-top: 7px;
}
.visa{
    margin-top: 13px;
}
.width-50{
    width: 50%;
}
.popup-overlay{
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
}
</style>