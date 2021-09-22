<template>
    <div class="special-hospital-container">
        <div class="special-hospital-body">
            <h1> {{ $t("specialized_hospitals") }}</h1>
            <div class="hospital-info">
                <h2>{{highestHospital.name}}</h2>
                <p v-if="highestHospital.description">{{highestHospital.description}}</p>
                <p v-if="!highestHospital.description">et ipsum! Quisquam similique deserunt minus exercitationem delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni, architecto temporibus adipisci distinctio, quae labore doloremque fugiat necessitatibus tempore illo. Autem, et ipsum! Quisquam similique deserunt minus exercitationem delectus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni, architecto temporibus adipisci distinctio, quae labore doloremque fugiat necessitatibus tempore illo. Autem, et ipsum! Quisquam similique deserunt minus exercitationem delectus?</p>
                <router-link to="/medical_team">
                    <button>{{ $t("more") }}</button>
                </router-link>
            </div>
            <div class="hospital-img">
                <img :src="BaseUrl + highestHospital.image_path" alt="Image">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="150.4" viewBox="0 0 547.369 150.4">
                    <path id="path_vector_" data-name="path vector " d="M36.2,150.52H583.256S589.73,85.095,544,83.045,411.761,94.7,341.732,78.98,258.937.806,171.045.123,36.2,150.52,36.2,150.52Z" transform="translate(-36.201 -0.12)" fill="#43c079"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gethighestHospital } from '@/endpoints/static_pages';
import {BaseUrl} from '@/app.config';


@Component({
    components: {

    },
})
export default class SpecialHospital extends Vue {
   highestHospital={}
   BaseUrl:any = BaseUrl

   async getMedicalTeam(){
        this.highestHospital = await gethighestHospital();
    }

    mounted(){
        this.getMedicalTeam()
    }
}
</script>

<style scoped>
.special-hospital-container{
    position: relative;
    overflow: hidden;
    clear: both;
}
.special-hospital-body{
    position: relative;
    overflow: hidden;
    width: 80%;
    margin: auto;
    padding: 50px 0px;
}
.special-hospital-body h1{
    color: var(--font-navy);
}
.hospital-info{
    width: 40%;
    float: left;
}
.hospital-info h2{
    color: var(--main-green);
}
.hospital-info p{
    color: var(--font-navy);
    min-height: 110px;
    font-size: 15px;
    line-height: 1.8;
}
.hospital-info button{
    background: var(--main-green);
    color: #fff;
    border: none;
    outline: none;
    display: block;
    padding: 10px 25px;
    border-radius: var(--sm-radius);
    cursor: pointer;
    border: 1px solid var(--main-green);
}
.hospital-info button:hover{
    background: transparent;
    border: 1px solid var(--main-green);
    color: var(--main-green);
    transition: 0.7s;
}
.hospital-img{
    width: 300px;
    height: 350px;
    box-shadow: 2px 3px 5px 1px #ddd;
    float: right;
    margin-right: 65px;
    border-radius: var(--md-radius);
    position: relative;
}
.hospital-img svg{
    position: absolute;
    bottom: -30px;
    left: 0;
    right: 0;
}
</style>