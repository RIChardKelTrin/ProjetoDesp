import axios from "axios"
import enviar from '../../Cliente/Services/api';

class UsuarioService{

async Login(data){
    return axios({
        url: enviar.API_URL + "/Login",
        method: "POST",
        timeout: enviar.TIMEOUT_REQUEST,
        data: data,
        headers: enviar.HEADER_REQUEST
    }).then((response) => {
        AsyncStorage.setItem("TOKEN", response.data.access_token)
        return Promise.resolve(response)
    }).catch((error) => {
        return Promise.reject(error)
    })
}
}
const usuarioService = new UsuarioService()
export default usuarioService