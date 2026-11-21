import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  async function fazerLogin() {
    try {
      await axios.post('http://localhost:3000/auth/login', {
        email,
        senha,
      });

      setLogado(true);
    } catch {
      alert('Login inválido');
    }
  }

  if (logado) {
    return (
      <div style={{ padding: '30px' }}>
        <h1>🌿 Circuito Terê Verde</h1>

        <button
          onClick={() => setLogado(false)}
        >
          Sair
        </button>

        <h2>Área Administrativa</h2>

        <p>
          Login realizado com sucesso.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '350px',
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <h1>🌿 Circuito Terê Verde</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />

        <br />
        <br />

        <button onClick={fazerLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default App;