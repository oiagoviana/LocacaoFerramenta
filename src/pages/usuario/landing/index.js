import './index.scss'
import '../../../common/common.scss'
import MenuUsuario from '../../../components/menuusuario'
import { useNavigate } from 'react-router-dom';


export default function LadingPage() {
    const navigate = useNavigate();

    function irFeed(){
        navigate('/usuario/feed');
    }



    return (
        <main className='container-lading'>
            <div className='container-comp'>
                <MenuUsuario />
            </div>

            <div id='c1' className='container1'>
                <div className='sub1-texto'>
                    <h1>TITULO</h1>
                    <h3>Sub-Titulo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui...</p>
                </div>
                <div className='sub1-imagem'>

                </div>
            </div>

            <div id='sobre-nos' className='container-sobre-nos'>
                <h1>SOBRE NÓS</h1>

                <div className='sub2-caixinhas'>
                    <div className='sub2-card'>
                        <h3>Sub-Titulo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>

                    <div className='sub2-card'>
                        <h3>Sub-Titulo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>

                    <div className='sub2-card'>
                        <h3>Sub-Titulo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </div>
                </div>
            </div>

            <div id='feed' className='container-feed'>
                <div className='sub1-imagem'>

                </div>

                <div className='sub3-infos'>
                    <h1 className='sub3-h1'>FEED</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut i...</p>

                    <button className='botao-feed'  onClick={irFeed} >FEED</button>
                </div>

            </div>

            <div id='contato' className='container-contato'>
                <div className='sub-infos'>
                    <h2>Contate-Nos</h2>
                    <p>Telefone: (11)9999-9999</p>

                    <div>
                        <img src='/assets/images/wpp-image.png' alt='' />
                        <img src='/assets/images/insta-image.png' alt='' />
                        <img src='/assets/images/face-image.png' alt='' />
                    </div>
                </div>

                <div className='sub-form'>
                    <input placeholder='Insira seu nome' />
                    <input placeholder='Insira seu email' />
                    <textarea placeholder='Insira sua mensagem'></textarea>
                    <button className='botao-enviar'>Enviar</button>
                </div>
            </div>


            <div className='container-rodape'>

            </div>

        </main>
    )
}