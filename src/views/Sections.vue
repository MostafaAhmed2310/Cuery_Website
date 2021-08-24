<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="sections-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>My Sections</h2>
                <div class="section-btns">
                    <router-link to="/add-section">
                        <button class="add-section"><i class="fas fa-plus-circle"></i>Add New Section</button>
                    </router-link>
                    <button class="suggest-section"><i class="fas fa-plus-circle"></i>Suggest New Section</button>
                </div>
            </div>
            <div class="sections-inputs-body">
                <div class="right-side">
                    <img src="@/assets/images/section-img.png" alt="">
                </div>
                <div class="left-side">
                    <div class="section-items" v-for="section in sections" :key="section">
                        <div class="item">
                            <div class="section-item-img">
                                <img src="@/assets/images/services/cardiogram.png" alt="">
                            </div>
                            <span>Blood Section</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';

@Component({
    components: {
        DoubleBounce,
    },
})
export default class Sections extends Vue {
    loaderFlag = false;
    sections = [0,1,2,3,4,5];
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
.sections-inputs-body{
    width: 85%;
    margin: auto;
    overflow: hidden;
    margin-top: 20px;
}
.right-side{
    float: right;
    width: 25%;
}
.right-side img{
    width: 100%;
}
.left-side{
    width: 70%;
    float: left;
}
.section-items .item{
    width: 230px;
    height: 70px;
    border-radius: 5px;
    background: rgba(241, 250, 245, 1);
    overflow: hidden;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left;
    padding: 20px;
}
.section-item-img{
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 10px;
}
.section-item-img img{
    width: 100%;
    height: 100%;
}
.item span{
    line-height: 2;
    color: var(--font-navy);
}
.section-btns{
    position: absolute;
    right: 100px;
    bottom: 70px;
}
.section-btns button{
    padding: 10px 15px;
    background: var(--font-navy);
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-right: 20px;
}
.section-btns button:hover{
    opacity: 0.8;
}
.section-btns button i{
    margin-right: 10px;
}
</style>
