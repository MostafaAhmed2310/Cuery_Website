import { api } from '@/helpers/axios.config';

export async function getMedicalTeam(){
    let res = await api
    .get('api/top_ten');
    if (res) return res.data
    else return false
}
export async function gethighestHospital(){
  let res = await api
  .get('api/highest_rate');
  if (res) return res.data
  else return false
}