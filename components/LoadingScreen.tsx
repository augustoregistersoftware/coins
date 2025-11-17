import React from 'react';

interface LoadingScreenProps {
  message?: string;
  progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = '🎥 Abrindo câmera...', 
  progress = 0 
}) => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Spinner */}
      <div className="mb-8">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-cyan-400 rounded-full animate-spin"></div>
      </div>

      {/* Mensagem */}
      <p className="text-white text-xl mb-4 text-center px-4">
        {message}
      </p>

      {/* Progress bar */}
      {progress > 0 && (
        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Dicas */}
      <div className="mt-8 text-center text-gray-400 text-sm max-w-xs">
        <p className="mb-2">💡 Dica:</p>
        <ul className="text-left space-y-1">
          <li>✓ Certifique-se de permitir câmera</li>
          <li>✓ Boa iluminação funciona melhor</li>
          <li>✓ Se travar, recarregue a página</li>
        </ul>
      </div>
    </div>
  );
};

export default LoadingScreen;
