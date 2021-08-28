<template>
    <div class="sections-container">
        <div class="sections-title">
            <h2>My Sections</h2>
        </div>
        <div class="sections-body">
            <div class="section-item" v-for="section in sectionsList" :key="section">
                <div class="item">
                    <img src="@/assets/images/services/rooms.png" alt="">
                </div>
                <p>{{ section.section_title }}</p>
            </div>
            <router-link to="/sections">
                <span>More <i class="fas fa fa-sort-up"></i></span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getHomeSections } from '@/endpoints/sections';

@Component({
    components: {

    },
})
export default class Sections extends Vue {

 sectionsList = [];
    async getHomeSections(){
        this.sectionsList = await getHomeSections();
    }

    mounted(){
        this.getHomeSections()
    }
}
</script>

<style scoped>
.sections-container{
    width: 100%;
    background: var(--font-navy);
    color: #fff;
    border-top-left-radius: var(--md-radius);
    border-top-right-radius: var(--md-radius);
    padding: 30px;
    margin-top: 1%;
    margin-bottom: 35px;
}
.section-item{
    text-align: center;
    width: 28%;
    margin-right: 5%;
    display: inline-block;
}
.section-item .item{
    text-align: center;
    width: 100%;
    height: 15vh;
    background: #fff;
    border-radius: var(--md-radius);
}
.section-item .item img{
    width: auto;
    margin: auto;
    margin-top: 15px;
    height: 10vh;
}
.section-item p{
    font-size: 10px;
}
.sections-body span{
    float: right;
    margin-right: 25px;
    margin-top: 35px;
}
.sections-body a{
    color: #fff !important;
}
.sections-body span:hover{
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}
.sections-body span i{
    transform: rotate(90deg);
}
</style>