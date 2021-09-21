<template>
    <div class="services-container">
        <h1>{{ $t("services") }}<br> {{ $t("we_provides") }}</h1>
        <div class="cards-container">
            <div class="cards-info">
                <div v-if="service1">
                    <h2>{{ sectionsList[0].section_title}}</h2>
                    <p v-if="sectionsList[0].section_description">{{ sectionsList[0].section_description}}</p>
                    <p v-if="!sectionsList[0].section_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum beatae inventore iste odio labore soluta maiores ducimus perferendis modi</p>
                </div>
                <div v-if="service2">
                    <h2>{{ sectionsList[1].section_title}}</h2>
                    <p v-if="sectionsList[1].section_description">{{ sectionsList[0].section_description}}</p>
                    <p v-if="!sectionsList[1].section_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum beatae inventore iste odio labore soluta maiores ducimus perferendis modi</p>                </div>
                <div v-if="service3">
                    <h2>{{ sectionsList[2].section_title}}</h2>
                    <p v-if="sectionsList[2].section_description">{{ sectionsList[0].section_description}}</p>
                    <p v-if="!sectionsList[2].section_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum beatae inventore iste odio labore soluta maiores ducimus perferendis modi</p>
                </div>
                <div v-if="service4">
                    <h2>{{ sectionsList[3].section_title}}</h2>
                    <p v-if="sectionsList[3].section_description">{{ sectionsList[0].section_description}}</p>
                    <p v-if="!sectionsList[3].section_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum beatae inventore iste odio labore soluta maiores ducimus perferendis modi</p>
                </div>
                <div v-if="service5">
                    <h2>{{ sectionsList[4].section_title}}</h2>
                    <p v-if="sectionsList[4].section_description">{{ sectionsList[0].section_description}}</p>
                    <p v-if="!sectionsList[4].section_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum beatae inventore iste odio labore soluta maiores ducimus perferendis modi</p>
                </div>
                <div v-if="service6">
                    <h2>{{ sectionsList[5].section_title}}</h2>
                    <p v-if="sectionsList[5].section_description">{{ sectionsList[0].section_description}}</p>
                    <p v-if="!sectionsList[5].section_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum beatae inventore iste odio labore soluta maiores ducimus perferendis modi</p>
                </div>
                <div class="arrow-btns">
                    <span @click="leftAction()"><i class="fas fa fa-sort-up"></i></span>
                    <span @click="rightAction()"><i class="fas fa fa-sort-up"></i></span>
                </div>
            </div>
            <div class="cards-body">
                <div class="cards-line">
                    <div :class="'card-item '+ heartActive" @click="toggleServices(1)">
                        <img src="@/assets/images/services/cardiogram.png" alt="" v-if="originalCardiogram">
                        <img src="@/assets/images/services/active/cardiogram.png" alt="" v-if="activeCardiogram">
                    </div>
                    <div :class="'card-item '+ cancerActive" @click="toggleServices(4)">
                        <img src="@/assets/images/services/cancer.png" alt="" v-if="originalCancer">
                        <img src="@/assets/images/services/active/cancer.png" alt="" v-if="activeCancer">
                    </div>
                </div>
                <div class="cards-line">
                    <div :class="'card-item '+ roomActive" @click="toggleServices(2)">
                        <img src="@/assets/images/services/rooms.png" alt="" v-if="originalRooms">
                        <img src="@/assets/images/services/active/rooms.png" alt="" v-if="activeRooms">
                    </div>
                    <div :class="'card-item '+ xrayActive" @click="toggleServices(5)">
                        <img src="@/assets/images/services/x-ray.png" alt="" v-if="originalXray">
                        <img src="@/assets/images/services/active/x-ray.png" alt="" v-if="activeXray">
                    </div>
                </div>
                <div class="cards-line">
                    <div :class="'card-item '+ brainActive" @click="toggleServices(3)">
                        <img src="@/assets/images/services/brain.png" alt="" v-if="originalBrain">
                        <img src="@/assets/images/services/active/brain.png" alt="" v-if="activeBrain">
                    </div>
                    <div :class="'card-item '+ bloodActive" @click="toggleServices(6)">
                        <img src="@/assets/images/services/blood.png" alt="" v-if="originalBlood">
                        <img src="@/assets/images/services/active/blood.png" alt="" v-if="activeBlood">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getSectionsList } from '@/endpoints/static_pages';


@Component({
    components: {

    },
})
export default class Services extends Vue {
    service1:Boolean = true;
    service2:Boolean = false;
    service3:Boolean = false;
    service4:Boolean = false;
    service5:Boolean = false;
    service6:Boolean = false;

    localNum:any = 1;

    sectionsList = [];

    heartActive:String = 'active';
    cancerActive:String = '';
    roomActive:String = '';
    xrayActive:String = '';
    brainActive:String = '';
    bloodActive:String = '';

    originalCardiogram:Boolean = false;
    originalCancer:Boolean = true;
    originalRooms:Boolean = true;
    originalXray:Boolean = true;
    originalBrain:Boolean = true;
    originalBlood:Boolean = true;

    activeCardiogram:Boolean = true;
    activeCancer:Boolean = false;
    activeRooms:Boolean = false;
    activeXray:Boolean = false;
    activeBrain:Boolean = false;
    activeBlood:Boolean = false;

    rightAction(){
        if(this.localNum == 6){
            this.localNum = 1
            this.toggleServices(this.localNum)
        }else {
            this.localNum++
            this.toggleServices(this.localNum)
        }
    }

    leftAction(){
        if(this.localNum == 1){
            this.localNum = 6
            this.toggleServices(this.localNum)
        }else {
            this.localNum--
            this.toggleServices(this.localNum)
        }
    }

    switchSliderAuto(){
        setInterval(() => {
            this.rightAction()
        }, 3000);
    }
    async getSectionsList(){
        this.sectionsList = await getSectionsList();
    }
    mounted(){
        this.switchSliderAuto()
        this.getSectionsList()
    }

    toggleServices(slideNum:Number){
        this.localNum = slideNum
        if(slideNum == 1){
            this.service1 = true
            this.service2 = false
            this.service3 = false
            this.service4 = false
            this.service5 = false
            this.service6 = false

            this.heartActive = 'active'
            this.cancerActive = ''
            this.roomActive = ''
            this.xrayActive = ''
            this.brainActive = ''
            this.bloodActive = ''

            this.originalCardiogram = false;
            this.originalCancer = true;
            this.originalRooms = true;
            this.originalXray = true;
            this.originalBrain = true;
            this.originalBlood = true;

            this.activeCardiogram = true;
            this.activeCancer = false;
            this.activeRooms = false;
            this.activeXray = false;
            this.activeBrain = false;
            this.activeBlood = false;
        }else if(slideNum == 2){
            this.service1 = false
            this.service2 = true
            this.service3 = false
            this.service4 = false
            this.service5 = false
            this.service6 = false

            this.heartActive = ''
            this.cancerActive = ''
            this.roomActive = 'active'
            this.xrayActive = ''
            this.brainActive = ''
            this.bloodActive = ''

            this.originalCardiogram = true;
            this.originalCancer = true;
            this.originalRooms = false;
            this.originalXray = true;
            this.originalBrain = true;
            this.originalBlood = true;

            this.activeCardiogram = false;
            this.activeCancer = false;
            this.activeRooms = true;
            this.activeXray = false;
            this.activeBrain = false;
            this.activeBlood = false;
        }else if(slideNum == 3){
            this.service1 = false
            this.service2 = false
            this.service3 = true
            this.service4 = false
            this.service5 = false
            this.service6 = false

            this.heartActive = ''
            this.cancerActive = ''
            this.roomActive = ''
            this.xrayActive = ''
            this.brainActive = 'active'
            this.bloodActive = ''

            this.originalCardiogram = true;
            this.originalCancer = true;
            this.originalRooms = true;
            this.originalXray = true;
            this.originalBrain = false;
            this.originalBlood = true;

            this.activeCardiogram = false;
            this.activeCancer = false;
            this.activeRooms = false;
            this.activeXray = false;
            this.activeBrain = true;
            this.activeBlood = false;
        }else if(slideNum == 4){
            this.service1 = false
            this.service2 = false
            this.service3 = false
            this.service4 = true
            this.service5 = false
            this.service6 = false

            this.heartActive = ''
            this.cancerActive = 'active'
            this.roomActive = ''
            this.xrayActive = ''
            this.brainActive = ''
            this.bloodActive = ''

            this.originalCardiogram = true;
            this.originalCancer = false;
            this.originalRooms = true;
            this.originalXray = true;
            this.originalBrain = true;
            this.originalBlood = true;

            this.activeCardiogram = false;
            this.activeCancer = true;
            this.activeRooms = false;
            this.activeXray = false;
            this.activeBrain = false;
            this.activeBlood = false;
        }else if(slideNum == 5){
            this.service1 = false
            this.service2 = false
            this.service3 = false
            this.service4 = false
            this.service5 = true
            this.service6 = false

            this.heartActive = ''
            this.cancerActive = ''
            this.roomActive = ''
            this.xrayActive = 'active'
            this.brainActive = ''
            this.bloodActive = ''

            this.originalCardiogram = true;
            this.originalCancer = true;
            this.originalRooms = true;
            this.originalXray = false;
            this.originalBrain = true;
            this.originalBlood = true;

            this.activeCardiogram = false;
            this.activeCancer = false;
            this.activeRooms = false;
            this.activeXray = true;
            this.activeBrain = false;
            this.activeBlood = false;
        }else if(slideNum == 6){
            this.service1 = false
            this.service2 = false
            this.service3 = false
            this.service4 = false
            this.service5 = false
            this.service6 = true

            this.heartActive = ''
            this.cancerActive = ''
            this.roomActive = ''
            this.xrayActive = ''
            this.brainActive = ''
            this.bloodActive = 'active'

            this.originalCardiogram = true;
            this.originalCancer = true;
            this.originalRooms = true;
            this.originalXray = true;
            this.originalBrain = true;
            this.originalBlood = false;

            this.activeCardiogram = false;
            this.activeCancer = false;
            this.activeRooms = false;
            this.activeXray = false;
            this.activeBrain = false;
            this.activeBlood = true;
        }
    }
}
</script>

<style scoped>
.services-container{
    width: 80%;
    margin: auto;
    overflow: hidden;
    position: relative;
    clear: both;
}
.services-container h1{
    color: var(--font-navy);
    width: 180px;
    line-height: 1.5;
}
.cards-info{
    width: 40%;
    float: left;
}
.cards-info h2{
    color: var(--main-green);
}
.cards-info p{
    color: var(--font-navy);
    font-size: 15px;
    line-height: 1.8;
    min-height: 130px;
}
.cards-body{
    width: 50%;
    float: right;
}
.card-item{
    width: 130px;
    height: 130px;
    border-radius: var(--md-radius);
    box-shadow: 2px 3px 5px 1px #ddd;
    padding: 15px;
    float: left;
    margin-right: 30px;
    margin-bottom: 30px;
    cursor: pointer;
}
.card-item img{
    width: 80%;
    margin: auto;
    display: block;
}
.cards-line:nth-of-type(1) .card-item:nth-of-type(1) img{
    margin-top: 15px;
}
.cards-line:nth-of-type(2) .card-item:nth-of-type(1) img{
    margin-top: 15px;
}
.cards-line:nth-of-type(1) .card-item:nth-of-type(2) img{
    width: 60%;
}
.cards-line{
    float: left;
    overflow: hidden;
    width: 160px;
}
.cards-line:nth-of-type(2){
    margin-top: 20px;
}
.cards-line:nth-of-type(3){
    margin-top: 35px;
}
.arrow-btns{
    position: relative;
    text-align: center;
}
.arrow-btns span{
    width: 40px;
    height: 40px;
    display: inline-block;
    color: var(--main-green);
    border-radius: var(--sm-radius);
    font-size: 35px;
    line-height: 1.4;
    position: relative;
    cursor: pointer;
}
.arrow-btns span:hover,
.arrow-btns span:active,
.arrow-btns span:focus{
    box-shadow: 2px 3px 5px 1px #ddd;
}
.arrow-btns span:nth-of-type(1){
    margin-right: 30px;
}
.arrow-btns span:nth-of-type(1) i{
    transform: rotate(-90deg);
    position: absolute;
    top: 2px;
    left: 15px;
}
.arrow-btns span:nth-of-type(2) i{
    transform: rotate(90deg);
    position: absolute;
    top: 2px;
    right: 15px;
}
.active{
    background: var(--main-green);
    transition: 0.8s;
}
</style>
