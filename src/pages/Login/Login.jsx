import { Link } from 'react-router-dom';
import "../Register/Cadastro.jsx";
import logo from "../../assets/logo.svg";
import "../Login/login.css";

export function Login() {
  
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" />
        <span>AgendaBarbeiro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>

        <a href="">Esqueceu a senha?</a>

        <button className="button">
          Entrar
        </button>

        <div className="footer">
        <p>É novo por aqui?<Link to="/cadastro">Se cadastre!</Link></p>
        </div>
      </form>
    </div>
  )
}

