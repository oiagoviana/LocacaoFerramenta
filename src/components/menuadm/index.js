import './index.scss'
import '../../common/common.scss'

export default function MenuAdm() {

    return (
        <main className="comp-menu">
            <div className="a">
                <h3>Bem-Vindo Iago</h3>

                <div className="container-nomes">

                    <h3>Home</h3>
                    <h3>Listar Produto</h3>
                    <h3>Adicionar Produto</h3>
                </div>

                <img className="botao-sair" src="/assets/images/itm.svg" alt="" />
            </div>
        </main>
    );
}