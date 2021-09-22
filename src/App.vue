<template>
    <div id="app">
        <ChoosedView/>
    </div>
</template>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import '~vue2-timepicker/dist/VueTimepicker.css';
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
    overflow-x: hidden;
    scroll-behavior: smooth;
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
.loader-container{
    text-align: center;
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 40;
    z-index: 9999;
    background: rgba(0,0,0,0.2);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.spinner--double-bounce{
    width: 65px !important;
    height: 65px !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.sections-inputs-body .multiselect{
    width: 80% !important;
    color: var(--main-green) !important;
}
.sections-inputs-body .multiselect__select{
    height: 45px !important;
}
.sections-inputs-body .multiselect__tags {
    min-height: 45px !important;
    background: rgba(241, 250, 245, 1) !important;
    color: var(--main-green) !important;
    line-height: 2 !important;
}
.sections-inputs-body .multiselect__placeholder{
    color: var(--main-green) !important;
}
.sections-inputs-body .multiselect__select:before {
    border-color:var(--main-green) transparent transparent !important;
}
.time-container .vue__time-picker input.display-time{
    border: none;
    width: 10em;
    height: 2.2em;
    padding: .3em .5em;
    font-size: 1em;
    box-shadow: 0px 1px 4px 0px #ddd;
    border-radius: 5px;
    outline: var(--main-green) !important;
}
.swal2-styled.swal2-confirm{
    background: var(--font-navy) !important;
}
.swal2-content{
    color: var(--font-navy) !important;
    font-weight: bold !important;
}
.calendar svg{
    width: 75px !important;
    height: 75px !important;
}
.placeholder-icon svg{
    width: 150px !important;
    height: 150px !important;
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
