import './index.scss'
import '../../../common/common.scss'
import MenuAdm from '../../../components/menuadm'



export default function ListarProduto() {


    return (
        <main className="page-listarproduto">
            <div className="container-comp">
                <MenuAdm />
            </div>
            <div className="container-info">
                <div className="caixa-busca">
                    <input type="text" placeholder='Buscar produtos por nome' />
                    <img src='/assets/images/icon-buscar.svg' alt='buscar' />
                </div>

                <div className="container-tabela">
                    <table>
                        <thead>
                            <tr>
                                <th>NOME PRODUTO</th>
                                <th>CATEGORIA</th>
                                <th>STATUS</th>
                                <th>DATA DE CRIAÇÃO</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Betoneira</td>
                                <td>Concretagem</td>
                                <td>Disponível</td>
                                <td>01/01/2023</td>
                                <td className="imagens">
                                    <img src="/assets/images/edit.svg" alt="" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src="/assets/images/remove.svg" alt="" />
                                </td>
                            </tr>

                            <tr>
                                <td>Betoneira</td>
                                <td>Concretagem</td>
                                <td>Disponível</td>
                                <td>01/01/2023</td>
                                <td className="imagens">
                                    <img src="/assets/images/edit.svg" alt="" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src="/assets/images/remove.svg" alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}