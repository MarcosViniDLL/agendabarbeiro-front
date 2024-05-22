import { useState } from 'react';
import styles from "../Salon/Cad-salon.module.css";

function Salon() {
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
    <div className={styles.salon_form}>
      <h2>Cadastro do Salão</h2>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.form_group} ${styles.logoSalon}`}>
          <label htmlFor={styles.logoSalon}>logo do salao</label>
          <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} />
        </div>
                <div className={styles.form_group}>
                    <label htmlFor="salonName">Nome:</label>
                    <input type="text" id='name' value={salonName} onChange={(e) => setSalonName(e.target.value)} required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="localization">Localization</label>
                    <input type="text" id="local" value={localization} onChange={(e) => setLocalization(e.target.value)} required />
                </div>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    );
}

export default Salon;