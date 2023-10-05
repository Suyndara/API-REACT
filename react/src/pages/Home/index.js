import './index.scss';
import Casinha from '../../assets/images/casinha.svg';
import Purple from '../../assets/images/celular-purple.svg';
import Celular from '../../assets/images/celular.svg';


export default function Home(){



  return(


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
              <input type='text' placeholder='Nome'/>
              <input type='text' placeholder='Modelo'/>
              <input type='date' placeholder='Ano'/>
              <select>
                <option>Status</option>
                <option>Disponível</option>
                <option>Indisponível</option>
              </select>

              <button>Cadastrar</button>
            </div>

            <div className='consulta'>
              <h2>Buscar Aparelho</h2>
              <input type='text' placeholder='Nome'/>
              
              
            </div>
        </div>
    </div>
  );
}