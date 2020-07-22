  
import { superyouClient } from ".";


export const superyouGetAllUsers = async () =>{
    try{
        let response = await superyouClient.get('/users')
        return response.data
    }catch(e){
        console.log(e);
        return('Something went wrong')              
    }
}