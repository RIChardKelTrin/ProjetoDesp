import axios from "axios";
import ip from "../../config/ip";

let url = '/veiculoservico';
const api = axios.create({
    baseURL: `http://${ip}:5001/api`

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

const addSV = async (veiculo, servico) => {
    await api.post(url,{
        fk_Veiculo: veiculo.id,
        fk_Servico: servico.id
    })
    .then(response => response)
    .catch(err => console.log("erro ao cadastrar SV: " + erro))
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
    .catch(erro => {
        console.log("Erro ao editar situacao do sv: " + erro)
        throw "Error"
    })
}

export default { getSvById, EditaSituacaoSV, addSV }