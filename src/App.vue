<template>
    <div id="app">
        <ChoosedView/>
    </div>
</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

:root{
    --background-color: #fff;
    --main-green: #30A362;
    --active-green: #43C079;
    --light-green: #97D180;
    --alert-color: #C53A3A;
    --icon-navy: #434F75;
    --font-navy: #2E3A60;
    --main-table-color: #F1FAF5;
    --second-table-color: #F9FDFB;
    --sm-radius: 5px;
    --md-radius: 10px;
    --lg-radius: 15px;
    --Xlg-radius: 20px;
    --full-width: 100%;
    --half-width: 50%;
}

*{
    font-family:'Roboto','cairo';
    box-sizing: border-box;
}
body{
    margin: 0;
}
a{
    text-decoration: none !important;
}
.slider-body .carousel-3d-slider {
    width: 285px !important;
    height: 310px !important;
}
.slider-body .carousel-3d-slide {
    border-radius: var(--md-radius) !important;
    border-color: transparent !important;
    border-style: none !important;
    background-color: transparent !important;
    box-shadow: 2px 3px 5px 1px #ddd !important;
    text-align: center !important;
    width: 285px !important;
    height: 310px !important;
    overflow: inherit !important;
}
.slider-body .carousel-3d-slide img {
    width: auto !important;
}
.slider-body .carousel-3d-container {
    min-height: 350px !important;
    margin: 80px auto !important;
    padding-top: 30px !important;
    overflow: inherit !important;
}
.slider-body .carousel-3d-controls {
    position: relative !important;
    top: 10% !important;
    height: 60px !important;
    margin-top:0px !important; 
    width: 135px !important;
    margin: auto !important;
}
.carousel-3d-controls a {
    width: 40px !important;
    height: 40px !important;
    line-height: 35px !important;
    border-radius: var(--sm-radius) !important;
    
    text-align: center !important;
}
.carousel-3d-controls a span{
    display: none !important;
}
.carousel-3d-controls a{
    background-image: url('../src/assets/icons/arrow.png');
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: -8px;
}
.carousel-3d-controls a.next{
    transform: rotate(180deg);
    opacity: 1 !important;
}
.carousel-3d-controls a.prev:hover {
    box-shadow: 2px 3px 5px 1px #ddd !important;
    opacity: 1 !important;
}
.carousel-3d-controls a.next:hover{
    box-shadow: -2px -3px 5px 1px #ddd !important;
}
</style>



<script>
import Vue from "vue";
import ChoosedView from "@/views/ChoosedView.vue"
export default Vue.extend({
    name: "app",

    components: {
        ChoosedView,
    },
    
    data() {
        return {
        };
    },

});
</script>
