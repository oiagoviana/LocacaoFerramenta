import './index.scss'
import '../../common/common.scss'


export default function InputPesquisa(){


    return(
        <main className='input-pesquisa'>
            <div className="caixa-busca">
                    <input type="text" placeholder='Buscar produtos por nome'  />
                    <img src='/assets/images/icon-buscar.svg' alt='buscar'  />
                </div>
        </main>
    );
}