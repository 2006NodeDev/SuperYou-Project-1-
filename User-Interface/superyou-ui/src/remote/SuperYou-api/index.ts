//this index is for seting up axios client 
import axios from 'axios'

//we will use this object to send off all of the other request we make to the lightlyburning api
export const superyouClient = axios.create({
    baseURL: 'http://localhost:2020',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})