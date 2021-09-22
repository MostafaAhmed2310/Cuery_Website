<template>
    <div>
        <div class="news-container" v-for="item in news" :key="item">
            <div class="news-body">
                <h3>{{item.title}}</h3>
                <span>{{item.content}}</span>
                <img v-if="item.image_path" :src="BaseUrl+item.image_path" alt="">
                <div v-if="item.image_path == null" class="img-placeholder"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getNews} from '@/endpoints/static_pages';
import {BaseUrl} from '@/app.config';
@Component({
    components: {
        
    },
})
export default class News extends Vue {
    news:any[] = [];
    BaseUrl = BaseUrl;
    async getNewsList(){
        this.news = await getNews();
    }
    mounted() {
        this.getNewsList();
    }
}
</script>

<style scoped>
.news-container{
    width: 100%;
    background: #fff;
    color: var(--font-navy);
    border-radius: var(--md-radius);
    border: 2px solid var(--main-green);
    padding: 30px;
    overflow: hidden;
    margin-bottom: 35px;
    position: relative;
}
.news-icon{
    float: left;
    margin-right: 3%;
}
.news-body span{
    float: right;
    font-size: 13px;
    width: 60%;
    font-weight: bold;
}
.news-body h3{
    margin: 0px 0px 30px 0px;
    width: 60%;
    float: right;
}
.news-btn{
    overflow: hidden;
    clear: both;
    display: block;
    padding-top: 20px;
    text-align: center;
}
.news-btn button{
    background: rgba(241, 250, 245, 1);
    color: var(--main-green);
    outline: none;
    border: 0;
    border-radius: var(--md-radius);
    padding: 15px 55px;
    cursor: pointer;
    font-weight: bold;
}
.news-body img{
    background: var(--font-navy);
}
.img-placeholder{
    width: 35%;
    height: 100%;
    background: var(--font-navy);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
}
.news-body img{
    width: 35%;
    height: 100%;
    background: var(--font-navy);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
}
</style>