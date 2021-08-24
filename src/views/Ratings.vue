<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="messages-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>Ratings</h2>
            </div>
            <div class="ratings-body">
                <div class="rating-list">
                    <RatingList/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import RatingList from '@/components/ratings/RatingList.vue';

@Component({
    components: {
        DoubleBounce,
        RatingList
    },
})
export default class Messages extends Vue {
    loaderFlag = false;
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
.ratings-body{
    width: 85%;
    margin: auto;
    overflow: hidden;
    margin-top: -14%;
    background-color: #f1faf5;
    height: 100vh;
    padding-top: 13%;
}
.rating-list{
    height: 80vh;
    padding: 30px;
}
</style>
