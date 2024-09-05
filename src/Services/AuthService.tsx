import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

export const loginAPI = async(username : string, password : string) => {
    try {
        const data = await axios.post<UserProfileToken>(process.env.REACT_APP_BACKEND_ENDPOINT + "account/login", {
            username : username,
            password : password
        });

        return data;
    } catch(e : any){
        handleError(e);
    }
}

export const registerAPI = async(email :string, username : string, password : string) => {
    try {
        const data = await axios.post<UserProfileToken>(process.env.REACT_APP_BACKEND_ENDPOINT + "account/register", {
            username : username,
            password : password,
            email : email
        });

        return data;
    } catch(e : any){
        handleError(e);
    }
}