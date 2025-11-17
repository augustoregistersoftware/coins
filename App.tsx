
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Treasure, TreasureType } from './types';
import ARScene from './components/ARScene';
import HUD from './components/HUD';
import LoadingScreen from './components/LoadingScreen';
import ErrorScreen from './components/ErrorScreen';

const TREASURE_COUNT = 20;
const GAME_RADIUS = 10;

// Sons do servidor local (não CDN)
const SOUNDS = {
  ambient: '/sounds/ambient.mp3',
  coin: '/sounds/coin.wav',
  chest: '/sounds/chest.wav',
};

const App: React.FC = () => {
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Sound Refs ---
  const ambientSound = useRef<HTMLAudioElement | null>(null);
  const coinSound = useRef<HTMLAudioElement | null>(null);
  const chestSound = useRef<HTMLAudioElement | null>(null);
  
  // Preload sounds
  useEffect(() => {
    try {
      ambientSound.current = new Audio(SOUNDS.ambient);
      ambientSound.current.loop = true;
      ambientSound.current.volume = 0.15;

      coinSound.current = new Audio(SOUNDS.coin);
      coinSound.current.volume = 0.5;
      
      chestSound.current = new Audio(SOUNDS.chest);
      chestSound.current.volume = 0.5;

      console.log('✅ Sons carregados com sucesso');
    } catch (err) {
      console.warn('⚠️ Erro ao carregar sons:', err);
    }
  }, []);

  // --- Game State Effects for Audio ---
  useEffect(() => {
    if (gameActive && ambientSound.current) {
      ambientSound.current.play().catch(error => {
        console.warn("Reprodução de áudio de fundo falhou. Interação do usuário pode ser necessária.", error);
      });
    } else if (!gameActive && ambientSound.current) {
      ambientSound.current.pause();
      ambientSound.current.currentTime = 0;
    }

    return () => {
      if (ambientSound.current) {
        ambientSound.current.pause();
        ambientSound.current.currentTime = 0;
      }
    };
  }, [gameActive]);

  const generateTreasures = useCallback(() => {
    const newTreasures: Treasure[] = [];
    for (let i = 0; i < TREASURE_COUNT; i++) {
      newTreasures.push({
        id: i,
        type: Math.random() < 0.8 ? TreasureType.COIN : TreasureType.CHEST,
        position: {
          x: (Math.random() - 0.5) * 2 * GAME_RADIUS,
          y: Math.random() * 1.5 + 0.5,
          z: (Math.random() - 0.5) * 2 * GAME_RADIUS - 3,
        },
      });
    }
    setTreasures(newTreasures);
  }, []);

  const handleStartGame = useCallback(() => {
    setLoading(true);
    setError(null);
    
    // Dar tempo para inicializar
    setTimeout(() => {
      try {
        generateTreasures();
        setScore(0);
        setGameActive(true);
        setLoading(false);
      } catch (err) {
        setError(`Erro ao iniciar jogo: ${err}`);
        setLoading(false);
      }
    }, 500);
  }, [generateTreasures]);

  const handleRestartGame = useCallback(() => {
    setGameActive(false);
    setTimeout(() => {
      handleStartGame();
    }, 100);
  }, [handleStartGame]);

  const handleCollectTreasure = useCallback((treasureId: number) => {
    const collected = treasures.find(t => t.id === treasureId);
    if (collected) {
      // Play sound effect
      if (collected.type === TreasureType.COIN && coinSound.current) {
        coinSound.current.currentTime = 0;
        coinSound.current.play().catch(() => {});
      } else if (collected.type === TreasureType.CHEST && chestSound.current) {
        chestSound.current.currentTime = 0;
        chestSound.current.play().catch(() => {});
      }

      // Vibração no celular
      if (navigator.vibrate) {
        navigator.vibrate(collected.type === TreasureType.COIN ? 50 : 100);
      }

      setScore(prevScore => prevScore + (collected.type === TreasureType.COIN ? 10 : 50));
      setTreasures(prevTreasures => prevTreasures.filter(t => t.id !== treasureId));
    }
  }, [treasures]);

  if (error) {
    return (
      <ErrorScreen 
        error={error} 
        onRetry={() => {
          setError(null);
          handleStartGame();
        }}
      />
    );
  }

  if (loading) {
    return <LoadingScreen message="🎮 Iniciando jogo..." />;
  }

  return (
    <div className={`w-screen h-screen ${!gameActive ? 'bg-gradient-to-b from-gray-900 to-black' : ''}`}>
      {gameActive ? (
        <>
          <ARScene treasures={treasures} onCollectTreasure={handleCollectTreasure} />
          <HUD score={score} treasures={treasures} onRestart={handleRestartGame} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full text-white">
          <div className="mb-8 text-7xl animate-bounce">
            🎮
          </div>
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Caçador de Tesouro
          </h1>
          <p className="text-lg mb-8 max-w-md text-center text-gray-300">
            Use sua câmera para encontrar e coletar moedas 💰 e baús 🎁 ao seu redor!
          </p>
          <button
            onClick={handleStartGame}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          >
            🚀 Começar a Caçar
          </button>
          
          <div className="mt-12 max-w-md text-center text-sm text-gray-400">
            <p className="mb-4">⚡ Dicas para melhor experiência:</p>
            <ul className="space-y-2">
              <li>✓ Permita acesso à câmera</li>
              <li>✓ Use em local bem iluminado</li>
              <li>✓ WiFi forte = menos lag</li>
              <li>✓ Se usar celular, use HTTPS</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
