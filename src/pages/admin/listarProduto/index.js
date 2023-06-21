import './index.scss'
import '../../../common/common.scss'
import MenuAdm from '../../../components/menuadm'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deletarProduto, listarPorNome, listarProdutos } from '../../../api/adminApi'



export default function ListarProduto() {
    const [produto, setProduto] = useState([]);
    const [filtro, setFiltro] = useState('');
    const navigate = useNavigate();

    

    function editarFilme(id) {
        navigate(`/admin/alterar/${id}`);
    }

    async function removerProdutoClick(id, nome) {

        confirmAlert({
            title: 'Remover Produto',
            message: `Deseja remover o produto ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await deletarProduto(id, nome);
                        if (filtro === '')
                            listarTodosProdutos();
                        else
                            filtrar();

                        toast.dark('🚀 Produto removido!');
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }

    async function filtrar() {
        const resposta = await listarPorNome(filtro)
        setProduto(resposta);

    }

    async function listarTodosProdutos() {
        const resposta = await listarProdutos();
        setProduto(resposta);
    }

    
    useEffect(() => {
        listarTodosProdutos();
    }, [])

    return (
        <main className="page-listarproduto">
            <div className="container-comp">
                <MenuAdm pagina='listar' />
            </div>
            <div className="container-info">
                <div className="caixa-busca">
                    <input type="text" placeholder='Buscar produtos por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
                </div>

                <div className="container-tabela">
                    <table className='tabela'>
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>PRODUTO</th>
                                <th>CATEGORIA</th>
                                <th>STATUS</th>
                                <th className='data'>DATA DE CRIAÇÃO</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {produto.map(item =>
                                <tr >
                                    <td> #{item.id} </td>
                                    <td> {item.nome} </td>
                                    <td> {item.categoria} </td>
                                    <td> {item.status ? 'Disponível' : 'Indisponível' }</td>
                                    <td className='data'> {item.data ? item.data.substr(0, 10) : ''} </td>
                                    <td className="imagens">
                                        <img src="/assets/images/edit.svg" alt="" className='edit' onClick={e => { e.stopPropagation(); editarFilme(item.id) }} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <img src="/assets/images/remove.svg" alt="" className='remove' onClick={e => { e.stopPropagation(); removerProdutoClick(item.id, item.nome) }} />
                                    </td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}