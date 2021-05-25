<template>
    <div class="login-container">
        <div class="login-body">
            <div class="login-img">
                <img src="@/assets/images/login/login-img.png" alt="" />
            </div>
            <div class="login-form">
                <h2>Create New Account</h2>
                <p>Already Have an account ?<span @click="pushToSignin()">Sign in.</span></p>
                <div class="profile-pic">
                    <div class="profile-img-body">
                        <img v-if="fileData" :src="fileData" alt="" />
                        <i v-if="fileData == ''" class="fas fa fa-user-circle"></i>
                    </div>
                    <label>
                        Add Your Profile Picture
                        <input class="loadedFiles" @change="uploadFileFun($event)" type="file" accept="image/*">
                    </label>
                </div>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder="User Name" v-model="username" />
                        <span v-if="usernameMsg"> Username is required </span>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Email" v-model="email" />
                        <span v-if="emailMsg"> Email is required </span>
                        <span v-if="validEmailMsg"> Email is not valid </span>
                    </div>
                    <div class="input-field">
                        <span class="add-hover"><span class="circle"></span>{{hoverMethod()}}</span>
                        <i class="fas fa fa-plus" @click="num1 = !num1" v-if="!num1"></i>
                        <i class="fas fa fa-minus" @click="num1 = !num1" v-if="num1"></i>
                        <input
                            type="number"
                            placeholder="First Number Phone (Required)"
                            v-model="phone[0]"
                        />
                        <span v-if="phoneMsg"> At least one phone number is required </span>
                    </div>
                    <div class="input-field" v-if="num1">
                        <i class="fas fa fa-plus" @click="num2 = !num2" v-if="!num2"></i>
                        <i class="fas fa fa-minus" @click="num2 = !num2" v-if="num2"></i>
                        <input
                            type="number"
                            placeholder="Second Number Phone (Optional)"
                            v-model="phone[1]"
                        />
                    </div>
                    <div class="input-field" v-if="num2">
                        <i class="fas fa fa-plus" @click="num3 = !num3" v-if="!num3"></i>
                        <i class="fas fa fa-minus" @click="num3 = !num3" v-if="num3"></i>
                        <input
                            type="number"
                            placeholder="Third Number Phone (Optional)"
                            v-model="phone[2]"
                        />
                    </div>
                    <div class="input-field" v-if="num3">
                        <i class="fas fa fa-plus" @click="num4 = !num4" v-if="!num4"></i>
                        <i class="fas fa fa-minus" @click="num4 = !num4" v-if="num4"></i>
                        <input
                            type="number"
                            placeholder="Fourth Number Phone (Optional)"
                            v-model="phone[3]"
                        />
                    </div>
                    <div class="input-field" v-if="num4">
                        <input
                            type="number"
                            placeholder="Fifth Number Phone (Optional)"
                            v-model="phone[4]"
                        />
                    </div>
                    <div class="input-field">
                        <input :type="passType" placeholder="Password" v-model="password" />
                        <i class="fas fa fa-eye" @click="showPassword()" v-if="passType == 'password' && password"></i>
                        <i class="fas fa fa-eye-slash" @click="hidePassword()" v-if="passType == 'text' && password"></i>
                        <span v-if="passwordMsg"> Password is required </span>
                        <span v-if="validPasswordMsg">
                            Minimum eight characters, at least one letter, one number and one
                            special character(@ $ ! % * # ? &)
                        </span>
                    </div>
                    <div class="input-field">
                        <input
                            :type="c_passType"
                            placeholder="Confirm Password"
                            v-model="confirmPassword"
                        />
                        <i class="fas fa fa-eye" @click="showConfirmPass()" v-if="c_passType == 'password' && confirmPassword "></i>
                        <i class="fas fa fa-eye-slash" @click="hideConfirmPass()" v-if="c_passType == 'text' && confirmPassword "></i>
                        <span v-if="confirmPasswordMsg"> Confirm password is required</span>
                        <span v-if="machingMsg">Confirm password does not match the password</span>
                    </div>
                    <div class="signup-actions">
                        <h4 @click="openMapBody()">
                            Enter Your Location
                            <i class="fas fa fa-map-marker-alt"></i>
                        </h4>
                        <span class="error-location" v-if="locationMsg">Please pickup your location</span>
                        <div>
                            <input type="checkbox" name="privacy" id="" v-model="privacy" />
                            <label for="privacy"><span>I Accept</span>Privacy Policy</label>
                            <span class="check-empty" v-if="privacyMsg">Please accept our privacy policy</span>
                        </div>
                        <div>
                            <input type="checkbox" name="terms" id="" v-model="terms" />
                            <label for="terms"><span>I Accept</span>Term Of Service</label>
                            <span class="check-empty" v-if="termsMsg">Please accept our term of service</span>
                        </div>
                    </div>
                    <div class="login-btn">
                        <button type="button" @click="signupFun()">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="map" v-if="mapContainer">
            <i @click="mapContainer = !mapContainer" class="fas fa fa-times"></i>
            <GoogleMap @getLocation="getLocation" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GoogleMap from "@/components/signup-login/GoogleMap.vue";
import {signup} from "@/endpoints/user";

@Component({
  components: {
    GoogleMap,
  },
})
export default class Signup extends Vue {
  username: any = "";
  email: any = "";
  phone: Array<any> = [];
  password: any = "";
  confirmPassword: any = "";
  mapContainer: Boolean = false;
  num1: boolean = false;
  num2: boolean = false;
  num3: boolean = false;
  num4: boolean = false;
  usernameMsg: Boolean = false;
  passwordMsg: Boolean = false;
  phoneMsg: Boolean = false;
  emailMsg: Boolean = false;
  validEmailMsg: boolean = false;
  confirmPasswordMsg: boolean = false;
  validPasswordMsg: boolean = false;
  machingMsg: boolean = false;
  address: any = "";
  district:any = "";
  city: any = "";
  country: any = "";
  lat: any = "";
  lng: any = "";
  privacy : Boolean = false;
  terms : Boolean = false;
  locationMsg: Boolean = false;
  privacyMsg: Boolean = false;
  termsMsg: Boolean = false;
  imagePath: any = "";
  extension: any = "";
  uploadFile: any = "";
  fileData: any = "";
  fileFile: any = "";
  passType: any = 'password';
  c_passType: any = 'password';


  pushToSignin() {
    this.$router.push("/login");
  }
  openMapBody() {
    this.mapContainer = true;
  }
  closeModel() {
    this.mapContainer = false;
  }
  getLocation(address: any, location: any, latLng: any) {
    this.getData(location, address, latLng);
    this.closeModel();
  }
  showPassword(){
    this.passType = 'text'
  }

  hidePassword(){
    this.passType = 'password'
  }

  showConfirmPass(){
    this.c_passType = 'text'
  }

  hideConfirmPass(){
    this.c_passType = 'password'
  }
    uploadFileFun(){
        this.uploadFile = (<any>event).target;
        if (this.uploadFile.files && this.uploadFile.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.fileData = (<any>e.target).result;
                this.extension = this.fileData.split(";")[0].split("/")[1]
                this.imagePath = this.fileData.split(",")[1]
                console.log('base64', this.imagePath)
                console.log('ex.', this.extension)
            }
            reader.readAsDataURL(this.uploadFile.files[0]);
            this.fileFile = this.uploadFile.files[0];
        }
    }
  async signupFun(e: any) {
    if (!this.username) {
      this.usernameMsg = true;
    } else {
      this.usernameMsg = false;
    }
    if (!this.email) {
      this.emailMsg = true;
    } else {
      this.emailMsg = false;
    }
    if (!this.validEmail(this.email) && this.email) {
      this.validEmailMsg = true;
    } else {
      this.validEmailMsg = false;
    }
    if (this.phone.length < 1) {
      this.phoneMsg = true;
    } else {
      this.phoneMsg = false;
    }
    if (!this.password) {
      this.passwordMsg = true;
    } else {
      this.passwordMsg = false;
    }
    if (!this.confirmPassword) {
      this.confirmPasswordMsg = true;
    } else {
      this.confirmPasswordMsg = false;
    }
    if (this.password !== this.confirmPassword && this.confirmPassword) {
      this.machingMsg = true;
    } else {
      this.machingMsg = false;
    }
    if (!this.validPassword(this.password) && this.password) {
      this.validPasswordMsg = true;
    } else {
      this.validPasswordMsg = false;
    }
    if(this.address == ''){
        this.locationMsg = true
    } else {
        this.locationMsg = false
    }
    if(this.privacy == false){
        this.privacyMsg = true
    }else{
        this.privacyMsg = false
    }
    if(this.terms == false){
        this.termsMsg = true
    }else{
        this.termsMsg = false
    }
    if (
      this.usernameMsg == false &&
      this.passwordMsg == false &&
      this.phoneMsg == false &&
      this.emailMsg == false &&
      this.validEmailMsg == false &&
      this.confirmPasswordMsg == false &&
      this.validPasswordMsg == false &&
      this.machingMsg == false &&
      this.locationMsg == false &&
      this.privacyMsg == false &&
      this.termsMsg == false
    ){
      try {
        let data = {
            address: this.address,
            district_title: this.district,
            city_title: this.city,
            country_title: this.country,
            lat: this.lat,
            long: this.lng,
            name: this.username,
            email: this.email,
            password: this.password,
            sp_numbers: this.phone,
            role_id: 2,
            image_string: this.imagePath,
            ext: this.extension,
        };
        await signup(data);
        this.$fire({
            title: "SUCCESS!",
            text: "WELCOME !",
            type: "success",
            timer: 2000
        })
        this.$router.push('/hospital_home')
      } catch (err) {

      }
    }
  }
  validEmail(email: any) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validPassword(password: any) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }
  getData(location: any, address: any, lating: any) {
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
    hoverMethod(){
        if(!this.num1){
            return 'Add another number';
        }else{
            return 'Remove number';
        }
    }
    mounted() {
        this.hoverMethod()   
    }
}
</script>

<style scoped>
.login-container {
  background-image: url("../../assets/images/signin.png");
  display: block;
  width: 100%;
  background-attachment: fixed;
  min-height: 500px;
  padding: 65px 0px;
  background-color: rgba(241, 250, 245, 1);
}
.login-body {
  width: 80%;
  margin: auto;
  clear: both;
  overflow: hidden;
  background: #fff;
  border-radius: var(--md-radius);
  padding: 100px;
}
.login-img {
  width: 50%;
  float: right;
}
.login-img img {
  width: 100%;
}
.login-form {
  width: 40%;
  float: left;
}
.login-form h2 {
  color: var(--font-navy);
  text-align: center;
}
.login-form p {
  color: var(--font-navy);
  text-align: center;
}
.login-form p span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.login-form p span:hover {
  opacity: 0.8;
  transition: 0.7s;
}
.input-field {
  height: 70px;
  position: relative;
}
.input-field .fa-minus,
.input-field .fa-plus{
    position: absolute;
    right: -30px;
    top: 15px;
    font-size: 15px;
    cursor: pointer;
    color: var(--main-green);
}
.input-field span {
  font-size: 12px;
  color: var(--alert-color);
}
.input-field input {
  width: 100%;
  height: 45px;
  border-radius: var(--md-radius);
  outline: none;
  border: 1.5px solid var(--main-green);
  padding: 0px 20px;
}
.login-btn {
  height: 70px;
}
.login-btn button {
  width: 100%;
  outline: none;
  cursor: pointer;
  border: 1.5px solid var(--main-green);
  background: var(--main-green);
  color: #fff;
  height: 45px;
  border-radius: var(--md-radius);
}
.login-btn button:hover {
  opacity: 0.8;
  transition: 0.7s;
}
.profile-pic {
  display: block;
  text-align: center;
}
.profile-pic label {
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px 0px;
  display: block;
}
.profile-pic label:hover {
  text-decoration: underline;
  opacity: 0.8;
}
.profile-img-body {
  width: 120px;
  height: 120px;
  background: var(--main-green);
  color: #fff;
  text-align: center;
  font-size: 80px;
  border-radius: var(--md-radius);
  line-height: 1.5;
  margin: auto;
  position: relative;
}
.profile-img-body img{
    width: 100%;
    height: 100%;
}
.signup-actions h4 {
  color: var(--main-green);
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  margin-left: 30px;
}
.error-location{
    display: block;
    font-size: 12px;
    color: var(--alert-color);
    margin-left: 30px;
    margin-top: -10px;
    margin-bottom: 10px;
}
.signup-actions h4:hover {
  text-decoration: underline;
  font-weight: 600;
}
.signup-actions h4 i {
  margin-left: 50px;
}
.signup-actions div {
  margin-bottom: 15px;
}
.signup-actions div label {
  font-size: 15px;
  color: var(--font-navy);
}
.signup-actions div label span {
  color: var(--main-green);
  margin-right: 5px;
  margin-left: 10px;
}
.map {
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
.map i {
  float: right;
  font-size: 25px;
  color: var(--font-navy);
  cursor: pointer;
}
.add-hover{
    width: 155px;
    height: 30px;
    border-radius: 15px;
    background: #ddddddb0;
    display: block;
    color: var(--main-green) !important;
    position: absolute;
    right: -162px;
    top: 7px;
    padding-left: 35px;
    padding-top: 8px;
}
.circle{
    width: 30px;
    height: 30px;
    display: inline-block;
    background: aliceblue;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: 0;
}
.check-empty{
    font-size: 12px;
    color: var(--alert-color);
    display: block;
    margin-left: 30px;
    margin-top: 10px;
}
input[type=file]{ 
    display: none !important;
}
.fa-eye,
.fa-eye-slash{
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 14px;
    color: var(--active-green);
    cursor: pointer;
}
</style>