import './index.scss'
import '../../../common/common.scss'
import MenuUsuario from '../../../components/menuusuario';
import { useEffect, useState } from 'react';
import { buscarImagem, listarPorNome, listarProdutos } from '../../../api/adminApi';
import { useNavigate } from 'react-router-dom';


export default function Feed() {
    const [produto, setProduto] = useState([]);
    const [filtro, setFiltro] = useState('');
    const navigate = useNavigate();

    async function filtrar() {
        const resposta = await listarPorNome(filtro)
        setProduto(resposta);
    }


    async function listarTodosProdutos() {
        const resposta = await listarProdutos();
        setProduto(resposta);
    }

    function abrirInfoProduto(id){
        navigate(`/usuario/infoProduto/${id}`);
    }


    useEffect(() => {
        listarTodosProdutos();
    }, [])


    return (
        <main className='page-feed'>
            <header className='comp-menuUsuario'>
            <div className='container'>
                <div>
                    <h3>LOGO</h3>
                </div>

                <div className='container-opcao'>
                    <a href='/#sobre-nos'>SOBRE NÓS</a>
                    <a href='/#feed'>FEED</a>
                    <a href='/#contato'>CONTATO</a>
                </div>
            </div>
        </header>

            <div className='page-container'>
                <div className="caixa-busca">
                    <input type="text" placeholder='Buscar produtos por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
                </div>

                <div className='container-card'>
                    {produto.map(item =>
                        <div className='div-card'>
                            <div className='sub-image'>
                                <img src={buscarImagem(item.imagem)} />
                            </div>

                            <div className='sub-info'>
                                <h3 className='sub-titulo'>{item.nome}</h3>
                                <p className='sub-desc'>{item.descricao.substr(0, 200)}</p>
                            </div>

                            <div className='sub-botao'>
                                <button className='botao-orcamento' onClick={e => {e.stopPropagation(); abrirInfoProduto(item.id)}} >Faça seu orçamento</button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}