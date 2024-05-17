import { useState } from 'react';
import "../Salon/cad-salon.css";

export function Salon() {
    const [salonName, setSalonName] = useState('');
    const [localization, setLocalization] = useState('');
    const [logoSalon, setLogoSalon] = useState(null); 
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Dados do formulário:', {
            salonName,
            localization,
            logoSalon
        });
    };

    const handleFotoChange = (event) => {
        const foto = event.target.files[0];
        setLogoSalon(foto);
    };

    return (
    <div className="salon-form">
      <h2>Cadastro do Salão</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group logoSalon">
          <label htmlFor="logoSalon">logo do salao</label>
          <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} />
        </div>
                <div className="form-group">
                    <label htmlFor="salonName">Nome:</label>
                    <input type="text" id='name' value={salonName} onChange={(e) => setSalonName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="localization">Localization</label>
                    <input type="text" id="local" value={localization} onChange={(e) => setLocalization(e.target.value)} required />
                </div>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    );
}