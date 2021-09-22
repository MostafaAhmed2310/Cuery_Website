import { api } from '@/helpers/axios.config';

export async function getRatingList(sp_id:any){
    let res = await api
    .post('api/get_sp_ratings',sp_id);
    if (res) return res.data
    else return false
}