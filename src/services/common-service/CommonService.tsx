import { getAuthToken } from "../../util/Auth"

export function getApi(url:string){
    return fetch(url)
}

export function postApi(url:string, reqBody: any, isLoginReq: boolean = false){
    const token = getAuthToken();
    let reqHeaders: any = {'Content-Type' : 'application/json'};
    if(!isLoginReq){
        reqHeaders["Authorization"] = 'Bearer ' + token;
    }
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: reqHeaders
    })
}