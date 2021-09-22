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
export async function getSectionsList(){
  let res = await api
  .get('api/getSixSystemSections');
  if (res) return res.data
  else return false
}

export async function contactUs(contactObj:any){
  let res = await api
  .post('api/contact_us', contactObj);
  if (res) return res.data
  else return false
}

export async function getNews(){
  let res = await api
  .get('api/get_news');
  if (res) return res.data
  else return false
}