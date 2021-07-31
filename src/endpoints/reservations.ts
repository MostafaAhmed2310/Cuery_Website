import { api } from '@/helpers/axios.config';

export async function getReservation(id:any){
    let res = await api
    .get('api/reservations/view_reservation/'+id);
    if (res) return res.data
    else return false
}