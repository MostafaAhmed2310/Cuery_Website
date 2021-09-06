<template>
    <div class="page-placeholder-container">
        <div class="placeholder-card">
            <div class="placeholder-icon">
                <img v-if="$router.currentRoute.name == 'Sections'" src="@/assets/images/SectionPlaceholder.png" alt="">
                <Emergency v-if="$router.currentRoute.name == 'emergency'"/>
                <AppoinetmentsSVG v-if="$router.currentRoute.name == 'appoinetments'"/>
            </div>
            <div class="card-info">
                <h4>{{mainTitle}}</h4>
                <span>Please Wait ..</span>
                <span>{{placeholderTxt}}</span>
            </div>
            <div class="placeholder-btns">
                <router-link v-if="$router.currentRoute.name == 'Sections'" to="/add-section"><button>Add Sections</button></router-link>
                <router-link v-if="$router.currentRoute.name == 'emergency'" to="/add-emergency-section"><button>Add Sections</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Emergency from '@/assets/icons/Emergency.vue';
import AppoinetmentsSVG from '@/assets/icons/AppoinetmentsSVG.vue';
@Component({
    components: {
        Emergency,
        AppoinetmentsSVG,
    },
})
export default class PagePlaceholder extends Vue {
    mainTitle = '';
    placeholderTxt = '';

    checkPages(){
        if(this.$router.currentRoute.name == 'Sections'){
            this.mainTitle = "Your Sections Are Empty";
            this.placeholderTxt = "Go Ahead and Add your Hospital's Section";
        }else if(this.$router.currentRoute.name == 'emergency'){
            this.mainTitle = "Your Emergency Requests are empty";
            this.placeholderTxt = "Go Ahead and Add your Emergency's Section in Hospital";
        }else if(this.$router.currentRoute.name == 'appoinetments'){
            this.mainTitle = "You Haven't Any Appointement Yet";
            this.placeholderTxt = "You Will Receive new Appointement Soon .";
        }
    }
    mounted() {
        this.checkPages();
    }
}
</script>

<style scoped>
.page-placeholder-container{
    width: 85%;
    margin: auto;
    overflow: hidden;
    height: 100vh;
    background: rgba(249, 253, 251, 1);
    margin-top: -10%;
}
.placeholder-card{
    position: absolute;
    width: 40%;
    left: 50%;
    margin-left: -20%;
    text-align: center;
    height: 280px;
    top: 40%;
}
.card-info{
    color: var(--font-navy);
}
.card-info span{
    display: block;
    font-size: 12px;
}
.placeholder-btns button{
    padding: 15px 65px;
    background: var(--font-navy);
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 20px;
}
.placeholder-btns button:hover{
    opacity: 0.9;
}
.placeholder-icon img{
    width: 150px;
}
</style>