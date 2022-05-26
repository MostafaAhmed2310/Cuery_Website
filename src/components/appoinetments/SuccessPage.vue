<template>
    <div class="success-page-container">
        <div class="success-page-body">
            <h4>{{ $t("appoinetments.success") }}</h4>
            <p>{{ $t("appoinetments.success_msg") }}</p>
            <button @click="finishAppointments($route.params.id)">{{ $t("appoinetments.continue") }}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {

    },
})
export default class SuccessPage extends Vue {
    finishAppointments(id:any) {
        if(this.$router.currentRoute.name == 'EmergencySuccessPage'){
            this.$router.push("/finish-emergency-appoinetments/" + id);
        }else{
            this.$router.push("/finish-appoinetments/" + id);
        }
    }
}
</script>

<style scoped>
.success-page-container{
    width: 45%;
    height: 40vh;
    margin: auto;
    background: rgba(241, 250, 245, 1);
    border-radius: var(--md-radius);
    box-shadow: 0px 1px 2px 0px #ddd;
    text-align: center;
    padding: 30px;
    color: var(--font-navy);
}
.success-page-container p{
    font-size: 13px;
    margin-bottom: 30px;
}
.success-page-container button{
    padding: 10px 20px;
    background: var(--main-green);
    color: #fff;
    outline: none;
    border-radius: var(--sm-radius);
    cursor: pointer;
    border: none;
}
.success-page-container button:hover{
    opacity: 0.8;
}
</style>