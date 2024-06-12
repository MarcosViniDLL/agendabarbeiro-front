import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './reservas.css';

const Reservas = () => {
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    // Aqui você faria a chamada para sua API para buscar usuários e reservas
    const fetchData = async () => {
      try {
        // Exemplo de chamadas de API
        // const usuariosData = await fetch('/api/usuarios').then(res => res.json());
        // const reservasData = await fetch('/api/reservas').then(res => res.json());

        // setUsuarios(usuariosData);
        // setReservas(reservasData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const filtrarReservas = () => {
    return reservas.filter(reserva => {
      return selectedUsuario ? reserva.usuario === selectedUsuario.label : true;
    });
  };

  const reservasFiltradas = filtrarReservas();

  return (
    <div className="reservas">
      <h1>Reservas</h1>
      <div className="filtros">
        <div className="filtro-usuario">
          <label>Filtrar por Colaborador:</label>
          <Select
            options={usuarios}
            value={selectedUsuario}
            onChange={setSelectedUsuario}
            placeholder="Selecione um colaborador"
          />
        </div>
      </div>
      <div className="lista-reservas">
        <h2>Lista de Reservas</h2>
        {reservasFiltradas.length > 0 ? (
          <ul>
            {reservasFiltradas.map(reserva => (
              <li key={reserva.id}>
                {reserva.usuario} - {reserva.salao} - {reserva.data}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma reserva encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default Reservas;
