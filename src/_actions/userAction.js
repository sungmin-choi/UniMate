import { REGISTER_USER,LOGIN_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL="/users";

export function registerUser(dataTosubmit){
    const data = request("post",USER_URL+"/signup",dataTosubmit);
        return{
        type:REGISTER_USER,
        payload:data,
    };

}

export function loginUser(dataTosubmit){
        return{
        type:LOGIN_USER,
        payload:dataTosubmit,
    };
}