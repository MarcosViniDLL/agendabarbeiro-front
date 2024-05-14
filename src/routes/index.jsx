import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login.jsx';
import { Cadastro } from '../pages/Register/Cadastro.jsx';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}
