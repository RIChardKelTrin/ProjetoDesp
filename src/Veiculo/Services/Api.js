import axios from "axios";
import ip from "../../config/ip";

let url = "/veiculo";
const api = axios.create({
  baseURL: `http://${ip}:5001/api`,
});

const getVeiculosById = async (id) => {
  let veiculos;

  veiculos = await api
    .get(url + "/" + id)
    .then((response) => response)
    .catch((err) => console.error("Erro ao consultar: " + err));
  return veiculos;
};

const getVeiculosByPlaca = async (placa) => {
  let veiculos;

  veiculos = await api
    .get(url + "/placa", {
      params: {
        placa,
      },
    })
    .then((response) => response)
    .catch((err) => console.error("Erro ao consultar: " + err));

  return veiculos;
};

const addVeiculos = async (veiculo) => {
  return await api
    .post(url, {
      marcaModelo: veiculo.modelo,
      placa: veiculo.placa,
      ano: veiculo.ano,
      cor: veiculo.cor,
      renavam: veiculo.renavam,
      fk_cliente: veiculo.fk_Cliente,
    })
    .then((response) => response)
    .catch((err) => {
      if (err.toString().includes("403")) {
        console.log(`Renavam/Placa já cadastrado em outro veículo!`);
        throw 'Error'
      } else {
          console.log("Erro ao cadastrar: " + err);
          throw 'Erro ao cadastrar veiculo'
      }
    });
};

const editarVeiculo = async (veiculo) => {
  let cont = 0;
  await api
    .put(url + "/" + veiculo.id, {
      id: veiculo.id,
      marcaModelo: veiculo.modelo,
      placa: veiculo.placa,
      cor: veiculo.cor,
      renavam: veiculo.renavam,
      ano: veiculo.ano,
      fk_Cliente: veiculo.fk_Cliente,
    })
    .then((response) => response)
    .catch((err) => {
      if (err.toString().includes("403")) {
        alert(`Renavam/Placa já cadastrado em outro veículo!`);
        cont = 1;
      } else {
        console.error("Erro ao Editar: " + err);
        cont = 3;
      }
    });
  return cont;
};

const removerVeiculos = async (id) => {
  await api
    .delete(url + "/" + id)
    .then((response) => response)
    .catch((err) => console.error("Erro ao tentar excluir veiculo"));
};

export default {
  getVeiculosById,
  getVeiculosByPlaca,
  addVeiculos,
  editarVeiculo,
  removerVeiculos,
};
