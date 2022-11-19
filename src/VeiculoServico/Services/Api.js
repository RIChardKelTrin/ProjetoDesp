import axios from "axios";

let url = '/veiculoservico';
const api = axios.create({
    baseURL: 'http://192.168.1.9:5001/api'
})

const getSvById = async (id) => {
    let veiculos;

    veiculos = await api.get(url + "/ " + id)
    .then(response => response)
    .catch(erro => console.log("Erro ao consultar SV: " + erro))

    return veiculos
}

export default { getSvById }