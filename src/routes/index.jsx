import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login/Login.jsx';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> 
            </Routes>
        </Router>
    );
}
