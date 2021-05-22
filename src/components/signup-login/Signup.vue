<template>
  <div class="login-container">
    <div class="login-body">
      <div class="login-img">
        <img src="@/assets/images/login/login-img.png" alt="" />
      </div>
      <div class="login-form">
        <h2>Create New Account</h2>
        <p>
          Already Have an account ?
          <span @click="pushToSignin()">Sign in.</span>
        </p>
        <div class="profile-pic">
          <div class="profile-img-body">
            <img src="" alt="" />
            <i class="fas fa fa-user-circle"></i>
          </div>
          <p>Add Your Profile Picture</p>
        </div>
        <form>
          <div class="input-field">
            <input type="text" placeholder="User Name" v-model="username" />
          </div>
          <div class="input-field">
            <input type="email" placeholder="Email" v-model="email" />
          </div>
          <div class="input-field">
            <button type="button" @click="num1 = !num1" v-if="!num1">
              plus
            </button>
            <button type="button" @click="num1 = !num1" v-if="num1">min</button>
            <input
              type="text"
              placeholder="First Number Phone"
              v-model="phone[0]"
            />
          </div>
          <div class="input-field" v-if="num1">
            <button type="button" @click="num2 = !num2" v-if="!num2">
              plus
            </button>
            <button type="button" @click="num2 = !num2" v-if="num2">min</button>
            <input
              type="text"
              placeholder="Second Number Phone"
              v-model="phone[1]"
            />
          </div>
          <div class="input-field" v-if="num2">
            <button type="button" @click="num3 = !num3" v-if="!num3">
              plus
            </button>
            <button type="button" @click="num3 = !num3" v-if="num3">min</button>
            <input
              type="text"
              placeholder="Third Number Phone"
              v-model="phone[2]"
            />
          </div>
          <div class="input-field" v-if="num3">
            <button type="button" @click="num4 = !num4" v-if="!num4">
              plus
            </button>
            <button type="button" @click="num4 = !num4" v-if="num4">min</button>
            <input
              type="text"
              placeholder="Fourth Number Phone"
              v-model="phone[3]"
            />
          </div>
          <div class="input-field" v-if="num4">
            <input
              type="text"
              placeholder="Fifth Number Phone"
              v-model="phone[4]"
            />
          </div>
          <div class="input-field">
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="Confirm Password"
              v-model="confirmPassword"
            />
          </div>
          <div class="signup-actions">
            <h4 @click="openMapBody()">
              Enter Your Location <i class="fas fa fa-map-marker-alt"></i>
            </h4>
            <div>
              <input type="checkbox" name="privacy" id="" />
              <label for="privacy"><span>I Accept</span>Privacy Policy</label>
            </div>
            <div>
              <input type="checkbox" name="terms" id="" />
              <label for="terms"><span>I Accept</span>Term Of Service</label>
            </div>
          </div>
          <div class="login-btn">
            <button type="button">Sign Up</button>
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
  getData(location: any, address: any, lating: any) {
    let data = {
      address: address,
      district_title: "",
      city_title: "",
      country_title: "",
      lat: lating.lat,
      long: lating.lng,
      name: this.username,
      email: this.email,
      password: this.password,
      sp_numbers: this.phone,
      role_id: 2,
      image_string: "",
      ext: "",
    };

    for (var ac = 0; ac < location.address_components.length; ac++) {
      var component = location.address_components[ac];
      if (
        component.types.includes("sublocality") ||
        component.types.includes("administrative_area_level_1")
      ) {
        data.city_title = component.long_name;
      } else if (component.types.includes("administrative_area_level_3")) {
        data.district_title = component.short_name;
      } else if (component.types.includes("country")) {
        data.country_title = component.long_name;
      }
    }
    console.log("data", data);
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
.profile-pic p {
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
.profile-pic p:hover {
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
}
.signup-actions h4 {
  color: var(--main-green);
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  margin-left: 30px;
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
</style>