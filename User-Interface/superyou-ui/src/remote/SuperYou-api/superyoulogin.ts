import {superyouClient} from '.'
export const superyoulogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await superyouClient.post('/login', credentials)
        console.log(response)
    }catch(e){

    }
     
}