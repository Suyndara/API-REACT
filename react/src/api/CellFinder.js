import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});



export async function AdicionarCell(Modelo, Marca, Ano, Disponivel) {
    const resposta = await api.post('/celular', {    
        modelo: Modelo,
        marca: Marca,
        ano: Ano,
        disponivel: Disponivel
      });

    return resposta.data;
}




export async function ListarTudo() {
    const resposta = await api.get('/buscar');
    return resposta.data;
}




export async function ListarModelo(modelo) {
    const resposta = await api.get(`/celular/busca?modelo=${modelo}`);
    return resposta.data;
}



export async function BuscarPorID(CellFinder_id) {
    const resposta = await api.post(`/buscar/${CellFinder_id}`);
    return resposta.data;
}




export async function RemoverFilme(CellFinder_id) {
    const resposta = await api.delete(`/deletar/${CellFinder_id}`);
    return resposta.status
}



export async function AlterarCell(CellFinder_id, Modelo, Marca, Ano, Disponivel) {
    const resposta = await api.put(`/alterar/${CellFinder_id}`, {    
        modelo: Modelo,
        marca: Marca,
        ano: Ano,
        disponivel: Disponivel
      });

    return resposta.data;
}
