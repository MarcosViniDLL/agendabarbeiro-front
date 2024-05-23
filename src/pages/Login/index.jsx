import { Link } from 'react-router-dom';
import "../Register/index.jsx";
import style from '../Login/Login.module.css'
import Header from '../../components/Header/index.jsx';

function Login() {

  return (
    <div className={style.container}>
      <Header/>

      <form>
        <div className={style.inputContainer}>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>

        <Link to="/forgot-password" className={style.forgotPasswordLink}>Esqueceu a senha?</Link>

        <Link to='/home'>
          <button className={style.button}>entrar</button>
        </Link>

        <div className={style.footer}>
          <p>É novo por aqui?<Link to="/cadastro">Se cadastre!</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login;

