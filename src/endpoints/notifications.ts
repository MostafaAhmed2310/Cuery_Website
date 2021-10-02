import { api } from '@/helpers/axios.config';

export async function saveFcmToken(data:any){
    let res = await api
    .post('api/saveToken', data);
    if (res) return res.data
    else return false
}

export async function getNotificationsList(){
    let res = await api
    .get('api/getNotifications');
    if (res) return res.data
    else return false
}
