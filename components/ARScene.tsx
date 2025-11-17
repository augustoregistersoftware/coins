/// <reference path="../aframe.d.ts" />
import React, { useEffect, useState } from 'react';
import { Treasure } from '../types';
import TreasureComponent from './Treasure';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';

interface ARSceneProps {
  treasures: Treasure[];
  onCollectTreasure: (treasureId: number) => void;
}

const ARScene: React.FC<ARSceneProps> = ({ treasures, onCollectTreasure }) => {
  const [sceneReady, setSceneReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    const sceneEl = document.querySelector('a-scene');
    
    const handleSceneLoaded = () => {
      console.log('✅ A-Scene carregado com sucesso!');
      setSceneReady(true);
    };

    const handleSceneError = (event: Event) => {
      console.error('❌ Erro na cena A-Frame:', event);
      setCameraError('Erro ao inicializar A-Frame. Tente recarregar.');
    };

    if (sceneEl) {
      if ((sceneEl as any).hasLoaded) {
        setSceneReady(true);
      } else {
        sceneEl.addEventListener('loaded', handleSceneLoaded);
        sceneEl.addEventListener('error', handleSceneError);

        // Timeout de segurança
        const timeout = setTimeout(() => {
          if (!sceneReady) {
            console.warn('⚠️ A-Scene demorou para carregar, continuando mesmo assim...');
            setSceneReady(true);
          }
        }, 5000);

        return () => {
          clearTimeout(timeout);
          sceneEl.removeEventListener('loaded', handleSceneLoaded);
          sceneEl.removeEventListener('error', handleSceneError);
        };
      }
    }
  }, [sceneReady]);

  if (cameraError) {
    return (
      <ErrorScreen 
        error={cameraError} 
        onRetry={() => {
          setCameraError(null);
          window.location.reload();
        }}
      />
    );
  }

  if (!sceneReady) {
    return <LoadingScreen message="📹 Inicializando câmera AR..." />;
  }

  return (
    <a-scene
      embedded
      arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; patternRatio: 0.8;"
      device-orientation-permission-ui="enabled: true"
      vr-mode-ui="enabled: false"
      renderer="colorManagement: true; physicallyCorrectLights: true; alpha: true; antialias: true;"
      style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {/* Iluminação */}
      <a-light type="ambient" color="#FFF" intensity="0.8"></a-light>
      <a-light 
        type="directional" 
        color="#FFF" 
        intensity="1" 
        position="5 5 5"
      ></a-light>

      {/* Câmera com controles */}
      <a-camera
        look-controls
        position="0 1.6 0"
        wasd-controls="enabled: false"
        gesture-detector
      >
        <a-entity
          cursor="fuse: true; fuseTimeout: 200"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;"
          material="color: #00BCD4; shader: flat; opacity: 0.8;"
        />
      </a-camera>

      {/* Tesouros */}
      {treasures.map((treasure) => (
        <TreasureComponent
          key={treasure.id}
          treasure={treasure}
          onCollect={onCollectTreasure}
        />
      ))}

      {/* Plano de referência (opcional) */}
      <a-plane
        position="0 0 -5"
        rotation="-90 0 0"
        width="50"
        height="50"
        color="#111"
        opacity="0.1"
      ></a-plane>
    </a-scene>
  );
};

export default ARScene;