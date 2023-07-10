import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Nutri from '../pages/Nutri';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Erro from '../pages/Erro';
import Produto from '../pages/Produto';


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} index={true}/>
                <Route path='/nutri' Component={Nutri}/>
                <Route path='/sobre' Component={Sobre}/>
                <Route path='/contato' Component={Contato}/>
                <Route path='/produto/:id' Component={Produto}/>
                <Route path='*' Component={Erro}/>
            </Routes>
            
        </BrowserRouter>
    )
}

export default Rotas