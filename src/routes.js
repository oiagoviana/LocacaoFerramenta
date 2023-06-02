import {BrowserRouter, Route, Routes} from 'react-router-dom'

//admin
import LoginAdm from './pages/admin/login'
import ListarProduto from './pages/admin/listarProduto'
import AdicionarProduto from './pages/admin/addProduto'


//usuario
import InfoProduto from './pages/usuario/infoProduto'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/admin/login' element={<LoginAdm/>}/>
                <Route path='/admin/listarProduto' element={<ListarProduto/>}/>
                <Route path='/admin/adicionarProduto' element={<AdicionarProduto/>}/>
                <Route path='/admin/alterar/:idParam' element={<AdicionarProduto/>}/>
                
                
                
                <Route path='/usuario/infoProduto' element={<InfoProduto/>}/>



            </Routes>
        </BrowserRouter>
    )
} 