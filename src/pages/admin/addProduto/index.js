import './index.scss'
import '../../../common/common.scss'
import MenuAdm from '../../../components/menuadm'
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { useNavigate, useParams } from 'react-router-dom';
import { alterarProduto, buscarImagem, cadastrarProduto, enviarImagemProduto, listarCategoria } from '../../../api/adminApi';
import { toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';


export default function AdicionarProduto() {
    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [idCategoria, setIdCategoria] = useState();
    const [statusProduto, setStatusProduto] = useState(null);
    const [categoria, setCategoria] = useState([]);
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    const { idParam } = useParams();
    const navigate = useNavigate();


    async function adicionarProduto() {
        try {
            if (!imagem)
                throw new Error('Escolha a foto do produto');

            const admin = storage('admin-logado').id;

            if (id === 0) {
                const produto = await cadastrarProduto(nome, desc, statusProduto, idCategoria, admin);
                console.log(produto);
                await enviarImagemProduto(produto.id, imagem);

                setId(produto.id);
                setTimeout(() => {
                    navigate('/admin/listarProduto');
                }, 2000)
                toast.dark('Produto cadastrado com sucesso!');
            } else {
                await alterarProduto(id, nome, desc, idCategoria, statusProduto, admin);
                if (typeof (imagem) == 'object') {
                    await enviarImagemProduto(idParam, imagem);
                }
                setTimeout(() => {
                    navigate('/admin/listarProduto');
                }, 2000)
                toast.success('Produto alterado com sucesso 🚀');
            }
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }

    async function carregarCategoria() {
        const resposta = await listarCategoria();
        setCategoria(resposta);
    }

    function escolherImagem() {
        document.getElementById('imagem-oculta').click();
    }

    function mostrarImagem() {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        } else {
            return buscarImagem(imagem);
        }
    }

    useEffect(() => {
        carregarCategoria();
    }, [])

    return (
        <main className="page-addproduto">
            <LoadingBar color='#6F4528' />
            <div className="container-comp">
                <MenuAdm pagina='adicionar' />
            </div>

            <div className="container-info">
                <div className="container-esquerda">
                    <div className="sub-container1">
                        <label>Nome do produto</label>
                        <input type="text" className='input' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className="sub-container1">
                        <label>Descrição do Produto</label>
                        <textarea maxLength={616} className="text-produto" value={desc} onChange={e => setDesc(e.target.value)} ></textarea>
                    </div>

                    <div className="sub-container1">
                        <label>Categoria do Produto</label>
                        <select className="select-info" value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                            <option disabled selected hidden> Selecione </option>
                            {categoria.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                        </select>
                    </div>
                </div>

                <div className="container-direita">
                    <div className="sub-container1">
                        <label>Status</label>
                        <select className='select-info' onChange={(e) => setStatusProduto(e.target.value === 'Disponível' ? true : false)} >
                        <option disabled selected hidden> Selecione</option>
                        <option>Disponível</option>
                        <option>Indisponível</option>
                    </select>
                    </div>

                    <div className="sub-container1">
                        <label>Adicionar imagem do Produto</label>
                        <div className='imagem-indicacao' onClick={escolherImagem} >
                            {!imagem &&
                                <img src='/assets/images/icon-upload.svg' alt='' />
                            }

                            {imagem &&
                                <img className='imagem-capa' src={mostrarImagem()} alt=' ' />
                            }

                            <input type='file' id='imagem-oculta' onChange={e => setImagem(e.target.files[0])} />
                        </div>
                    </div>
                </div>
            </div>
            <button className="botao-add" onClick={adicionarProduto} > {id === 0 ? 'Adicionar' : 'Alterar'} </button>
        </main>
    );
}