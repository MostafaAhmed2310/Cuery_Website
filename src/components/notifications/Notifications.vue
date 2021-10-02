<template>
    <div class="notifications-container">
        <div class="notification-loader" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="notification-item" v-for="notification in notificationsList" :key="notification">
            <div @click="notificationRedirect(notification.redirection_id, notification.type, notification.title)" class="normal-border" :class="{'emergency-border' : notification.type == 'Emergency Reservation'}">
                <div class="profile-img">
                    <img v-if="notification.action_by_profile_path" :src="BaseUrl+notification.action_by_profile_path" alt="">
                    <i v-if="notification.action_by_profile_path == null" class="fas fa fa-user-circle"></i>
                </div>
                <div class="user-info">
                    <h4>{{notification.action_by_name}}</h4>
                    <span>{{notification.body}}</span>
                    <span class="from-time">{{notification.from}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {getNotificationsList} from '@/endpoints/notifications';
import {BaseUrl} from '@/app.config';
import {DoubleBounce} from 'vue-loading-spinner';
@Component({
    components: {
        DoubleBounce,
    },
})
export default class Notifications extends Vue {
    notificationsList = [];
    BaseUrl = BaseUrl;
    loaderFlag = false;
    refetchNotificationList(){
        this.getNotifications();
    }
    async getNotifications(){
        this.loaderFlag = true;
        this.notificationsList = await getNotificationsList();
        this.loaderFlag = false;
    }
    notificationRedirect(id, type, title){
        if(type == 'Normal Reservation' && title == 'new reservation!'){
            this.$router.push('/reservations/'+ id);
        }else if(type == 'Emergency Reservation' && title == 'New Emergency!'){
            this.$router.push('/emergency/'+ id);
        }else if(type == 'Emergency Reservation' && title == 'Client Confirmed!'){
            this.$router.push('/emergency-appoinetment-details/'+ id);
        }
    }
    mounted() {
        this.getNotifications();
    }
}
</script>

<style scoped>
.notifications-container{
    position: relative;
    overflow: auto;
    height: 370px;
    margin: 15px 0px;
}
.notification-item{
    clear: both;
    overflow: hidden;
    display: block;
    background:#fff;
    padding-top: 10px;
    /* border-bottom: 0.5px solid #ddd; */
}
.notification-item:hover{
    background: #f5f5f5;
    cursor: pointer;
}
.profile-img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 5%;
    background: var(--main-green);
    color: #fff;
    font-size: 45px;
    text-align: center;
    line-height: 1.5;
    margin-left: 20px;
}
.profile-img img{
    width: 100%;
    height: 100%;
}
.user-info{
    float: left;
    width: 70%;
    color: var(--font-navy);
    margin-bottom: 20px;
}
.user-info h4{
    margin: 0px 0px 5px 0px;
}
.user-info span{
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
}
.from-time{
    color: var(--active-green);
    font-size: 11px !important;
}
.normal-border{
    border-right: 4px solid var(--main-green);
    overflow: hidden;
}
.emergency-border{
    border-right: 4px solid var(--alert-color);
    overflow: hidden;
}
.notification-loader{
    width: 50%;
    margin: auto;
    text-align: center;
    line-height: 25;
}
</style>