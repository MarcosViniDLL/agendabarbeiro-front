import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/index.jsx';
import Cadastro from '../pages/Register/index.jsx';
import HomeHeader from '../pages/Inicial/index.jsx';
import Salon from '../pages/Salon/index.jsx';
import ForgotPassword from '../pages/Forgotpass/forgot.jsx';
import AddBarber from '../pages/Barbeiros/barber.jsx';
import AddService from '../pages/CortesServiços/addService.jsx';
import Reservas from '../pages/Reservas/Reservas.jsx';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<HomeHeader />} />
                <Route path="/cad-salon" element={<Salon />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/add-barber" element={<AddBarber />} />
                <Route path="/add-service" element={<AddService />} />
                <Route path="/reservas" element={<Reservas />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
