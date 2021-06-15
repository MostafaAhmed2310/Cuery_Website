<template>
    <div class="table-container">
        <div class="table-title">
            <h4>Latest Reservations</h4>
        </div>
        <div class="table-body">
            <div class="table-row" v-for="row in tableArr" :key="row">
                <div class="profile-img">
                    <img src="" alt="">
                    <i class="fas fa fa-user-circle"></i>
                </div>
                <span class="patient-name">Mostafa Ahmed</span>
                <span class="section-name">Section Name</span>
                <span class="see-more">See More</span>
                <div class="table-btns">
                    <button class="green-btn">Confirm</button>
                    <button class="red-btn">Decline</button>
                </div>
                <hr>
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
export default class ReservationsTable extends Vue {
    tableArr:any[] = [0,1,2,3];
}
</script>

<style scoped>
.table-container{
    background: rgba(241, 250, 245, 1);
    border-radius: var(--md-radius);
    padding: 30px;
    clear: both;
    width: 98%;
    margin: auto;
    margin-bottom: 30px;
    overflow: hidden;
}
.table-title h4{
    margin: 15px 0px;
    color: var(--font-navy)
}
.profile-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: var(--main-green);
    float: left;
    margin-right: 2%;
    text-align: center;
    font-size: 27px;
    line-height: 1.5;
    margin-top: 5px;
}
.table-row{
    overflow: hidden;
    line-height: 3;
}
.patient-name{
    width: 150px;
    display: inline-block;
    font-size: 14px;
    color: var(--font-navy);
    font-weight: bold;
}
.section-name{
    width: 150px;
    display: inline-block;
    font-size: 12px;
    color: var(--font-navy);
}
.see-more{
    color: var(--main-green);
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}
.table-btns{
    float: right;
}
.table-btns button{
    padding: 10px 15px;
    border-radius: var(--sm-radius);
    outline: none;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
}
.table-btns button:hover{
    opacity: 0.8;
    transition: 0.6s;
}
.green-btn{
    background: rgba(48, 163, 98, 1);
    margin-right: 30px;
}
.red-btn{
    background: rgba(197, 58, 58, 1);
}
</style>