<template>
    <div class="profile-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="profile-body">
            <div class="cover-img">
                <img :class="{'mirror-img' : $t('nav.home') === 'الرئيسية'}" src="@/assets/images/profile-cover.png" alt="">
                <h2 :class="{'rtl pages-title-ar' : $t('nav.home') === 'الرئيسية'}">{{ $t("profile.profile") }}</h2>
            </div>
            <div class="profile-inputs-body">
                <div class="profile-img-panal" :class="{'float-right' : $t('nav.home') === 'الرئيسية'}">
                    <div class="profile-img">
                        <i v-if="(!profileObj.image_path || profileObj.image_path.charAt(profileObj.image_path.length-1) == '.') && !fileData" class="fas fa fa-user-circle"></i>
                        <img v-if="profileObj.image_path && !fileData" :src="BaseUrl + profileObj.image_path" alt="">
                        <img v-if="fileData" :src="fileData" alt="">
                    </div>
                    <label>
                        {{ $t("profile.change_pic") }}
                        <input class="loadedFiles" @change="uploadFileFun($event)" type="file" accept="image/*">
                    </label>
                </div>
                <div class="inputs-container" :class="{'rtl' : $t('nav.home') === 'الرئيسية'}">
                    <form>
                        <div class="input-field">
                            <input type="text" :placeholder='$t("sign_up.username_placeholder")' v-model="username">
                        </div>
                        <div class="input-field">
                            <input type="email" :placeholder='$t("sign_up.email_placeholder")' v-model="email">
                        </div>
                        <div class="input-field">
                            <input type="number" :placeholder='$t("sign_up.first_num_placeholder")' v-model="phone[0].number" v-if="phone[0]">
                            <span v-if="phoneMsg">  {{ $t("profile.field_required") }} </span>
                        </div>
                        <div class="input-field">
                            <input type="number" :placeholder='$t("sign_up.sec_num_placeholder")' v-model="phone[1].number" v-if="phone[1]">
                        </div>
                        <div class="input-field">
                            <input type="number" :placeholder= '$t("sign_up.third_num_placeholder")' v-model="phone[2].number" v-if="phone[2]">
                        </div>
                        <div class="input-field">
                            <input type="number" :placeholder= '$t("sign_up.for_num_placeholder")' v-model="phone[3].number" v-if="phone[3]">
                        </div>
                        <div class="input-field">
                            <input type="number" :placeholder= '$t("sign_up.fifth_num_placeholder")' v-model="phone[4].number" v-if="phone[4]">
                        </div>
                        <div class="input-field">
                            <textarea class="currLocation" :placeholder='$t("map.current_loc")' v-model="address"></textarea>
                        </div>
                        <div class="profile-actions">
                            <h4 @click="openMapBody()">{{ $t("profile.add_another_location") }} <i class="fas fa fa-map-marker-alt"></i></h4>
                        </div>
                    </form>
                    <div class="btn-body">
                        <button @click="submitEditProfile()">{{ $t("profile.save") }}</button>
                    </div>
                </div>
                <div class="map" v-if="mapContainer">
                    <i @click="mapContainer=!mapContainer" class="fas fa fa-times"></i>
                    <GoogleMap :latlngObj="latlngObj"  @getLocation="getLocation"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import GoogleMap from '@/components/signup-login/GoogleMap.vue';
import {getUserInfo} from '@/endpoints/user';
import {BaseUrl} from '@/app.config';
import {editProfile} from '@/endpoints/user';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        GoogleMap,
        DoubleBounce
    },
})
export default class Profile extends Vue {
    mapContainer = false;
    username = '';
    email = '';
    phone = [];
    address = '';
    profileObj = {};
    BaseUrl = BaseUrl;
    latlngObj = {};
    city = '';
    district = '';
    country = '';
    lat = '';
    lng = '';
    imagePath = '';
    extension = '';
    spNumbers = [];
    uploadFile = '';
    fileData = '';
    fileFile = '';
    loaderFlag = false;
    num1 = false;
    num2 = false;
    num3 = false;
    num4 = false;
    phoneMsg = false;
    openMapBody(){
        this.mapContainer = true;
    };
    closeModel() {
        this.mapContainer = false;
    };
    async getProfile(){
        this.loaderFlag = true
        this.profileObj = await getUserInfo();
        this.loaderFlag = false
        this.username = this.profileObj.name;
        this.email = this.profileObj.email;
        this.phone = this.profileObj.sp_numbers;
        for(var i = 0; i < this.profileObj.sp_numbers.length; i++){
            if( this.profileObj.sp_numbers.length < 5 ){
                var length = this.profileObj.sp_numbers.length
                this.phone[length] = {}
                length++
            }
        }
        this.address = this.profileObj.address;
        this.latlngObj = {
            lat: this.profileObj.lat,
            lng: this.profileObj.long,
        }
        this.city = this.profileObj.city_title;
        this.district = this.profileObj.district_title;
        this.lat = this.profileObj.lat;
        this.lng = this.profileObj.long;
        this.country = null;
    }

    uploadFileFun(){
        this.uploadFile = (event).target;
        if (this.uploadFile.files && this.uploadFile.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.fileData = (e.target).result;
                this.extension = this.fileData.split(";")[0].split("/")[1]
                this.imagePath = this.fileData.split(",")[1]
                console.log('base64', this.imagePath)
                console.log('ex.', this.extension)
            }
            reader.readAsDataURL(this.uploadFile.files[0]);
            this.fileFile = this.uploadFile.files[0];
        }
    }

    getLocation(address, location, latLng) {
        this.getData(location, address, latLng);
        this.closeModel();
    }
    getData(location, address, lating) {
        let This = this
        this.address = address
        this.lat = lating.lat
        this.lng = lating.lng
        for (var ac = 0; ac < location.address_components.length; ac++) {
            var component = location.address_components[ac];
            if (
                component.types.includes("sublocality") ||
                component.types.includes("administrative_area_level_1")
            ) {
                This.city = component.long_name;
            } else if (component.types.includes("administrative_area_level_3")) {
                This.district = component.short_name;
            } else if (component.types.includes("country")) {
                This.country = component.long_name;
            }
        }
    }
    getNumbersArr(){
        this.spNumbers = this.profileObj.sp_numbers.filter(function(numberObj){
            if(!numberObj.number){
                return false;
            }
            return true;
        }).map(function(numberObj) {return numberObj.number});
    }
    async submitEditProfile(){
        if(this.phone[0].number == ''){
            this.phoneMsg = true
        }else{
            this.phoneMsg = false
            this.getNumbersArr();
            var data
            if(this.country == null && this.fileData == ''){
                data = {
                    address: this.address,
                    district_title: this.district,
                    city_title: this.city,
                    lat: this.lat,
                    long: this.lng,
                    name: this.username,
                    email: this.email,
                    sp_numbers: this.spNumbers,
                };
            }else if(this.country == null){
                data = {
                    address: this.address,
                    district_title: this.district,
                    city_title: this.city,
                    lat: this.lat,
                    long: this.lng,
                    name: this.username,
                    email: this.email,
                    sp_numbers: this.spNumbers,
                    image_string: this.imagePath,
                    ext: this.extension,
                };
            }else if(this.fileData == ''){
                data = {
                    address: this.address,
                    district_title: this.district,
                    city_title: this.city,
                    country_title: this.country,
                    lat: this.lat,
                    long: this.lng,
                    name: this.username,
                    email: this.email,
                    sp_numbers: this.spNumbers,
                };
            }else{
                data = {
                    address: this.address,
                    district_title: this.district,
                    city_title: this.city,
                    country_title: this.country,
                    lat: this.lat,
                    long: this.lng,
                    name: this.username,
                    email: this.email,
                    sp_numbers: this.spNumbers,
                    image_string: this.imagePath,
                    ext: this.extension,
                };
            }
            try{
                this.loaderFlag = true
                await editProfile(this.profileObj.id, data)
                this.loaderFlag = false
                this.$fire({
                    title: "SUCCESS!",
                    text: "Profile edited successfully",
                    type: "success",
                    timer: 2000
                });
                this.getProfile();
            }catch(err){

            }
        }
    }
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    mounted(){
        this.getProfile();
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
.profile-img-panal label{
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    display: block;
    margin-top: 10px;
}
.profile-img-panal label:hover{
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
.input-field:nth-of-type(3){
    display: block;
    clear: both;
    position: relative;
}
.input-field span {
  font-size: 12px;
  color: var(--alert-color);
  position: absolute;
  bottom: 2px;
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
input[type=file]{ 
    display: none !important;
}
</style>
