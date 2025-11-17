# 🎮 Caçador de Tesouro - AR Game

Um jogo interativo de realidade aumentada (AR) onde você coleta moedas e baús navegando pelo mundo!

## ✨ Características

- 🎥 **Realidade Aumentada** - Câmera ao vivo com A-Frame + AR.js
- 💰 **Coletar Tesouros** - Moedas (10 pts) e Baús (50 pts)
- 🔊 **Sons e Vibração** - Feedback tátil e auditivo
- 📱 **Mobile Optimizado** - Funciona perfeitamente em celular
- 🎨 **UI Moderna** - Tailwind CSS com design responsivo
- ⚡ **Rápido** - Vite + React + TypeScript

## 🚀 Começar Rápido

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Desenvolvimento local
```bash
npm run dev
```
Acesse `http://localhost:3000` no navegador

### 3️⃣ Build para produção
```bash
npm run build
npm run preview
```

## 📱 Usar no Celular

### Opção A: HTTPS com Python
```bash
# Na pasta do projeto
python server.py
```
Depois acesse a URL HTTPS mostrada (ex: `https://seu-ip:8000`)

### Opção B: Ngrok (Recomendado)
```bash
ngrok http 3000
```
Use a URL gerada pelo ngrok

### Opção C: Mesmo WiFi (HTTP)
```bash
npm run dev
```
Acesse `http://seu-ip-local:3000` do celular

⚠️ **Nota**: Navegadores modernos requerem **HTTPS** para acessar câmera no celular

## 📁 Estrutura do Projeto

```
coins/
├── src/
│   ├── App.tsx                 # Componente principal
│   ├── index.tsx               # Entrada
│   ├── types.ts                # Tipos TypeScript
│   ├── components/
│   │   ├── ARScene.tsx         # Cena AR com A-Frame
│   │   ├── HUD.tsx             # Interface do usuário
│   │   ├── Treasure.tsx        # Componente do tesouro
│   │   ├── Radar.tsx           # Mini-mapa
│   │   ├── LoadingScreen.tsx   # Tela de carregamento
│   │   └── ErrorScreen.tsx     # Tela de erro
│   └── assets/
│       └── sounds/             # Arquivo de áudio
├── public/
│   ├── index.html              # HTML principal
│   └── sounds/                 # Sons do jogo
├── vite.config.ts              # Configuração Vite
├── tsconfig.json               # Configuração TypeScript
└── package.json                # Dependências
```

## 🎮 Como Jogar

1. **Iniciar Jogo** - Clique em "🚀 Começar a Caçar"
2. **Permitir Câmera** - Aceite a solicitação de câmera
3. **Coletar Tesouros**:
   - 💰 **Moedas** = 10 pontos
   - 🎁 **Baús** = 50 pontos
4. **Movimento** - Ande ao seu redor para encontrar itens
5. **Coletar** - Coloque o tesouro no centro da tela

## 🛠️ Stack Tecnológico

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **AR/3D**: A-Frame + AR.js
- **CSS**: Tailwind CSS
- **Audio**: Web Audio API
- **Feedback**: Vibration API

## ⚙️ Configuração de Som

Os sons estão em `/public/sounds/`:
- `ambient.mp3` - Música de fundo
- `coin.wav` - Som de moeda
- `chest.wav` - Som de baú

Para adicionar seus próprios sons, substitua os arquivos.

## 🔧 Melhorias Implementadas

✅ Remover importmap CDN (usar Vite normalmente)
✅ Sons movidos para `/public` (não CDN)
✅ Loading screen com feedback visual
✅ Error handling melhorado
✅ Suporte a vibração (mobile)
✅ CORS headers configurados
✅ AR.js atualizado para v3.4.5
✅ UI redesenhada com Tailwind

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Câmera não abre | Verifique permissões, use HTTPS no celular |
| Sem som | Verifique volume, alguns navegadores requerem interação |
| Lag no mobile | WiFi mais forte, luz melhor, navegador mais novo |
| "Erro ao iniciar jogo" | Recarregue a página, verifique console |

## 📊 Browser Suporte

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | ✅ |
| IE | ❌ | ❌ |

## 🚀 Performance

- Renderização em WebGL
- Otimizado para mobile
- Compressão de assets
- Lazy loading de recursos

## 📝 Desenvolvedor

Desenvolvido com ❤️ para realidade aumentada interativa.

## 📜 Licença

MIT - Sinta-se livre para usar e modificar!
