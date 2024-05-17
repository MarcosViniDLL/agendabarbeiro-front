import { useState } from 'react';
import "../Register/cadastro.css";
import { Link } from 'react-router-dom';
export function Cadastro() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);

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
    };

    const handleFotoChange = (event) => {
        const foto = event.target.files[0];
        setFotoPerfil(foto);
    };

    return (
    <div className="cadastro-form">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group fotoPerfil">
          <label htmlFor="fotoPerfil">Foto de Perfil</label>
          <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} />
        </div>

                <div className="form-group">
                    <label htmlFor="nomeCompleto">Nome Completo</label>
                    <input type="text" id='nomeCompleto' value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input type="date" id="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmarSenha">Confimar Senha</label>
                    <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
                </div>
                
                <Link to="/cad-salon">
                    <button type='submit'>cadastrar</button>
                </Link>
            </form>

        </div>
    );
}