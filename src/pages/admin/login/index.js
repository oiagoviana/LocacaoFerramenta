import './index.scss';
import '../../../common/common.scss'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Login } from '../../../api/adminApi';
import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import {toast} from 'react-toastify'


export default function LoginAdm() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if(storage('admin-logado')){
          navigate('/admin/listarProduto')  
        }
    }, []);

    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);
        try{
            const resposta = await Login(email,senha);
            storage('admin-logado', resposta);

            setTimeout(() => {
                navigate('/admin/listarProduto');
            }, 3000)

        } catch(err){
            ref.current.complete();
            setCarregando(false);
            if(err.response.status === 401){
                toast.error(err.response.data.erro);
            }
        }
    }



    return (
        <main className="page-loginAdm">
            <LoadingBar color='#35818E' ref={ref} />
            <div className="container-principal">
                <h2 className="login-titulo">Login</h2>

                <div className="container-info">
                    <div className="div-campos">
                        <input
                            required
                            type="text"
                            id="login"
                            className="input" 
                            value = {email}
                            onChange={e => setEmail(e.target.value)} />

                        <label for="login">Login</label>
                    </div>
                    <div className="div-campos">
                        <input
                            required
                            type="text"
                            id="senha"
                            className="input" 
                            value = {senha}
                            onChange={e => setSenha(e.target.value)} />

                        <label for="senha">Senha</label>
                    </div>
                </div>
                <button className="botao-entrar" onClick={entrarClick} disabled={carregando} >Entrar</button>
            </div>
        </main>
    );
}