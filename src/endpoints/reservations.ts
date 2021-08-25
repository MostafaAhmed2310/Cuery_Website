import { api } from '@/helpers/axios.config';

export async function getReservation(id:any){
    let res = await api
    .get('api/reservations/view_reservation/'+id);
    if (res) return res.data
    else return false
}

export async function getEmergencyReservation(id:any){
    let res = await api
    .get('api/reservations/view_reservation/'+id); // will change
    if (res) return res.data
    else return false
}

export async function getReservationsList(){
    let res = await api
    .get('api/reservations/list_reservations_to_SP');
    if (res) return res.data
    else return false
}

export async function confirmReservation(id:any){
    let res = await api
    .put('api/reservations/accept_reservation/'+id);
    if (res) return res.data
    else return false
}

export async function declineReservation(id:any){
    let res = await api
    .put('api/reservations/reject_reservation/'+id);
    if (res) return res.data
    else return false
}

export async function getlatestReservations(){
    let res = await api
    .get('api/latestReservations');
    if (res) return res.data
    else return false
}
