import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './AddService.module.css';

Modal.setAppElement('#root');

const barbers = ['João', 'Maria', 'Pedro'];

function AddService() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [selectedBarbers, setSelectedBarbers] = useState([]);
  const [services, setServices] = useState([]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const addService = () => {
    if (serviceName && servicePrice && selectedBarbers.length > 0) {
      setServices([...services, { name: serviceName, price: servicePrice, barbers: selectedBarbers }]);
      setServiceName('');
      setServicePrice('');
      setSelectedBarbers([]);
      closeModal();
    }
  };

  const removeService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const handleBarberChange = (barber) => {
    if (selectedBarbers.includes(barber)) {
      setSelectedBarbers(selectedBarbers.filter(b => b !== barber));
    } else {
      setSelectedBarbers([...selectedBarbers, barber]);
    }
  };

  return (
    <div className={styles.ServicesHeader}>
      <div className={styles.HeaderRow}>
        <button className={styles.BackButton} onClick={() => navigate('/home')}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <h1 className={styles.Title}>Cortes e Serviços</h1>
      </div>

      <div className={styles.AddBox}>
        <button className={styles.AddButton} onClick={openModal}>Adicionar</button>
      </div>

      <ul className={styles.ServiceList}>
        {services.map((service, index) => (
          <li key={index}>
            <div className={styles.ServiceInfo}>
              {service.name} - R$ {service.price}
              <div className={styles.Barbers}>
                {service.barbers.map((barber, i) => (
                  <span key={i} className={styles.BarberTag}>{barber}</span>
                ))}
              </div>
            </div>
            <button className={styles.DeleteButton} onClick={() => removeService(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <h2>Adicionar Serviço</h2>
        <input
          className={styles.Input}
          type="text"
          placeholder="Nome do Serviço"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <input
          className={styles.Input}
          type="number"
          placeholder="Preço (R$)"
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
        />
        <div className={styles.BarbersSection}>
          <h3>Selecione os Barbeiros</h3>
          {barbers.map((barber, index) => (
            <div key={index} className={styles.Checkbox}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBarbers.includes(barber)}
                  onChange={() => handleBarberChange(barber)}
                />
                <span className={styles.CheckboxLabel}>{barber}</span>
              </label>
            </div>
          ))}
        </div>
        <div className={styles.ModalButtons}>
          <button className={styles.ModalConfirmButton} onClick={addService}>Confirmar</button>
          <button className={styles.CloseButton} onClick={closeModal}>Fechar</button>
        </div>
      </Modal>
    </div>
  );
}

export default AddService;
