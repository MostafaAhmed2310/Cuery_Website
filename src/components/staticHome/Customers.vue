<template>
    <div class="customer-slider-container">
        <div class="slider-body">
            <carousel-3d 
                :perspective="0" 
                :space="450" 
                :controls-visible="true" 
                :clickable="false" 
                :autoplay="true" 
                :autoplay-timeout="3000" 
                :display="3"
            >
                <slide :index="0">
                    <div class="slide-item">
                        <div class="user-img">
                            <img src="@/assets/images/users/1.jpg" alt="">
                        </div>
                        <div class="comma-img">
                            <img src="@/assets/images/comma.png" alt="">
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis corporis facilis vitae rerum ab odit animi. Culpa doloremque ducimus labore veniam cumque, earum assumenda quisquam reiciendis, facilis veritatis aperiam! </p>
                        <h4>Patient Name</h4>
                    </div>
                </slide>
                <slide :index="1">
                    <div class="slide-item">
                        <div class="user-img">
                            <img src="@/assets/images/users/2.jpeg" alt="">
                        </div>
                        <div class="comma-img">
                            <img src="@/assets/images/comma.png" alt="">
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis corporis facilis vitae rerum ab odit animi. Culpa doloremque ducimus labore veniam cumque, earum assumenda quisquam reiciendis, facilis veritatis aperiam!</p>
                        <h4>Patient Name</h4>
                    </div>
                </slide>
                <slide :index="2">
                    <div class="slide-item">
                        <div class="user-img">
                            <img src="@/assets/images/users/3.jpg" alt="">
                        </div>
                        <div class="comma-img">
                            <img src="@/assets/images/comma.png" alt="">
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis corporis facilis vitae rerum ab odit animi. Culpa doloremque ducimus labore veniam cumque, earum assumenda quisquam reiciendis, facilis veritatis aperiam!</p>
                        <h4>Patient Name</h4>
                    </div>
                </slide>
                <slide :index="3">
                    <div class="slide-item">
                        <div class="user-img">
                            <img src="@/assets/images/users/2.jpeg" alt="">
                        </div>
                        <div class="comma-img">
                            <img src="@/assets/images/comma.png" alt="">
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis corporis facilis vitae rerum ab odit animi. Culpa doloremque ducimus labore veniam cumque, earum assumenda quisquam reiciendis, facilis veritatis aperiam!</p>
                        <h4>Patient Name</h4>
                    </div>
                </slide>
                <slide :index="4">
                    <div class="slide-item">
                        <div class="user-img">
                            <img src="@/assets/images/users/3.jpg" alt="">
                        </div>
                        <div class="comma-img">
                            <img src="@/assets/images/comma.png" alt="">
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis corporis facilis vitae rerum ab odit animi. Culpa doloremque ducimus labore veniam cumque, earum assumenda quisquam reiciendis, facilis veritatis aperiam!</p>
                        <h4>Patient Name</h4>
                    </div>
                </slide>
            </carousel-3d>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Carousel3d, Slide } from 'vue-carousel-3d';

@Component({
    components: {
        Carousel3d,
        Slide
    },
})
export default class Customers extends Vue {
  
}
</script>

<style scoped>
.user-img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0px 0px 6px 0px #ddd;
    display: block;
    margin: auto;
    margin-top: -50px;
    overflow: hidden;
}
.user-img img {
    width: 100%;
    height: 100%;
}
.comma-img {
    margin: 20px 0px;
}
.slide-item p {
    font-size: 14px;
    width: 90%;
    margin: auto;
    color: var(--font-navy);
    line-height: 1.5;
    height: 130px;
    overflow: auto;
}
.slide-item h4{
    color: var(--main-green);
}
</style>