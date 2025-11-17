# 🎮 Coletor de Moedas - Jogo de Realidade Aumentada

Um jogo simples de RA onde você coleta moedas e baús enquanto se move com seu celular!

## 📋 O que você precisa

- Um celular com câmera (Android ou iPhone)
- Um navegador moderno (Chrome, Firefox, Safari)
- Conexão à internet

## 🚀 Como usar

### Opção 1: Local (computador)
1. Abra `index.html` diretamente no navegador
2. Permita acesso à câmera quando solicitado

### Opção 2: No celular (Recomendado)
1. Hospede os arquivos em um servidor web (ex: `http://seu-ip:8000`)
2. Acesse pelo navegador do celular: `http://seu-ip:8000`
3. Permita acesso à câmera
4. Ande ao redor - as moedas e baús aparecerão!

## 🎯 Como jogar

- **Moedas 💰**: Valem 1 ponto cada. Aparecem com frequência e giram.
- **Baús 🎁**: Valem 5 pontos cada. Aparecem menos frequentemente.
- **Objetivo**: Ande ao redor para coletar o máximo de itens!

## 🛠️ Tecnologias usadas

- **A-Frame**: Framework 3D baseado em WebGL
- **AR.js**: Realidade aumentada baseada em câmera
- **JavaScript Puro**: Lógica do jogo

## 📂 Arquivos

- `index.html` - Página principal (interface 3D)
- `game.js` - Lógica do jogo (spawning, colisões, pontuação)
- `README.md` - Este arquivo

## 🎨 Customizações

Você pode facilmente customizar:

### Cores e tamanhos
Edite em `game.js`, na função `createObjectEntity()`:
- Moedas: `color="#FFD700"` (dourado)
- Baús: `color="#8B4513"` (marrom)

### Velocidade de spawn
Em `game.js`, altere:
```javascript
const spawnInterval = 2000; // em milissegundos
```

### Distância de coleta
Em `game.js`, altere:
```javascript
const collisionDistance = 0.5; // em metros
```

## ⚠️ Notas importantes

- Funciona melhor em navegadores mobile Chrome
- Precisa de luz adequada para o AR funcionar bem
- Testado em: Android 8+, iOS 12+
- Certifique-se que a câmera está habilitada

## 🐛 Troubleshooting

**Câmera não aparece:**
- Verifique permissões de câmera no navegador
- Tente recarregar a página

**Moedas/Baús não aparecem:**
- Aguarde alguns segundos
- Mova-se um pouco
- Verifique o console (F12) para erros

**Sem som:**
- Alguns navegadores requerem interação do usuário
- Aumente o volume do celular

## 📝 Versão

v1.0 - Novembro 2025
