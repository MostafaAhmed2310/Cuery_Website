<template>
    <div class="reservations-container">
        <div class="loader-container" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="reservations-body">
            <div class="cover-img">
                <img src="@/assets/images/profile-cover.png" alt="">
                <h2>Reservations</h2>
            </div>
            <div class="reservations-inputs-body">
                <div class="reservations-panal">
                    <ReservationsList/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ReservationsList from '@/components/reservations/ReservationsList.vue';
@Component({
    components: {
        ReservationsList
    },
})
export default class Reservations extends Vue {
    loaderFlag:Boolean = false;
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
.reservations-inputs-body{
    width: 85%;
    margin: auto;
    overflow: hidden;
    margin-top: -14%;
}
.reservations-panal{
    width: 30%;
    float: left;
    background: rgba(241, 250, 245, 1);
    height: 100vh;
    padding-top: 10%;
    margin-top: 6%;
    margin-right: 5%;
}
</style>