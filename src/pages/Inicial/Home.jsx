import React from 'react';
import "../Inicial/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faCut, faList } from '@fortawesome/free-solid-svg-icons'; 

export function HomeHeader() {
  return (
    <div className="container">
      <button className="settings-button">
        <FontAwesomeIcon icon={faCog} size="lg" /> {/* Ícone de configurações */}
      </button>
      <div className="home-header">
        <h1 className="welcome-text">Bem-vindo, userName</h1>
      </div>

      <div className="main-buttons">
        <button className="main-button">
          <FontAwesomeIcon icon={faUser} />
          <span>Barbeiros</span>
        </button>
        <button className="main-button">
          <FontAwesomeIcon icon={faCut} />
          <span>Cortes/Serviços</span>
        </button>
        <button className="main-button">
          <FontAwesomeIcon icon={faList} />
          <span>Reservas</span>
        </button>
      </div>
    </div>
  );
}
