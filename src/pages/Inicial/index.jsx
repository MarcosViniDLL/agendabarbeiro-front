import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCut, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from '../Inicial/Home.module.css';

Modal.setAppElement('#root');

function HomeHeader() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleLogout = () => {
    closeModal();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <button className={styles.settings_button} onClick={openModal}>
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
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
        <button className={styles.main_button} onClick={() => navigate('/reservas')}>
          <FontAwesomeIcon icon={faList} />
          <span>Reservas</span>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmar Logout"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <h2>Tem certeza que gostaria de sair?</h2>
        <button onClick={handleLogout} className={styles.ConfirmButton}>Sim</button>
        <button onClick={closeModal} className={styles.CloseButton}>Não</button>
      </Modal>
    </div>
  );
}

export default HomeHeader;