<template>
    <div class="contact-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="contact-body">
            <div class="contact-img">
                <img src="@/assets/images/contact-img.png" alt="" />
            </div>
            <div class="contact-form">
                <h2>{{ $t("contact_us.contact_us") }}</h2>
                <h3>{{ $t("contact_us.get_in_touch") }}</h3>
                <p>{{ $t("contact_us.always_within_your_reach") }}</p>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div class="input-field-message">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div class="contact-btn">
                        <button type="button">{{ $t("contact_us.send_msg") }}Send Message</button>
                    </div>
                </form>
            </div>
        </div>         
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';

@Component({
    components: {
        DoubleBounce,
    },
})
export default class ContactUs extends Vue {
    loaderFlag = false;
}
</script>

<style scoped>
.contact-container {
  background-image: url("../../assets/images/signin.png");
  display: block;
  width: 100%;
  background-attachment: fixed;
  min-height: 500px;
  padding: 65px 0px;
  background-color: rgba(241, 250, 245, 1);
}
.contact-body {
  width: 80%;
  margin: auto;
  clear: both;
  overflow: hidden;
  background: #fff;
  border-radius: var(--md-radius);
  padding: 100px;
}
.contact-img {
  width: 40%;
  float: right;
}
.contact-img img {
  width: 100%;
}
.contact-form {
  width: 40%;
  float: left;
}
.contact-form h2 {
  color: var(--font-navy);
}
.contact-form h3 {
    color: var(--main-green);
}
.contact-form p {
  color: var(--font-navy);
}

.input-field {
  height: 70px;
  position: relative;
}
.input-field-message {
    height: 150px;
}
.input-field span {
  font-size: 12px;
  color: var(--alert-color);
}
.input-field input{
  width: 100%;
  height: 45px;
  border-radius: var(--md-radius);
  outline: none;
  border: 1.5px solid var(--main-green);
  padding: 0px 20px;
}
.input-field-message textarea{
    height: 125px;
    padding: 20px 20px;
    width: 100%;
    border-radius: var(--md-radius);
    outline: none;
    border: 1.5px solid var(--main-green);
    resize: none;
}
.contact-btn {
  height: 70px;
}
.contact-btn button {
  width: 100%;
  outline: none;
  cursor: pointer;
  border: 1.5px solid var(--main-green);
  background: var(--main-green);
  color: #fff;
  height: 45px;
  border-radius: var(--md-radius);
}
.contact-btn button:hover {
  opacity: 0.8;
  transition: 0.7s;
}
</style>