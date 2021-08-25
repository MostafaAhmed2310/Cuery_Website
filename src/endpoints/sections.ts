import { api } from '@/helpers/axios.config';

export async function getMySections(){
    let res = await api
    .get('api/list_SP_sections');
    if (res) return res.data
    else return false
}
export async function getAllSections(){
    let res = await api
    .get('api/list_sections_to_SP');
    if (res) return res.data
    else return false
}