<template>
    <div class="tickets-list-container">
        <div class="notification-loader" v-if="loaderFlag">
            <DoubleBounce></DoubleBounce>
        </div>
        <div class="tickets-list-body">
            <div class="ticket-item" v-for="ticket in ticketsList" :key="ticket">
                <div class="msg-body">
                    {{ticket.message}}
                </div>
                <div class="msg-reply">
                    {{getReplyFormate(ticket.reply)}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {getMyTickets} from '@/endpoints/support';
import {DoubleBounce} from 'vue-loading-spinner';

@Component({
    components: {
        DoubleBounce
    },
})
export default class TicketsList extends Vue {
    ticketsList = [];
    loaderFlag = false;
    async getMyTicketsList(){
        this.loaderFlag = true;
        this.ticketsList = await getMyTickets();
        this.loaderFlag = false;
    }
    getReplyFormate(reply){
        if(reply == null){
            return 'No Reply Yet';
        }else{
            if(reply.admin_reply == null){
                return 'No Reply Yet';
            }else{
                return reply.admin_reply;
            }
        }
    }
    mounted() {
        this.getMyTicketsList();
    }
}
</script>

<style scoped>
.tickets-list-container{
    width: 350px;
    height: 435px;
    border-radius: var(--md-radius);
    background: #f5f5f5;
    overflow: auto;
}
.tickets-list-body{
    padding: 15px;
}
.ticket-item{
    clear: both;
    margin-bottom: 10px;
    display: block;
    overflow: hidden;
}
.msg-body{
    width:100%;
    background: var(--main-green);
    color: #fff;
    border-radius: var(--md-radius);
    padding: 15px;
    margin-bottom: 10px;
    text-align: start;
}
.msg-reply{
    width: max-content;
    min-width: 30%;
    background: #fff;
    border-radius: var(--md-radius);
    color: var(--font-navy);
    max-width: 75%;
    float: right;
    padding: 15px;
    margin-top: -20px;
}
.notification-loader{
    width: 50%;
    margin: auto;
    text-align: center;
    line-height: 25;
}
</style>