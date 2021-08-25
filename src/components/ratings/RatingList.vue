<template>
    <div class="user-list-container">
        <div class="rating-item" v-for="rating in ratingList" :key="rating">
                <div class="block">
                    <div class="left-btn">
                        <button>{{rating.section_title}}</button>
                    </div>
                </div>
                <div class="stars-container">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-info">
                    <p v-if="rating.section_title">{{rating.section_title}}</p>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getRatingList} from  '@/endpoints/ratings';

@Component({
    components: {

    },
})
export default class RatingList extends Vue {
    ratingList:any[] = []
    async getRatingList(){
        this.ratingList = await getRatingList();
    }
    mounted(){
        this.getRatingList()
        console.log(this.ratingList )
    }
}
</script>

<style scoped>
.user-list-container{
    overflow: auto;
    position: relative;
    width: 100%;
    padding: 30px 0px;
    height: 65vh;
}
.rating-item{
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
.rating-item:hover{
    opacity: 0.9;
}
.profile-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 2%;
    background: var(--main-green);
    color: #fff;
    font-size: 35px;
    text-align: center;
    line-height: 1.5;
}
.rating-info{
    display: inline;
    float: left;
    width: 50%;
    color: var(--font-navy);
}
.rating-info p{
    font-size: 18px;
}
.block{
    display: inline;
    clear: both;
    overflow: hidden;
}
.block h5{
    color: var(--font-navy);
}
.left-btn{
    float: left;
}
.left-btn button{
    width: 80px;
    height: 80px;
    border-radius: var(--sm-radius);
    color: #fff;
    background: var(--font-navy);
    border: none;
    outline: none;
    margin-right: 5%;
    float: left;
}
.stars-container{
    margin-left: 14%;
    margin-top: 2.5%;
    float: left;
    width: 25%;
}
</style>