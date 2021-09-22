<template>
    <div class="messages-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="messages-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>
                    <router-link to="/hospital_home">
                        <i class="fas fa-chevron-left"></i> 
                    </router-link>
                    {{ $t("ratings.title") }}
                </h2>
            </div>
            <div v-if="placeHolderFlag">
                <PagePlaceholder/>
            </div>
            <div class="ratings-body" v-if="ratingBody">
                <div class="rating-list">
                    <RatingList @updateLength="updateLength"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue} from 'vue-property-decorator';
import {DoubleBounce} from 'vue-loading-spinner';
import RatingList from '@/components/ratings/RatingList.vue';
import PagePlaceholder from '@/views/PagePlaceholder.vue';
@Component({
    components: {
        DoubleBounce,
        RatingList,
        PagePlaceholder,
    },
})
export default class Messages extends Vue {
    loaderFlag = false;
    placeHolderFlag = false;
    ratingBody = true;
    scrollToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    updateLength(len){
        if(len == 0){
            this.placeHolderFlag = true;
            this.ratingBody = false;
        }else{
            this.placeHolderFlag = false;
            this.ratingBody = true;
        }
    }
    mounted() {
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
.cover-img h2 i{
    cursor: pointer;
    margin-right: 10px;
    color: var(--font-navy) !important;
}
</style>
