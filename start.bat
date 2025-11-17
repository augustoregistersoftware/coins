@echo off
REM Script para iniciar desenvolvimento no Windows

title Caçador de Tesouro - Iniciador
color 0A

echo.
echo ================================
echo   Caçador de Tesouro - Iniciador
echo ================================
echo.

REM Verificar Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js não está instalado!
    echo Baixe em: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detectado
echo.

REM Instalar dependências se necessário
if not exist "node_modules" (
    echo 📦 Instalando dependências...
    call npm install
    echo.
)

REM Menu
echo Escolha uma opção:
echo 1 - Desenvolvimento local (http://localhost:3000)
echo 2 - Build para produção
echo 3 - Preview do build
echo.

set /p option="Opção (1-3): "

if "%option%"=="1" (
    echo.
    echo 🚀 Iniciando servidor de desenvolvimento...
    echo Acesse: http://localhost:3000
    echo.
    call npm run dev
) else if "%option%"=="2" (
    echo.
    echo 🏗️ Buildando para produção...
    call npm run build
    echo ✅ Build concluído em .\dist
    pause
) else if "%option%"=="3" (
    echo.
    echo 👁️ Previsualizando build...
    call npm run preview
) else (
    echo ❌ Opção inválida!
    pause
    exit /b 1
)

pause
