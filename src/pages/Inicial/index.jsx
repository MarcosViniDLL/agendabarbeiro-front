import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faCut, faList } from '@fortawesome/free-solid-svg-icons'; 
import styles from '../Inicial/Home.module.css';

function HomeHeader() {
  return (
    <div className={styles.container}>
      <button className={styles.settings_button}>
        <FontAwesomeIcon icon={faCog} size="lg" />
      </button>
      <div className={styles.home_header}>
        <h1 className={styles.welcome_text}>Bem-vindo, userName</h1>
      </div>

      <div className={styles.main_buttons}>
        <button className={styles.main_button}>
          <FontAwesomeIcon icon={faUser} />
          <span>Barbeiros</span>
        </button>
        <button className={styles.main_button}>
          <FontAwesomeIcon icon={faCut} />
          <span>Cortes/Serviços</span>
        </button>
        <button className={styles.main_button}>
          <FontAwesomeIcon icon={faList} />
          <span>Reservas</span>
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
