import { api } from '@/helpers/axios.config';

export async function createTicket(ticketBody:any){
    let res = await api
    .post('api/request_ticket', ticketBody);
    if (res) return res.data
    else return false
}

export async function getMyTickets(){
    let res = await api
    .get('api/get_my_tickets');
    if (res) return res.data
    else return false
}
