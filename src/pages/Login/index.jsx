import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index.jsx';
import { login } from '../../api/api.js';
import { useState } from 'react';
import style from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      const token = response.data.access;
      console.log(token);

      localStorage.setItem('token', token);

      navigate('/home');
    } catch (error) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className={style.container}>
      <Header />
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className={style.inputContainer}>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className={style.inputContainer}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className={style.button}>Login</button>
        <div className={style.footer}>
          <p>Não tem uma conta?</p>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
