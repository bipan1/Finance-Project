import React, { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User"
import { useNavigate } from "react-router";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
    user : UserProfile | null;
    token : string | null;
    registerUser : (email : string, userName : string, password : string) => void;
    loginUser : (userName : string, password : string) => void;
    logout : () => void;
    isLoggedIn : () => boolean;
    loading : boolean;
}

type Props = {children : React.ReactNode};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({children} : Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if(user && token){
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        setIsReady(true);
    }, [token]);

    const registerUser = async(email : string, username : string, password : string) => {
        setLoading(true);
        await registerAPI(email, username, password).then((res) => {
            if(res){
                localStorage.setItem('token', res?.data.token);
                const userObj = {
                    userName : res?.data.userName,
                    email : res?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!)
                setUser(userObj);
                toast.success("Login Success")
                navigate("/search");
            }
        }).catch((e:any) => toast.warning("Server error happened"))
        .finally(() => setLoading(false));
        
    }

    const loginUser = async(username : string, password : string) => {
        setLoading(true);
        await loginAPI(username, password).then((res) => {
            if(res){
                localStorage.setItem('token', res?.data.token);
                const userObj = {
                    userName : res?.data.userName,
                    email : res?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!)
                setUser(userObj);
                toast.success("Login Success")
                navigate("/search");
            }
        }).catch((e:any) => toast.warning("Server error happened"))
        .finally(() => setLoading(false));
        
    }

    const isLoggedIn = () => {
        return !!user;
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");

    }

    return (
        <UserContext.Provider value={{loginUser, loading, user, token, logout, registerUser, isLoggedIn}}>
            {isReady ? children: null}
        </UserContext.Provider>
    )
}


export const useAuth = () => React.useContext(UserContext);