import './index.scss'
import '../../../common/common.scss'
import MenuAdm from '../../../components/menuadm'


export default function AdicionarProduto() {


    return (
        <main className="page-addproduto">
            <div className="container-comp">
                <MenuAdm pagina='adicionar'/>
            </div>

            <div className="container-info">
                <div className="container-esquerda">
                    <div className="sub-container1">
                        <label>Nome do produto</label>
                        <input type="text" />
                    </div>


                    <div className="sub-container1">
                        <label>Descrição do Produto</label>
                        <textarea className="text-produto"></textarea>
                    </div>

                    <div className="sub-container1">
                        <label>Categoria do Produto</label>
                        <select className="select-info">
                            <option disabled selected hidden> Selecione </option>
                            <option > Concretagem </option>
                        </select>
                    </div>
                </div>

                <div className="container-direita">
                    <div className="sub-container1">
                        <label>Status do Produto</label>
                        <select className="select-info">
                            <option disabled selected hidden> Selecione </option>
                            <option > Disponível </option>
                        </select>
                    </div>

                    <div className="sub-container1">
                        <label>Adicionar imagem do Produto</label>
                        <div className='imagem-indicacao'>
                            <input type='file' id='imagem-oculta' />
                        </div>
                    </div>
                </div>
            </div>
            <button className="botao-add" > Adicionar </button>
        </main>
    );
}