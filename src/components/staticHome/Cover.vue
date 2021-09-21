<template>
    <div class="cover-container">
        <div class="cover-body">
            <div class="info-cover">
                <h1>{{ $t("slogan") }}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat veritatis hic exercitationem ex odio,</p>
                <button>{{ $t("more") }}</button>
            </div>
            <div class="cover-mockup">
                <img src="@/assets/images/cover-mockup.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {

    },
})
export default class Cover extends Vue {
  
}
</script>

<style scoped>
.cover-container{
    background-image: url('../../assets/images/BG.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 745px;
    position: relative;
    clear: both;
    overflow: hidden;
    padding: 50px 0px;
    margin-top: -90px;
}
.cover-body{
    width: 80%;
    margin: auto;
}
.info-cover{
    float: left;
    width: 30%;
    color: var(--font-navy);
    margin-top: 20%;
}
.info-cover h1{
    line-height: 1.5;
    width: 245px;
}
.info-cover p{
    line-height: 1.5;
}
.info-cover button{
    background: var(--main-green);
    color: #fff;
    border: none;
    outline: none;
    display: block;
    padding: 10px 25px;
    border-radius: var(--sm-radius);
    cursor: pointer;
    border: 1px solid var(--main-green);
}
.info-cover button:hover{
    background: transparent;
    border: 1px solid var(--main-green);
    color: var(--main-green);
    transition: 0.7s;
}
.cover-mockup{
    width: 53%;
    float: right;
    margin-top: 100px;
}
.cover-mockup img{
    width: 100%;
}
</style>