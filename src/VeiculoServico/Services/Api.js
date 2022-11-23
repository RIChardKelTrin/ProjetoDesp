import axios from "axios";

let url = '/veiculoservico';
const api = axios.create({
    baseURL: 'http://192.168.15.46:5001/api'
})

const getSvById = async (nomeSituacao) => {

    let sv;
    sv = await api.get(url + "/situacao", {params:{
        nomeSituacao
    }})
    .then(response => response)
    .catch(erro => console.log("Erro ao consultar SV: " + erro))

    return sv
}

const EditaSituacaoSV = async (sv) => {
    await api.put(url + "/" + sv.id, {
        id: sv.id,
        fk_Servico: sv.fk_Servico,
        fk_Situacao: sv.fk_Situacao,
        fk_Veiculo: sv.fk_Veiculo,
        dataDeEntrada: sv.dataDeEntrada
    })
    .then(response => response)
    .catch(erro => console.log("Erro ao editar situacao do sv: " + erro))
}

export default { getSvById, EditaSituacaoSV }