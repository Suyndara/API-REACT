import './index.scss';
import Casinha from '../../assets/images/casinha.svg';
import Purple from '../../assets/images/celular-purple.svg';
import Celular from '../../assets/images/celular.svg';


import { useEffect, useState } from 'react';


import { ListarTudo, ListarModelo, RemoverFilme, AdicionarCell, AlterarCell } from '../../api/CellFinder.js';

export default function Home(){

    const [ modelo, setModelo ] = useState('');
    const [ marca, setMarca ] = useState('');
    const [ ano, setAno ] = useState('');
    const [ disponivel, setDisponivel ] = useState(false);

    const [ listar, setListar ] = useState([]);
    const [ filtro, setFiltro ] = useState('');
    const [ id, setID ] = useState(0);


    async function Adicionar() {
      try {

        if (id === 0) {
          const resposta = await AdicionarCell(modelo, marca, ano, disponivel)
          alert('Filme Cadastrado com sucesso')

          setID(resposta.id)
        }

        else {
          await AlterarCell(id, modelo, marca, ano, disponivel);
          alert('Cadastrado com Sucesso')
        }

      } catch (error) {
          alert(error.response.data.erro);
      }
    }

    function NovoClick() {
      setID(0);
      setModelo('');
      setMarca('');
      setAno(0)
      setDisponivel(true)
    }


    async function AtualizarCell() {
      const resposta = await AlterarCell()
            setModelo(resposta.modelo);
            setMarca(resposta.marca);
            setAno(resposta.ano.substr(0, 10));
            setDisponivel(resposta.disponivel)
            setID(resposta.id);
    }


    async function CarregarTudo() {
      const resp = await ListarTudo();
      setListar(resp);
    }

    async function BuscarModelo() {
      const resp = await ListarModelo(filtro);
      setListar(resp)
    }


    async function DeletarFilme(CellFinder_id, Modelo) {
        const resp = await RemoverFilme(CellFinder_id, Modelo);
        alert('Excluiu')
        return resp;
    }

    useEffect(() => {
        CarregarTudo();
    }, [])

  return (

    <div className='pagina-aparelhos'>
        <div className='lateral'>
          <div className='imagem-texto'>
            <img src={Celular} alt='' />
            
            <div className='titulo'>
              <h1>CELL</h1>
              <h1>Finder</h1>
            </div>
          </div>

          <div className='casa'>
            <img src={Casinha} alt='' />
            <h1>Home</h1>
          </div>

          <div className='purple'>
            <img src={Purple} alt='' />
            <h1>Cell</h1>
          </div>
        </div>

        <div className='pagina-controle'>
            <div className='bem-vindo'>
              <p>Olá, seja bem-vindo a área da administração</p>
            </div>

            <div className='area'>
              <h2>Área administrativa</h2>
              <h1>Controle de Aparelhos</h1>
            </div>

            <div className='cadastro'>
              <h2>Cadastrar o Aparelho</h2>
              <input type='text' placeholder='Modelo' value={modelo} onChange={e => setModelo(e.target.value)} />
              <input type='text' placeholder='Marca'  value={marca} onChange={e => setMarca(e.target.value)} />
              <input type='date' placeholder='Ano'   value={ano} onChange={e => setAno(e.target.value)} />

                <div className="form-row">
                  <input type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
                  <label> Disponivel </label>
                </div>

              <button onClick={Adicionar}> {id === 0 ? 'Salvar' : 'Alterar' } </button>
              <button onClick={NovoClick}> Novo Filme </button>
            </div>

            <div className='consulta'>
              <h2>Buscar Aparelho</h2>
              <button onClick={BuscarModelo}>Sla</button>
              <input type='text' placeholder='Modelo' value={filtro} onChange={e => setFiltro(e.target.value)}/>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th> IDENTIFICADOR </th>
                      <th> MODELO </th>
                      <th> MARCA </th>
                      <th> ANO </th>
                      <th> DISPONIVEL </th> 
                    </tr>
                  </thead>
                  <tbody>
                    {listar.map(item => 
                      <tr>
                        <td> { item.CellFinder_id } </td>
                        <td> { item.Modelo } </td>
                        <td> { item.Marca } </td>
                        <td> { item.Ano.substr(0, 10)} </td>
                        <td> { item.Disponivel ? 'Disponivel' : 'Não Disponivel' } </td>
                        <td> <button onClick={() => AtualizarCell(item)}> Alterar </button> </td>
                        <td> <button onClick={() => DeletarFilme(item.CellFinder_id, item.Modelo)}> Deletar </button> </td>
                      </tr>  
                    )}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  );
}