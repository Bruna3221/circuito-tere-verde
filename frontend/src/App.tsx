import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);
  const [eventos, setEventos] = useState<any[]>([]);

  async function carregarEventos() {
  try {
    const resposta = await axios.get(
      'http://localhost:3000/eventos',
    );

    setEventos(resposta.data);
  } catch (erro) {
    console.log(erro);
  }
}

  async function fazerLogin() {
    try {
      await axios.post('http://localhost:3000/auth/login', {
        email,
        senha,
      });

      await carregarEventos();
      setLogado(true);
    } catch {
      alert('Login inválido');
    }
  }

 if (logado) {
  return (
    <div className="painel">
      <div className="topo">
        <h1>🌿 Circuito Terê Verde</h1>

        <button
          className="btn-sair"
          onClick={() => setLogado(false)}
        >
          Sair
        </button>
      </div>

      <div className="card">
        <h2>Área Administrativa</h2>

        <p>
          Bem-vinda ao sistema Circuito Terê Verde.
        </p>

        <hr />

        <h3>Status do Projeto</h3>

        <p>✅ Backend NestJS</p>
        <p>✅ Frontend React</p>
        <p>✅ CRUD de Eventos</p>
        <p>✅ Login Administrativo</p>

        <hr />

        <p>
          Sistema pronto para gerenciamento de
          eventos turísticos.
        </p>
      </div>

      <div className="card">
        <h2>Eventos Cadastrados</h2>

        <div>
          <h3>Festival de Trilhas</h3>

          <p>📍 Local: Teresópolis</p>

          <p>📅 Data: 15/12/2026</p>

          <p>🏕️ Categoria: Trilha</p>
        </div>
      </div>
    </div>
  );
}


 return (
  <div className="login-container">
    <div className="login-card">
      <h1>🌿 Circuito Terê Verde</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={fazerLogin}>
        Entrar
      </button>
    </div>
  </div>
  );
}
export default App;