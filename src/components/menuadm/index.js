import './index.scss'
import '../../common/common.scss'
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MenuAdm({pagina}) {
    const [admin, setAdmin] = useState('-');
    const navigate = useNavigate();

    function sairClick(){
        storage.remove('admin-logado');
        navigate('/admin/login');
    }

    useEffect(() => {
        if(!storage('admin-logado')){
            navigate('/admin/login')
        } else{
            const adminLogado = storage('admin-logado');
            setAdmin(adminLogado.nome)
        }
    }, [])



    return (
        <main className="comp-menu">
            <div className="container">
                <h3 className='bemvindo'>Bem-Vindo, {admin} </h3>

                <div className="container-nomes">

                    <a href='/admin/home' className={pagina === 'home' ? 'selected' : '' } >Home</a>
                    <a href='/admin/listarProduto' className={pagina === 'listar' ? 'selected' : '' } >Listar Produto</a>
                    <a href='/admin/adicionarProduto' className={pagina === 'adicionar' ? 'selected' : '' } >Adicionar Produto</a>
                </div>

                <img className="botao-sair" src="/assets/images/itm.svg" alt="" onClick={sairClick} />
            </div>
        </main>
    );
}