import { api } from '@/helpers/axios.config';

export async function getAppoinetmentsList(){
    let res = await api
    .get('api/reservations/SP_accepted_reservation');
    if (res) return res.data
    else return false
}
export async function getEmergencyAppoinetmentsList(){
  let res = await api
  .get('api/list_client_accepted_res_for_sp');
  if (res) return res.data
  else return false
}
export async function finishAppoinetment(id:any){
    let res = await api
    .put('api/reservations/finish_reservation/'+id);
    if (res) return res.data
    else return false
}