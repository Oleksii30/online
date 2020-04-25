import request from 'request'

function requestToOtherServices(url,token){
    return new Promise((resolve, reject)=>{
        const headers = {
            Authorization: token
        }
        request({url:url, headers:headers, json:true},(error, response)=>{
            if (error){
                reject("Connection error")
            }
            else{
                resolve(response.body)
            }
        })
    })
}

export default requestToOtherServices