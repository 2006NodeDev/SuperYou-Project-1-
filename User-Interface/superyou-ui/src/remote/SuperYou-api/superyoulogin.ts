import {superyouClient} from '.'
export const superyoulogin = async (username:string, password:string) => {
    let credentials = {
        username,
        password
    }
    try{
        let response = await superyouClient.post('/login', credentials)
        console.log(response)
        return response.data //should be the user object
    }catch(e){
        console.log(e)
        //should return an error
    }
     
}