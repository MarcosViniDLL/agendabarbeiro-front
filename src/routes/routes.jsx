import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Login  from '../pages/Login/index.jsx';
import  Cadastro  from '../pages/Register/index.jsx';
import  HomeHeader  from '../pages/Inicial/index.jsx';
import  Salon  from '../pages/Salon/index.jsx';
import ForgotPassword from '../pages/Forgotpass/forgot.jsx';

function AppRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Login/> }></Route> 
                <Route path="/cadastro" element={ <Cadastro/> }></Route>
                <Route path="/home" element={ <HomeHeader /> }></Route>
                <Route path="/cad-salon" element={ <Salon /> }></Route>
                <Route path="/forgot-password" element={ <ForgotPassword /> }></Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
