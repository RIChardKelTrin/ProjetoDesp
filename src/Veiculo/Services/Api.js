import axios from "axios";

let url = '/veiculos';
const api = axios.create({
    baseURL: 'http://192.168.1.9:5001/api'
})

const getVeiculosById = async (id) => {
    let veiculos;

    veiculos = await api.get(url + "/" + id)
        .then(response => response)
        .catch(err => console.error("Erro ao consultar: " + err))
    return veiculos;
}

const getVeiculosByPlaca = async (placa) => {
    let veiculos;

    veiculos = await api.get(url + "/placa", {
        params: {
            placa
        }
    })
        .then(response => response)
        .catch(err => console.error("Erro ao consultar: " + err))

    return veiculos;
}

const addVeiculos = async (veiculo) => {
    let cont = 0

    await api.post(url, {
        marcaModelo: veiculo[0],
        placa: veiculo[1],
        ano: veiculo[2],
        cor: veiculo[3],
        renavam: veiculo[4],
        fk_cliente: 1
    })
        .then(response => response)

        .catch((err) => {
            if (err.toString().includes("403")) {
                alert(`Renavam/Placa já cadastrado em outro veículo!`)
                cont = 1
            } else {
                console.error("Erro ao cadastrar: " + err)
                cont = 3
            }
        })
    return cont
}

const editarVeiculo = async (veiculo) => {

    let cont = 0

    await api.put(url + "/" + veiculo.id, {
        id: veiculo.id,
        marcaModelo: veiculo.modelo,
        placa: veiculo.placa,
        cor: veiculo.cor,
        renavam: veiculo.renavam,
        ano: veiculo.ano,
        fk_Cliente: 1

    })
        .then(response => response)
        .catch(err => {
            if (err.toString().includes("403")) {
                alert(`Renavam/Placa já cadastrado em outro veículo!`)
                cont = 1
            } else {
                console.error("Erro ao cadastrar: " + err)
                cont = 3
            }
        })
        return cont
}

const removerVeiculos = async (id) => {
    await api.delete(url + "/" + id)
        .then(response => response)
        .catch(err => console.error("Erro ao tentar excluir veiculo"))
}

export default { getVeiculosById, getVeiculosByPlaca, addVeiculos, editarVeiculo, removerVeiculos };
