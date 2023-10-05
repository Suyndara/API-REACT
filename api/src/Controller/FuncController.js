import { AdicionarCel, Alterar, Buscar, Consultar, ConsultarDelete, Deletar } from "../Repository/FuncRepository.js";

import { Router } from "express";
const Endpoint = Router();






Endpoint.post('/celular', async (req, resp) => {
    try {
        
        const celular = req.body;

        if (!celular.modelo) throw new Error('Modelo Obrigatorio');
        if (!celular.marca) throw new Error('Marca Obrigatoria');
        if (!celular.ano) throw new Error('Ano Obrigatorio');


        const resp1 = await Consultar(celular.modelo)
        if (resp1.length > 0)
        throw new Error('Modelo Ja cadastrado');

        const resposta = await AdicionarCel(celular);
        resp.send(resposta);

    } catch (error) {
        resp.status(500).send({ erro: error.message });
    }
});






Endpoint.get('/buscar', async (req, resp) => {
    try {
        
        const busca = await Buscar();
        resp.send(busca)

    } catch (error) {
        resp.status(500).send({ erro: error.message });
    }
});






Endpoint.delete('/deletar/:id', async (req, resp) => {
    try {
        
        const { id } = req.params;
        const resposta = await Deletar(id);


        const resp1 = await ConsultarDelete(resposta)
        if (resp1.length == 0)
        throw new Error('Não ha nada a ser deletado');


        resp.send()

    } catch (error) {
        resp.status(500).send({ erro: error.message });
    }
})







Endpoint.put('/alterar/:id', async (req, resp) => {
    try {
        
        const celular = req.body;
        const { id } = req.params;


        if (!celular.modelo) throw new Error('Modelo Obrigatorio');
        if (!celular.marca) throw new Error('Marca Obrigatoria');
        if (!celular.ano) throw new Error('Ano Obrigatorio');


        const resposta = await Alterar( id, celular);
        resp.send()

    } catch (error) {
        resp.status(500).send({ erro: error.message });
    }
})





export default Endpoint;