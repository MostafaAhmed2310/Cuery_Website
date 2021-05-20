import { headerConfigKeyName} from '@/app.config'

export function getAuthState(): boolean {
    let auth_state = localStorage.getItem(headerConfigKeyName) ? true : false;
    return auth_state;
}

export function clearAuthInfo(){
    localStorage.removeItem(headerConfigKeyName);
}


export function setHeaderConfig(header:any){
    localStorage.setItem(headerConfigKeyName,JSON.stringify(header))
}

export function getHeaderConfig() {
    return localStorage.getItem(headerConfigKeyName)?
    JSON.parse(<any>localStorage.getItem(headerConfigKeyName)):
    {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    };
}