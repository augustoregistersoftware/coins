import React from 'react';

interface ErrorScreenProps {
  error: string;
  onRetry: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ error, onRetry }) => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Ícone de erro */}
      <div className="mb-8 text-6xl">
        ❌
      </div>

      {/* Título */}
      <h1 className="text-white text-2xl font-bold mb-4 text-center px-4">
        Oops! Algo deu errado
      </h1>

      {/* Erro */}
      <div className="bg-red-900 border border-red-700 rounded-lg p-4 mb-6 max-w-xs text-center">
        <p className="text-red-100 text-sm font-mono">{error}</p>
      </div>

      {/* Soluções */}
      <div className="bg-gray-900 rounded-lg p-4 mb-8 max-w-xs text-left">
        <p className="text-white font-bold mb-2">Tente:</p>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>✓ Recarregar a página</li>
          <li>✓ Permitir permissão de câmera</li>
          <li>✓ Usar um navegador moderno (Chrome, Firefox, Safari)</li>
          <li>✓ Em celular, usar HTTPS</li>
          <li>✓ Verificar se a câmera não está em uso</li>
        </ul>
      </div>

      {/* Botão Retry */}
      <button
        onClick={onRetry}
        className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
      >
        🔄 Tentar Novamente
      </button>

      {/* Debug info */}
      <div className="mt-8 text-gray-500 text-xs text-center">
        <p>Navegador: {navigator.userAgent.split(' ').slice(-1)[0]}</p>
        <p>Plataforma: {navigator.platform}</p>
      </div>
    </div>
  );
};

export default ErrorScreen;
