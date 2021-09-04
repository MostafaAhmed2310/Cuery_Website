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
export async function getHomeSections(){
    let res = await api
    .get('api/getSections');
    if (res) return res.data
    else return false
}
export async function assginSection(id:any){
    let res = await api
    .post('api/assign_section_to_sp/'+id);
    if (res) return res.data.id
    else return false
}
export async function addDetailsToSection(id:any,detailsObj:any){
    let res = await api
    .put('api/add_section_details/'+id, detailsObj);
    if (res) return res.data
    else return false
}
export async function suggestSection(suggestObj:any){
    let res = await api
    .post('api/suggest_field', suggestObj);
    if (res) return res.data
    else return false
}
export async function getSectionDetails(id:any){
    let res = await api
    .get('api/sp/get_SP_section_details/'+id);
    if (res) return res.data
    else return false
}
export async function getSectionDays(id:any){
    let res = await api
    .get('api/sp/get_SP_section_available_days/'+id);
    if (res) return res.data
    else return false
}
export async function unassignSection(id:any){
    let res = await api
    .post('api/unassign_section_to_sp/'+ id);
    if (res) return res.data
    else return false
}