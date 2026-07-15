import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
})

export const getSong = async ({mood})=>{
    const response =  await api.get('/api/songs?mood='+mood)

    return response.data
}