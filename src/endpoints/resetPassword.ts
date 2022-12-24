import { api } from '@/helpers/axios.config';

export async function sendEmail(email:any){
  let res = await api
  .post('api/forgot/', email);
  if (res) return res
  else return false
}

export async function resetPassword(data:any){
  let res = await api
  .post('api/reset/', data);
  if (res) return res
  else return false
}