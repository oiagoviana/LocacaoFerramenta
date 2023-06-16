import './index.scss'
import '../../../common/common.scss'
import MenuAdm from '../../../components/menuadm'
import EnviarEmail from '../../../components/enviarEmail';
import { useEffect, useState } from 'react';
import { buscarImagem, listarProdutoPorId } from '../../../api/adminApi';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal'


export default function InfoProduto() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [produto, setProduto] = useState({});
    const { idParam } = useParams();

    Modal.setAppElement('#root');


    useEffect(() => {
        listarTodosProdutos();
    }, [])


    async function listarTodosProdutos() {
        const resposta = await listarProdutoPorId(idParam);
        setProduto(resposta);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const Css = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItens: 'center',
            justifyContent: 'center',
            left: '15%',
            top: '20%',
            margin: 'none',
            width: '70vw',
            backgroundColor: '#FFFFFF',
            height: '60vh',

        },
        overlay: {
            backgroundColor: '#000000ce'
        },



    };

    return (
        <main className='page-infoproduto'>
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

                    <div>
                        <button className='botao-orcamento' onClick={openModal} >Solicitar Orçamento</button>

                        <div>
                            <Modal  isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={Css}>
                                    <EnviarEmail/>
                            </Modal>
                        </div>
                    
                    </div>




                </div>
            </div>
        </main>
    );
}