import axios from "axios";

let url = '/veiculoservico';
const api = axios.create({
    baseURL: 'http://192.168.1.9:5001/api'
})

const getSvById = async (id) => {
    let id2 = id
    if(id2 == "") id2 = -1
    let sv;
    sv = await api.get(url + "/situacao/" + id2)
    .then(response => response)
    .catch(erro => console.log("Erro ao consultar SV: " + erro))

    return sv
}

export default { getSvById }