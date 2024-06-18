import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './reservas.css';
import { getBooking, getBarbers } from '../../api/api';

const Reservas = () => {
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [completedReservations, setCompletedReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseReservas = await getBooking();
        const responseUsuarios = await getBarbers();
        
        setReservas(responseReservas.data);
        
        const usuariosOptions = responseUsuarios.data.map(usuario => ({
          value: usuario.id,
          label: usuario.full_name
        }));
        
        // Adicionando a opção "Ver todos"
        usuariosOptions.unshift({ value: null, label: "Ver todos" });
        
        setUsuarios(usuariosOptions);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const filtrarReservas = () => {
    return reservas.filter(reserva => {
      return selectedUsuario && selectedUsuario.value !== null
        ? reserva.collaborator.name === selectedUsuario.label
        : true;
    });
  };
 

  const handleCompleteReservation = (id) => {
    setCompletedReservations(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(reservationId => reservationId !== id);
      } else {
        return [...prevState, id];
      }
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
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: 'white',
                color: 'black'
              }),
              singleValue: (provided) => ({
                ...provided,
                color: 'black'
              })
            }}
          />
        </div>
      </div>
      <div className="lista-reservas">
        <h2>Lista de Reservas</h2>
        {reservasFiltradas.length > 0 ? (
          <ul>
            {reservasFiltradas.map(reserva => (
              <li key={reserva.id} className={completedReservations.includes(reserva.id) ? 'completed' : ''}>
                <input 
                  type="checkbox" 
                  checked={completedReservations.includes(reserva.id)}
                  onChange={() => handleCompleteReservation(reserva.id)}
                />
                <div>
                  <p><strong>Colaborador:</strong> {reserva.collaborator.name}</p>
                  <p><strong>Salão:</strong> {reserva.salon.name} - {reserva.salon.address}</p>
                  <p><strong>Cliente:</strong> {reserva.client.name}</p>
                  <p><strong>Serviço:</strong> {reserva.services.map(service => service.title).join(', ')}</p>
                  <p><strong>Data e Hora:</strong> {new Date(reserva.start_booking).toLocaleString()} a {new Date(reserva.end_booking).toLocaleString()}</p>
                  <p><strong>Valor Total:</strong> R${reserva.total_amount}</p>
                </div>
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
