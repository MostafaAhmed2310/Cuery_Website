<template>
    <div class="appoinetments-list-container">
        <div class="appoinetments-item" v-for="item in emergencyItems" :key="item">
            <router-link :to="'/emergency-appoinetment-details/' + item.id">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <div class="appoinetments-info">
                    <h4>Mostafa Ahmed</h4>
                    <span>Section Name</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class AppoinetmentsEmergency extends Vue {
    emergencyItems = [
        {id:1},
        {id:3},
        {id:5},
    ];
}
</script>

<style scoped>
.appoinetments-list-container{
    overflow: auto;
    position: relative;
    width: 100%;
    padding: 30px 0px;
    height: 80vh;
}
.appoinetments-item{
    width: 80%;
    margin: auto;
    background: #fff;
    border-radius: var(--md-radius);
    box-shadow: 0px 1px 2px 0px #ddd;
    padding: 20px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
}
.profile-img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 2%;
    background: var(--main-green);
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 1.5;
}
.appoinetments-info{
    float: right;
    width: 70%;
    color: var(--font-navy);
}
.appoinetments-info h4{
    margin: 0px 0px 5px 0px;
    font-size: 15px;
}
.appoinetments-info span{
    font-size: 11px;
}
.appoinetments-btns button{
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 6%;
    border-radius: var(--sm-radius);
    padding: 5px 10px;
    margin-top: 10px;
    color: #fff;
    background: var(--font-navy);
    float: right;
}
.appoinetments-btns button:hover{
    opacity: 0.8;
}
</style>