import { api } from '@/helpers/axios.config';

export async function getRatingList(){
    let res = await api
    .get('api/list_sections_to_SP'); //to be change
    if (res) return res.data
    else return false
}