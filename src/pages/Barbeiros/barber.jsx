import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './AddBarber.module.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

function AddBarber() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cpf, setCpf] = useState('');
  const [role, setRole] = useState('Funcionário');
  const [barbers, setBarbers] = useState([
    { name: 'João', role: 'Gerente' },
    { name: 'Maria', role: 'Funcionária' },
    { name: 'Pedro', role: 'Funcionário' }
  ]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSearch = () => {
    // Fake search logic - In a real scenario, replace with an API call
    const newBarber = { name: `${cpf}`, role: role };
    setBarbers([...barbers, newBarber]);
    setCpf('');
    setRole('Funcionário');
    closeModal();
  };

  const handleDelete = (index) => {
    setBarbers(barbers.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.BarbeirosHeader}>
      <div className={styles.HeaderRow}>
        <button className={styles.BackButton} onClick={() => navigate('/home')}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <h1 className={styles.Title}>Adicionar Barbeiro</h1>
      </div>

      <div className={styles.AddBox}>
        <button className={styles.AddButton} onClick={openModal}>Adicionar</button>
      </div>

      <ul className={styles.BarberList}>
        {barbers.map((barber, index) => (
          <li key={index}>
            {barber.name} - {barber.role}
            <button className={styles.DeleteButton} onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Adicionar Barbeiro"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <h2>Pesquisar Funcionario</h2>
        <div className={styles.SearchBox}>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Pesquisar por CPF"
            className={styles.SearchInput}
          />
          <button onClick={handleSearch} className={styles.SearchButton}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className={styles.RoleSelection}>
          <label>
            <input
              type="radio"
              value="Funcionário"
              checked={role === 'Funcionário'}
              onChange={(e) => setRole(e.target.value)}
            />
            Funcionário
          </label>
          <label>
            <input
              type="radio"
              value="Gerente"
              checked={role === 'Gerente'}
              onChange={(e) => setRole(e.target.value)}
            />
            Gerente
          </label>
        </div>
        <button onClick={closeModal} className={styles.CloseButton}>Fechar</button>
      </Modal>
    </div>
  );
}

export default AddBarber;
