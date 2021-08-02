import { api } from '@/helpers/axios.config';

export async function getMyConversations(){
    let res = await api
    .get('api/getMyConversations');
    if (res) return res.data
    else return false
}

export async function sendMsg(id:any,data:any){
  let res = await api
  .post('api/SendMessage/'+id,data);
  if (res) return res.data
  else return false
}

export async function getUserConversation(id:any){
  let res = await api
  .get('api/getUserConversation/'+id);
  if (res) return res.data
  else return false
}

export async function deleteMsg(id:any){
  let res = await api
  .put('api/DeleteMessage/'+id);
  if (res) return res.data
  else return false
}
