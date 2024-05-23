import React, { useState } from 'react';
import styles from "./Forgot.module.css";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Posteriormente será adicionada a lógica de enviar o e-email de redefinição de senha.
        setEmailSent(true);
    };

    return (
        <div className={styles["forgot-password-container"]}>
            <h2>Esqueceu sua senha?</h2>
            {!emailSent ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>
                        Email:
                        <input type="email" value={email} onChange={handleChange} />
                    </label>
                    <button type="submit">Enviar Email de Redefinição</button>
                </form>
            ) : (
                <p>Um e-mail de redefinição de senha foi enviado para {email}.</p>
            )}
        </div>
    );
}

export default ForgotPassword;
