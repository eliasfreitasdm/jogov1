import React from 'react';

// Componente de rodapé com controles e logos
export default function GameFooter({ logos = {} }) {
  return (
    <div className="game-footer">
      {/* Seção de Controles */}
      <div className="controls-section">
        <h3 className="controls-title">🎮 Controles do Jogo</h3>
        <div className="controls-grid">
          <div className="control-item">
            <div className="control-keys">
              <span className="key">W</span>
              <span className="key">A</span>
              <span className="key">S</span>
              <span className="key">D</span>
            </div>
            <span className="control-description">Movimento</span>
          </div>
          
          <div className="control-item">
            <div className="control-keys">
              <span className="key space-key">Espaço</span>
            </div>
            <span className="control-description">Pular</span>
          </div>
          
          <div className="control-item">
            <div className="control-keys">
              <span className="key">1</span>
              <span className="key">2</span>
              <span className="key">3</span>
              <span className="key">4</span>
            </div>
            <span className="control-description">Trocar Personagem</span>
          </div>
          
          <div className="control-item">
            <div className="control-keys">
              <span className="key">I</span>
            </div>
            <span className="control-description">Inventário</span>
          </div>
          
          <div className="control-item">
            <div className="control-keys">
              <span className="key">Q</span>
            </div>
            <span className="control-description">Usar Item</span>
          </div>
        </div>
      </div>
      
      {/* Seção de Logos */}
      <div className="logos-section">
        <div className="logo-group">
          <h4 className="logo-title">Realização</h4>
          <div className="logo-container">
            {logos.realizacao ? (
              <img 
                src={logos.realizacao} 
                alt="Logo Realização" 
                className="logo-image"
              />
            ) : (
              <div className="logo-placeholder">
                <span>Logo Realização</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="logo-group">
          <h4 className="logo-title">Desenvolvimento</h4>
          <div className="logo-container">
            {logos.desenvolvimento ? (
              <img 
                src={logos.desenvolvimento} 
                alt="Logo Desenvolvimento" 
                className="logo-image"
              />
            ) : (
              <div className="logo-placeholder">
                <span>Logo Desenvolvimento</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .game-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(30, 30, 30, 0.95));
          backdrop-filter: blur(10px);
          border-top: 2px solid rgba(255, 215, 0, 0.3);
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .controls-section {
          flex: 1;
          max-width: 70%;
        }
        
        .controls-title {
          color: #FFD700;
          font-size: 16px;
          font-weight: bold;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .controls-grid {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .control-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        
        .control-keys {
          display: flex;
          gap: 3px;
        }
        
        .key {
          background: linear-gradient(145deg, #4a4a4a, #2a2a2a);
          color: white;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: bold;
          border: 1px solid #666;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          min-width: 20px;
          text-align: center;
        }
        
        .space-key {
          padding: 4px 16px;
          font-size: 10px;
        }
        
        .control-description {
          color: #E0E0E0;
          font-size: 11px;
          text-align: center;
          font-weight: 500;
        }
        
        .logos-section {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        
        .logo-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .logo-title {
          color: #FFD700;
          font-size: 12px;
          font-weight: bold;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .logo-container {
          width: 80px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(255, 215, 0, 0.3);
        }
        
        .logo-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .logo-placeholder {
          color: #999;
          font-size: 10px;
          text-align: center;
          padding: 5px;
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
          .game-footer {
            flex-direction: column;
            gap: 15px;
            padding: 10px;
          }
          
          .controls-section {
            max-width: 100%;
          }
          
          .controls-grid {
            justify-content: center;
            gap: 15px;
          }
          
          .logos-section {
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .controls-grid {
            gap: 10px;
          }
          
          .control-item {
            gap: 3px;
          }
          
          .key {
            padding: 3px 6px;
            font-size: 10px;
          }
          
          .control-description {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
}

