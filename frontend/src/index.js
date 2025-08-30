// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

/* --- CONTROLE DE ESTILOS --- */

// 1. Bootstrap CSS (A nossa base para layout e componentes)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Nossos Estilos Personalizados (Carregados por cima do Bootstrap, nesta ordem!)
import './styles/variables.css'; // Carrega as variáveis de cor primeiro
import './styles/main.css';       // Carrega os estilos globais (fontes, body, cards) que usam as variáveis
import './styles/navbar.css';     // Carrega estilos específicos da navbar
import './styles/buttons.css'; 
import './styles/footer.css';
import './styles/lists.css';   // Carrega estilos específicos dos botões

/* --- FIM DO CONTROLE DE ESTILOS --- */


// O resto do seu ficheiro que renderiza a aplicação
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
