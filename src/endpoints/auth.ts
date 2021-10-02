import { api,updateAxiosHeader } from '@/helpers/axios.config';
import { getHeaderConfig, setHeaderConfig } from '@/helpers/utils'

export async function login(email: any, password: any, role_id:any) {

    let headerConfig: any = getHeaderConfig()
    let response = await api.post('api/login', { email: email, password: password, role_id: role_id })
    .then((response) => {
        let token = 'Bearer ' + response.headers.token
        headerConfig = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': token,
            }
        }
        setHeaderConfig(headerConfig);
        updateAxiosHeader()


        return response;
    })
    return response;
}


