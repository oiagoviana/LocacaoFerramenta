import './index.scss'
import '../../../common/common.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react';
import { buscarImagem, listarProdutoPorId } from '../../../api/adminApi';
import { useParams } from 'react-router-dom';



export default function InfoProduto() {
    const [produto, setProduto] = useState({});
    const { idParam } = useParams();


    useEffect(() => {
        listarTodosProdutos();
    }, [])


    async function listarTodosProdutos() {
        const resposta = await listarProdutoPorId(idParam);
        setProduto(resposta);
    }

    return (
        <main className='page-infoproduto'>
            <div className="container-comp">
                <MenuAdm />
            </div>

            <div className='container-info'>
                
                    <img src={buscarImagem(produto.imagem)} alt='' className='image-produto' />
                

                <div className='div-nome'>
                    <h1 className='nome-produto'>{produto.nome}</h1>
                    <h2 className='desc-produto'>Descrição do Produto:</h2>
                    <p className='desc'>{produto.descricao}</p>
                </div>

                <div className='linha'></div>

                <div className='div-botao'>
                    <div className='div-categoria'>
                        <div className='sub-categoria'>
                            <h2 className='categoria-produto'>Categoria:</h2>
                            <p className='categoria'>{produto.categoria}</p>
                        </div>

                        <h2 className='text-disp'>{produto.status ? "Disponível" : "Indisponível"}</h2>
                    </div>

                    <button className='botao-orcamento'>Solicitar Orçamento</button>

                </div>
            </div>
        </main>
    );
}