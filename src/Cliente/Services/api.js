import axios from 'axios';
import ip from '../../config/ip';

const enviar = axios.create({
        baseURL: `http://${ip}:5001/api`
})
    
export default enviar
