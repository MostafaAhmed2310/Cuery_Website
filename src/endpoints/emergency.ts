import { api } from '@/helpers/axios.config';

export async function getPendingEmergencyList(){
    let res = await api
    .get('api/list_pending_emergancy_to_sp');
    if (res) return res.data
    else return false
}

export async function getMyServices(){
    let res = await api
    .get('api/list_sp_services');
    if (res) return res.data
    else return false
}

export async function getAllServices(){
    let res = await api
    .get('api/list_services');
    if (res) return res.data
    else return false
}

export async function assginService(id:any){
  let res = await api
  .post('api/assign_service_to_sp/'+id);
  if (res) return res.data.id
  else return false
}

export async function addDetailsToService(id:any,detailsObj:any){
  let res = await api
  .put('api/add_service_details/'+id, detailsObj);
  if (res) return res.data
  else return false
}

export async function getServiceDetails(id:any){
  let res = await api
  .get('api/get_SP_service_details/'+id);
  if (res) return res.data
  else return false
}

export async function unassignService(id:any){
  let res = await api
  .get('api/unassign_service_to_sp/'+ id);
  if (res) return res.data
  else return false
}

export async function declineEmergency(id:any){
  let res = await api
  .post('api/reject_emergency/'+id);
  if (res) return res.data.id
  else return false
}

export async function acceptEmergencyReservation(id:any){
  let res = await api
  .post('api/sp_accept_emerg_reservation/'+id);
  if (res) return res.data.id
  else return false
}
export async function confirmCodeEmergency(id:any, data:any){
  let res = await api
  .post('/api/confirm_code/'+id, {'secret_code':data});
  if (res) return res.data
  else return false
}