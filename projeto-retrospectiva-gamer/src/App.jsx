import { useState } from 'react'
import './App.css'
import { gamesData } from './data/games'
import { GameCard } from './components/GameCard'

function App() {
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  return (
    <div className="App">
      <header className="navbar">
        <div className="nav-logo">
          <h1>Davi Game Retrospective</h1>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#games-grid">Jogos</a></li>
            <li>
              <a href="https://github.com/Davibesxxol" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="hero-content">
            <h1>Seja bem-vindo à minha retrospectiva </h1>
            <p>Uma jornada pelos jogos que fizeram parte da minha história...</p>
            {/* O botão agora é um link que leva para a transição */}
            <a href="#transition-container" className="btn-explore">EXPLORAR RETROSPECTIVA</a>
          </div>
          <div className="hero-image">
            <img src="/assets/imagens/killua.png" alt="Killua" className="intro-img" />
          </div>
        </section>

        {/* SEÇÃO DE TRANSIÇÃO: Entretenimento para empurrar os jogos para baixo */}
        <section id="transition-container">
          <div className="console-box">
            <div className="pixel-art">
              {/* Um console clássico para entreter o usuário antes da grid */}
            </div>
            <div className="transition-text">
              <h2>Quase lá...</h2>
              <p>Role para baixo ou continue explorando para ver a lista completa dos meus títulos favoritos.</p>
            </div>
          </div>
        </section>

        <div id="games-grid">
          {gamesData.map((jogo) => (
            <GameCard 
              key={jogo.id} 
              game={jogo} 
              onClick={() => setJogoSelecionado(jogo)} 
            />
          ))}
        </div>
      </main>

      {jogoSelecionado && (
        <div className="modal-overlay" onClick={() => setJogoSelecionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setJogoSelecionado(null)}>×</button>

            <img 
              src={`/assets/imagens/${jogoSelecionado.img}`} 
              alt={jogoSelecionado.title} 
              className="modal-img" 
            />

            <div className="modal-info">
              <h2>{jogoSelecionado.title}</h2>
              
              <div className="stats">
                <p><strong>{jogoSelecionado.hours || "0"}</strong> Horas jogadas</p>
                <p><strong>{jogoSelecionado.conquistas || "0"}</strong> Conquistas</p>
                <p>Status: <strong>{jogoSelecionado.status}</strong></p>
              </div>

              <p className="description">
                {jogoSelecionado.descricao || "Sem descrição disponível."}
              </p>

              <div className="tag">
                {jogoSelecionado.genero || "GERAL"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div> 
  ); 
} 

export default App;