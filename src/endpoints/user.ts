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

export async function editProfile(user_id:any, data:any){
    let res = await api
    .put('api/edit_profile/'+user_id, data);
    if (res) return res.data
    else return false
}

export async function getSpTypes(){
    let res = await api
    .get('api/get_sp_types/');
    if (res) return res.data
    else return false
}