import {ADD_LOGIN_USER} from './types'
const addUser = (user)=>{
    return{
        type: ADD_LOGIN_USER,
        user
    }        
}

export default addUser;



