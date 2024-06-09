import { useState } from 'react';
import style from '../Register/Register.module.css';

function Cadastro() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Dados do formulário:', {
            nomeCompleto,
            telefone,
            cpf,
            dataNascimento,
            email,
            senha,
            confirmarSenha,
            fotoPerfil
        });

        // Abre o modal
        setIsModalOpen(true);
    };

    const handleFotoChange = (event) => {
        const foto = event.target.files[0];
        setFotoPerfil(foto);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.cadastroForm}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.fotoPerfil}>
                    <label className={style.labelFoto} htmlFor="fotoPerfil">Foto de Perfil</label>
                    <input className={style.inputFoto} type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="nomeCompleto">Nome Completo</label>
                    <input type="text" id='nomeCompleto' value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input type="date" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="confirmarSenha">Confimar Senha</label>
                    <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                </div>

                <button type='submit'>Cadastrar</button>
            </form>

            {isModalOpen && (
                <div className={style.modal}>
                    <div className={style.modalContent}>
                        <h2>Cadastro realizado com sucesso!</h2>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}

            <a href="/cad-salon" className={style.cadSalonLink}>Cadastre seu salão por aqui</a>
        </div>
    );
}

export default Cadastro;
