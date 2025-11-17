# 🚀 PRÓXIMOS PASSOS

## ⚡ Início Rápido (5 minutos)

### Windows
```powershell
# Duplo clique em:
start.bat

# Escolha opção 1
```

### Mac/Linux
```bash
chmod +x start.sh
./start.sh
# Escolha opção 1
```

### Ou manualmente
```bash
npm install
npm run dev
```

## 📱 Testar no Celular

### ⚠️ IMPORTANTE: Você vai precisar de HTTPS

**Opção A: ngrok (Fácil)**
```bash
# Terminal 1: Desenvolvimento
npm run dev

# Terminal 2: HTTPS
ngrok http 3000
```
Acesse a URL do ngrok no celular (será algo como `https://xyz123.ngrok.io`)

**Opção B: Mesmo WiFi + HTTPS**
```bash
pip install cryptography
python server.py
```
Acesse `https://seu-ip-local:8000`

## ✅ Checklist de Verificação

- [ ] `npm install` rodou sem erros
- [ ] `npm run dev` iniciou em `http://localhost:3000`
- [ ] Página carrega no navegador
- [ ] Botão "🚀 Começar a Caçar" aparece
- [ ] Câmera abre quando clica
- [ ] LoadingScreen aparece enquanto carrega
- [ ] Moedas e baús aparecem na câmera
- [ ] Coletando moedas funciona
- [ ] Som toca ao coletar (se browser permitir)
- [ ] Vibração funciona no celular

## 🐛 Se algo não funcionar

1. **Câmera não abre?**
   - Verifique permissões do navegador
   - Tente outro navegador (Chrome recomendado)
   - No celular, use HTTPS

2. **Sem som?**
   - Verifique volume do navegador
   - Alguns navegadores requerem interação primeiro
   - Verifique console (F12) para erros

3. **Lag/Lento?**
   - WiFi mais forte
   - Iluminação melhor
   - Navegador mais novo
   - Menos abas abertas

4. **"Erro ao acessar câmera"?**
   - Recarregue a página
   - Verifique se a câmera não está em uso
   - Permita permissão novamente
   - Verifique console (F12)

## 📊 Versões das Dependências

```
React: 19.2.0
TypeScript: 5.8.2
Vite: 6.2.0
A-Frame: 1.5.0
AR.js: 3.4.5
Tailwind: (via CDN)
```

## 🎯 Arquivos Importantes

```
src/
├── App.tsx           ← Lógica principal
├── index.tsx         ← Entrada
├── types.ts          ← Tipos
└── components/
    ├── ARScene.tsx   ← Realidade aumentada
    ├── HUD.tsx       ← Interface
    ├── Treasure.tsx  ← Tesouro 3D
    ├── LoadingScreen.tsx
    └── ErrorScreen.tsx

public/
├── index.html        ← HTML
└── sounds/           ← Sua música aqui!
    ├── ambient.mp3
    ├── coin.wav
    └── chest.wav
```

## 💡 Dicas

- Os sons estão em `/public/sounds/` - substitua para adicionar seus próprios
- Customize cores/textos no App.tsx
- UI é feita com Tailwind CSS
- 3D é feito com A-Frame (fácil!)

## 🆘 Suporte

Se tiver problema:
1. Abra console (F12)
2. Procure por "❌" ou "Error"
3. Copie a mensagem de erro
4. Procure no Google ou GitHub Issues

## ✨ Sucesso!

Se tudo funcionou:
- 🎉 Parabéns! Seu jogo de AR está funcionando!
- 📸 Compartilhe com amigos
- 🚀 Customize e divirta-se!

---

**Problemas?** Verifique:
- ✓ Node.js instalado (`node --version`)
- ✓ Permissões de câmera
- ✓ HTTPS no celular
- ✓ WiFi ligado
