<template>
    <div class="medical-team-container">
        <div class="medical-team-body">
            <div class="background-img">
                <img src="@/assets/images/staticBackground.png" alt="">
            </div>
            <div class="medical-content">
                <div class="medical-team-info">
                    <h1>Medical Team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis iure obcaecati ducimus, assumenda quidem cupiditate quae consectetur iusto magnam provident sint laboriosam cumque atque vitae voluptas perspiciatis voluptatum laudantium!</p>
                </div>
                <div class="medical-team-img">
                    <img src="@/assets/images/team.png" alt="">
                </div>
            </div>
            <div class="hospitals-body">
                <h1>Hospitals We Works With</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis qui impedit pariatur nobis eos, magnam cumque debitis, cupiditate ab eius, velit perspiciatis laborum. Repudiandae quam ea dolorem sequi commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, numquam ipsum sapiente dolores suscipit dicta amet, impedit debitis facilis provident non qui pariatur vel assumenda veritatis! Et dolorem dolore cumque.</p>
                <div class="hospitals-items" v-for="hospital in hospitals" :key="hospital">
                    <div class="hospital-item">
                        <div class="item-img">
                            <img :src="BaseUrl + hospital.image_path" alt="Image">
                        </div>
                        <p>{{hospital.name}}</p>
                    </div>
                </div>
                <p class="join-now">All of these are part of our entity .. <span @click="pushToSignup()">Join us now .</span></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getMedicalTeam} from '@/endpoints/static_pages';
import {BaseUrl} from '@/app.config';


@Component({
    components: {

    },
})
export default class MedicalTeam extends Vue {
    hospitals = [];
    BaseUrl:any = BaseUrl

    async getMedicalTeam(){
        this.hospitals = await getMedicalTeam();
    }

    pushToSignup(){
        this.$router.push('/signup')
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted(){
        this.getMedicalTeam();
        this.scrollToTop();
    }
}
</script>

<style scoped>
.medical-team-body{
    position: relative;
}
.background-img{
    width: 100%;
}
.background-img img{
    width: 100%;
    margin-top: -100px;
}
.medical-content{
    padding: 50px 150px;
    position: absolute;
    top: 0;
}
.medical-team-info{
    width: 40%;
    float: left;
    color: var(--font-navy);
    margin-top: 65px;
}
.medical-team-img{
    width: 38%;
    float: right;
}
.medical-team-img img{
    width: 100%;
}
.hospitals-body{
    width: 80%;
    margin: auto;
    color: var(--font-navy);
}
.hospitals-items{
    width: 80%;
    margin: auto;
}
.hospital-item{
    margin-right: 5%;
    float: left;
    text-align: center;
}
.item-img{
    width: 170px;
    height: 170px;
    box-shadow: 2px 3px 5px 1px #ddd;
    border-radius: var(--md-radius);
}
.item-img i{
    font-size: 80px;
    line-height: 2;
    color: var(--main-green);
}
.join-now{
    font-size: 23px;
    clear: both;
    padding-top: 40px;
    display: block;
}
.join-now span{
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}
.join-now span:hover{
    opacity: 0.8;
    transition: 0.7s;
}
</style>