import './index.scss'
import '../../common/common.scss'
import { useState } from 'react';
import { enviarEmail } from '../../api/adminApi';
import { toast } from 'react-toastify'

export default function EnviarEmail() {
    const [erro, setErro] = useState();
    const [carregando, setCarregando] = useState(false);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [assunto, setAssunto] = useState();
    const [texto, setTexto] = useState();
    const [telefone, setTelefone] = useState();

    async function emailEnviado() {
        setCarregando(true);
        try {
            const resp = await enviarEmail(nome, email, assunto, texto, telefone);
            toast.success("Email enviado com sucesso!", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setNome("");
            setEmail("");
            setAssunto("");
            setTexto("");
            setTelefone("");

        } catch (err) {
            setCarregando(false);
            if (err.response.status === 401)
                setErro(err.response.data.erro);
        }

    }

    return (
        <main className='modal-enviaremail'>
            <div className='container-nome-coment'>
                <h3>Faça seu orçamento</h3>
            </div>

            <div className='container-infos'>
                <div className='sub-info'>
                    <div className='sub-infos'>
                        <label>Nome</label>
                        <input required type='text' placeholder='Insira seu nome' className='input' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='sub-infos'>
                        <label>Email</label>
                        <input type='text' placeholder='Insira seu e-mail' className='input' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='sub-infos'>
                        <label>Número</label>
                        <input type='text' placeholder='Insira seu número' className='input' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>
                </div>

                <div className='sub-infoss'>
                    <div className='sub-infos'>
                        <label>Assunto</label>
                        <input type='text' placeholder='Insira o assunto' className='input' value={assunto} onChange={e => setAssunto(e.target.value)} />
                    </div>

                    <label>Descrição</label>
                    <textarea value={texto} onChange={e => setTexto(e.target.value)} ></textarea>
                </div>

            </div>
            <button className='botao-comentario' onClick={emailEnviado} disabled={carregando} > Enviar </button>


        </main>
    );
}