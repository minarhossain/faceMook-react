import { useEffect } from "react"
import { api } from "../api"
import { useAuth } from "./useAuth"


// hook
const useAxios = () => {
    const {auth, setAuth} = useAuth()
    useEffect(() => {
        // Add a request interceptor




        api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
)

        // Add a response interceptor
    },[])
}