import { api } from '@/helpers/axios.config';

export async function getUserInfo(){
    let res = await api
    .get('api/user');
    if (res) return res.data
    else return false
}

export async function signup(data:any){
    let res = await api
    .post('api/register', data);
    if (res) return res.data
    else return false
}