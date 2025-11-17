#!/bin/bash
# Script para iniciar desenvolvimento

echo "🎮 Caçador de Tesouro - Iniciador"
echo "=================================="
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"
echo ""

# Instalar dependências
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

# Menu
echo "Escolha uma opção:"
echo "1. Desenvolvimento local (http://localhost:3000)"
echo "2. Build para produção"
echo "3. Preview do build"
echo ""
read -p "Opção (1-3): " option

case $option in
    1)
        echo "🚀 Iniciando servidor de desenvolvimento..."
        npm run dev
        ;;
    2)
        echo "🏗️ Buildando para produção..."
        npm run build
        echo "✅ Build concluído em ./dist"
        ;;
    3)
        echo "👁️ Previsualizando build..."
        npm run preview
        ;;
    *)
        echo "❌ Opção inválida!"
        exit 1
        ;;
esac
