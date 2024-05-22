import style from '../Header/Header.module.css'
import logo from "../../assets/logo.svg";


function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo" />
            <span>AgendaBarbeiro</span>
        </header>
    )
}

export default Header;