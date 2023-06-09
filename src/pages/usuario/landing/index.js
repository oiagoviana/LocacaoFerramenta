import './index.scss'
import '../../../common/common.scss'
import MenuUsuario from '../../../components/menuusuario'


export default function LadingPage() {
    
    
    
    return(
        <main className='container-lading'>
            <div className='container-comp'>
                <MenuUsuario />
            </div>

            <div className='container1'>
                <div className='sub1-texto'>
                    <h1>TITULO</h1>
                    <h3>Sub-Titulo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui...</p>
                </div>
                <div className='sub1-imagem'>

                </div>
            </div>

            <div className='container2'>
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

            <div className='container3'>
                <div className='sub1-imagem'>

                </div>

                <div className='sub3-infos'>
                    <h1 className='sub3-h1'>FEED</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut i...</p>

                    <button>FEED</button>
                </div>

            </div>

        </main>
    )
}