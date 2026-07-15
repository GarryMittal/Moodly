import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
});



export const register = async({email,password,username})=>{

    const response = await api.post('/api/auth/register',{
        email,password,username
    });

    return response.data;

}

export const login = async({identifier,password})=>{
    const response = await api.post('/api/auth/login',{
        identifier,password
    });

    return response.data;
}

export const getMe = async()=>{
    const response = await api.get('/api/auth/get-me');

    return response.data;
}

export const logout = async()=>{
    const response = await api.get('/api/auth/logout');

    return response.data;
}