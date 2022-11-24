import axios  from "axios"
import ip from "../config/ip"

const api = axios.create({
    baseURL: `http://${ip}:5001/api`

})


const getServicos = async() => {
    let servicos
    
    servicos = await api.get("/servicos")
    .then(response => response)
    .catch(err => console.log("erro ao consultar: ", err))

    return servicos
}

const addServicos = async(servico) => {
    let cont = 0;
    await api.post("/servicos", {
        nome: servico.nome,
        valor: servico.valor,
        
    })
    .then(response => response)
    .catch(err => {console.log("erro ao cadastrar: ", err), cont++})
    return cont
}


const DeleteServico = async(id) =>{
    await api.delete("/servicos/" + id)
    .then(response => response)
    .catch((err) =>{
        if(err.toString().includes("404")) return alert("Esse servico não existe ou já foi excluido " + err)
        alert("Erro ao deletar: " + err)
    })
}

    const EditServico = async(servico) =>{
       await api.put("/servicos/"+ servico.id,{
        id: servico.id,
        nome: servico.nome,
        valor: servico.valor,
       })
      
        .then(response => response)
        .catch(err => console.log("erro ao Editar: ", err))
    
        }


export default {getServicos, addServicos, DeleteServico, EditServico};