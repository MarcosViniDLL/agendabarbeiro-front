import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faCut, faList } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';
import styles from '../Inicial/Home.module.css';

function HomeHeader() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.settings_button} onClick={() => navigate('/settings')}>
        <FontAwesomeIcon icon={faCog} size="lg" />
      </button>
      <div className={styles.home_header}>
        <h1 className={styles.welcome_text}>Bem-vindo, userName</h1>
      </div>

      <div className={styles.main_buttons}>
        <button className={styles.main_button} onClick={() => navigate('/add-barber')}>
          <FontAwesomeIcon icon={faUser} />
          <span>Barbeiros</span>
        </button>
        <button className={styles.main_button} onClick={() => navigate('/add-service')}>
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
