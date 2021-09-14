<template>
    <div class="appoinetments-list-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="appoinetments-item" v-for="item in items" :key="item">
            <router-link :to="'/normal-appoinetment-details/' + item.id">
                <div class="profile-img">
                    <img :src="BaseUrl+item.image_path" alt="" v-if="item.image_path">
                    <i class="fas fa fa-user-circle" v-if="item.image_path == null"></i>
                </div>
                <div class="appoinetments-info">
                    <h4>{{item.name}}</h4>
                    <span>{{item.section_title}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { getAppoinetmentsList, finishAppoinetment } from '@/endpoints/appoinetments';
import {DoubleBounce} from 'vue-loading-spinner';
import {BaseUrl} from '@/app.config';
@Component({
    components: {
        DoubleBounce
    },
})
export default class AppoinetmentsLists extends Vue {
    items = [];
    loaderFlag = false;
    length = 0;
    BaseUrl = BaseUrl;
    async getAppoinetmentsList(){
        this.loaderFlag = true;
        this.items = await getAppoinetmentsList();
        this.length = this.items.length;
        this.checkArrayLength();
        this.loaderFlag = false;
    }
    checkArrayLength(){
        this.$emit('updateLength', this.length);
    }

    mounted(){
        this.getAppoinetmentsList();
    }
    

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
.profile-img img{
    width: 100%;
    height: 100%;
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