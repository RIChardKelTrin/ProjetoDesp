import axios from 'axios';

const enviar = axios.create({
    baseURL:"http://192.168.15.46:5001/api"
})

export default enviar
