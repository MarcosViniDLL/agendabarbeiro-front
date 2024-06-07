import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Settings.module.css';

function Settings() {
  return (
    <div className={styles.SettingsContainer}>
      <button className={styles.SettingsButton}>
        Alterar Informações
      </button>
      <button className={styles.SettingsButton}>
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Settings;
