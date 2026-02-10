// src/components/GameCard.jsx
export function GameCard({ game, onClick }) {
  
  // Lógica para decidir a fonte baseada no título definido no games.js
  const getFontClass = () => {
    if (game.title === "Stardew Valley") return "font-pixel";
    return "font-clean"; 
  };

  return (
    <div className="game-card" onClick={onClick}>
      <img 
        src={`/assets/imagens/${game.img}`} 
        alt={game.title} 
        className="game-cover" 
      />
      
      <div className="logo-container">
        {game.logo ? (
          <img src={`/assets/imagens/${game.logo}`} alt={game.title} className="game-logo" />
        ) : (
          /* Aplica a classe de fonte individual aqui */
          <h3 className={getFontClass()}>{game.title}</h3>
        )}
      </div>
    </div>
  );
}