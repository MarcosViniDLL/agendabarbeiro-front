import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login.jsx';
import { Cadastro } from '../pages/Register/Cadastro.jsx';
import { HomeHeader } from '../pages/Inicial/Home.jsx';
import { Salon } from '../pages/Salon/cad-salon.jsx';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<HomeHeader />} />
                <Route path="/cad-salon" element={<Salon />}/>
            </Routes>
        </Router>
    );
}
