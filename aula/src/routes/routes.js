import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Nutri from '../pages/Nutri';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Erro from '../pages/Erro';
import Produto from '../pages/Produto';
import Main from '../pages/Main';
import Repositorio from '../pages/Repositorio';


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Main}/>
                <Route path='/home' Component={Home} index={true}/>
                <Route path='/nutri' Component={Nutri}/>
                <Route path='/sobre' Component={Sobre}/>
                <Route  path="/repositorio/:repositorio" component={Repositorio} />
                <Route path='/contato' Component={Contato}/>
                <Route path='/produto/:id' Component={Produto}/>
                <Route path='*' Component={Erro}/>
            </Routes>
            
        </BrowserRouter>
    )
}

export default Rotas