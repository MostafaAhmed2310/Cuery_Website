import { api } from '@/helpers/axios.config';

export async function getMyConversations(){
    let res = await api
    .get('api/getMyConversations');
    if (res) return res.data
    else return false
}