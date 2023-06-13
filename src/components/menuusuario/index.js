import './index.scss'
import '../../common/common.scss'

export default function MenuUsuario() {

    return (
        <main className='comp-menuusuario'>
            <div className='container'>
                <div>
                    <h3>LOGO</h3>
                </div>

                <div className='container-opcao'>
                    <a href='#sobre-nos'>SOBRE NÓS</a>
                    <a href='#feed'>FEED</a>
                    <a href='#contato'>CONTATO</a>
                </div>
            </div>
        </main>
    );
}