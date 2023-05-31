
export function getApi(url:string){
    return fetch(url)
}

export function postApi(url:string, reqBody: any){
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers:{'Content-Type' : 'application/json'}
    })
}