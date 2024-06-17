import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/index.jsx';
import Cadastro from '../pages/Register/index.jsx';
import HomeHeader from '../pages/Inicial/index.jsx';
import Salon from '../pages/Salon/index.jsx';
import ForgotPassword from '../pages/Forgotpass/forgot.jsx';
import AddBarber from '../pages/Barbeiros/barber.jsx';
import AddService from '../pages/CortesServiços/addService.jsx';
import Reservas from '../pages/Reservas/Reservas.jsx';
import PrivateRoute from '../api/rotas.jsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<PrivateRoute><HomeHeader /></PrivateRoute>} />
                <Route path="/cad-salon" element={<PrivateRoute><Salon /></PrivateRoute>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/add-barber" element={<PrivateRoute><AddBarber /></PrivateRoute>} />
                <Route path="/add-service" element={<PrivateRoute><AddService /></PrivateRoute>} />
                <Route path="/reservas" element={<PrivateRoute><Reservas /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
