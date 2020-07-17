import {superyouClient} from '.'
export const superyousignup = async (username:string, password:string, firstName:string, lastName:string,email:string,role:string) => {
    let credentials = {
        username,
        password,
        firstName,
        lastName,
        email,
        role
    }
    try{
        let response = await superyouClient.post('/signup', credentials)
        console.log(response)
    }catch(e){

    }
     
}