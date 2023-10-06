import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});




export async function ListarTudo() {
    const resposta = await api.get('/buscar');
    return resposta.data;
}




export async function ListarModelo(modelo) {
    const resposta = await api.get(`/celular/busca?modelo=${modelo}`);
    return resposta.data;
}



export async function BuscarPorID(id) {
    const resposta = await api.post(`/buscar/${id}`);
    return resposta.data;
}




export async function AlterarFilme(id, modelo) {
    const resposta = await api.put(`/alterar/`)
}