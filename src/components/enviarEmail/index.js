import './index.scss'
import '../../common/common.scss'


export default function EnviarEmail() {

    return (
        <main className='modal-enviaremail'>
            <div className='container-nome-coment'>
                <h3>Faça seu orçamento</h3>
            </div>

            <div className='container-infos'>
                <div>
                    <div className='sub-infos'>
                        <label>Nome</label>
                        <input required type='text' placeholder='Insira seu nome' className='input' />
                    </div>
                    <div className='sub-infos'>
                        <label>Email</label>
                        <input type='text' placeholder='Insira seu e-mail' className='input' />
                    </div>
                    <div className='sub-infos'>
                        <label>Número</label>
                        <input type='text' placeholder='Insira seu número' className='input' />
                    </div>
                </div>

                <div className='sub-infoss'>
                    <label>Descrição</label>
                    <textarea></textarea>
                </div>

            </div>
            <button className='botao-comentario'> Enviar </button>


        </main>
    );
}