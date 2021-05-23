<template>
    <div class="profile-container">
        <div class="profile-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>Profile</h2>
            </div>
            <div class="profile-inputs-body">
                <div class="profile-img-panal">
                    <div class="profile-img">
                        <i v-if="!profileObj.image_path" class="fas fa fa-user-circle"></i>
                        <img v-if="profileObj.image_path" :src="BaseUrl + profileObj.image_path" alt="">
                    </div>
                    <p>Change Your Profile Picture</p>
                </div>
                <div class="inputs-container">
                    <form>
                        <div class="input-field">
                            <input type="text" placeholder="User Name" v-model="username">
                        </div>
                        <div class="input-field">
                            <input type="email" placeholder="Email" v-model="email">
                        </div>
                        <div class="input-field" v-for="num in phone" :key="num">
                            <input type="text" placeholder="Phone" v-model="num.number">
                        </div>
                        <div class="input-field">
                            <textarea class="currLocation" placeholder="Current Location" v-model="address"></textarea>
                        </div>
                        <div class="profile-actions">
                            <h4 @click="openMapBody()">Add Another Location <i class="fas fa fa-map-marker-alt"></i></h4>
                        </div>
                    </form>
                    <div class="btn-body">
                        <button>Save</button>
                    </div>
                </div>
                <div class="map" v-if="mapContainer">
                    <i @click="mapContainer=!mapContainer" class="fas fa fa-times"></i>
                    <GoogleMap :latlngObj="latlngObj"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import GoogleMap from '@/components/signup-login/GoogleMap.vue';
import {getUserInfo} from '@/endpoints/user';
import {BaseUrl} from '@/app.config';
@Component({
    components: {
        GoogleMap
    },
})
export default class Profile extends Vue {
    mapContainer:Boolean = false;
    username:String = '';
    email:String = '';
    phone:any[] = [];
    address:String = '';
    profileObj:any = {};
    BaseUrl:any = BaseUrl;
    latlngObj:any = {};
    openMapBody(){
        this.mapContainer = true;
    };
    async getProfile(){
        this.profileObj = await getUserInfo();
        this.username = this.profileObj.name;
        this.email = this.profileObj.email;
        this.phone = this.profileObj.sp_numbers
        this.address = this.profileObj.address;
        this.latlngObj = {
            lat: this.profileObj.lat,
            lng: this.profileObj.long,
        }
    }

    mounted(){
        this.getProfile();
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
.profile-inputs-body{
    width: 80%;
    margin: auto;
    overflow: hidden;
    margin-top: -10%;
}
.profile-img-panal{
    width: 30%;
    float: left;
    background: var(--main-green);
    height: 600px;
    padding-top: 10%;
    border-radius: var(--md-radius);
}
.profile-img-panal p{
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
}
.profile-img-panal p:hover{
    text-decoration: underline;
}
.profile-img{
    width: 135px;
    height: 135px;
    position: relative;
    overflow: hidden;
    margin: auto;
    background: #fff;
    color: var(--main-green);
    border-radius: var(--sm-radius);
    margin-top: 35px;
    font-size: 80px;
    text-align: center;
    line-height: 1.7;
}
.profile-img img{
    width: 100%;
    height: 100%;
}
.inputs-container{
    width: 65%;
    float: right;
    padding-top: 15%;
}
.inputs-container form{
    width: 80%;
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
.inputs-container form textarea{
    width: 100%;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: var(--md-radius);
    padding: 12px 20px;
    border: 1px solid var(--main-green);
    outline: none;
    resize: none;
    height: auto;
    min-height: 76px;
}
.brief{
    height: 100px;
}
.input-field:nth-of-type(1){
    width: 49%;
    float: left;
}
.input-field:nth-of-type(2){
    width: 49%;
    float: right;
}
.profile-actions h4{
    color: var(--main-green);
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
}
.profile-actions h4:hover{
    text-decoration: underline;
    font-weight: 600;
}
.profile-actions h4 i{
    margin-left: 50px;
}
.map{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #95cfae;
    padding: 150px 100px;
}
.map i{
    float: right;
    font-size: 25px;
    color: var(--font-navy);
    cursor: pointer;
}
.btn-body{
    overflow:hidden;
    clear: both;
    display: block;
    text-align: center;
    width: 80%;
    margin-bottom: 20px;
}
.btn-body button{
    background: var(--main-green);
    color: #fff;
    border-radius: var(--sm-radius);
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px 45px;
}
.btn-body button:hover{
    opacity: 0.8;
}
</style>
