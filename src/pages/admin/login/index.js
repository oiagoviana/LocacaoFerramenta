import './index.scss';
import '../../../common/common.scss'


export default function LoginAdm() {


    return (
        <main className="page-loginAdm">
            <div className="container-principal">
                <h2 className="login-titulo">Login</h2>

                <div className="container-info">
                    <div className="div-campos">
                        <input
                            required
                            type="text"
                            id="login"
                            className="input" />

                        <label for="login">Login</label>
                    </div>
                    <div className="div-campos">
                        <input
                            required
                            type="text"
                            id="senha"
                            className="input" />

                        <label for="senha">Senha</label>
                    </div>
                </div>
                <button className="botao-entrar">Entrar</button>
            </div>
        </main>
    );
}