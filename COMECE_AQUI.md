# 🎯 GUIA RÁPIDO - COMECE AQUI!

## ⚡ 5 MINUTOS PARA JOGAR

### 📍 Windows
```
1. Duplo clique em: start.bat
2. Escolha: 1 (Desenvolvimento)
3. Abra no navegador: http://localhost:3000
4. Pronto! Jogar agora 🎮
```

### 📍 Mac/Linux
```
1. Terminal: ./start.sh
2. Escolha: 1 (Desenvolvimento)
3. Abra no navegador: http://localhost:3000
4. Pronto! Jogar agora 🎮
```

### 📍 Manual
```bash
npm install
npm run dev
# Abra http://localhost:3000
```

---

## 🎮 COMO JOGAR

```
1. Clique em "🚀 Começar a Caçar"
   ↓
2. Permita acesso à câmera
   ↓
3. Espere aparecer "Iniciando câmera..."
   ↓
4. Procure por moedas 💰 e baús 🎁
   ↓
5. Ande ao seu redor para encontrar
   ↓
6. Coloque no centro da tela = Coleta!
   ↓
7. Ganhe pontos 📊
```

---

## 🎯 OBJETIVOS

- **Moedas 💰** = 10 pontos
- **Baús 🎁** = 50 pontos
- **Meta**: Coletar o máximo!

---

## 📱 NO CELULAR

### ⚠️ Precisa de HTTPS!

**Opção fácil: ngrok**
```bash
# Terminal 1: Código
npm run dev

# Terminal 2: HTTPS
ngrok http 3000

# Copia a URL do ngrok (ex: https://xyz.ngrok.io)
# Acessa no celular
```

**Opção 2: Mesmo WiFi**
```bash
npm run dev

# No celular acessa:
http://seu-ip-pc:3000

# ⚠️ Pode não abrir câmera em HTTP
```

---

## 🐛 PROBLEMAS COMUNS

### ❌ "Câmera não abre"
**Solução**:
```
1. Verifique permissões do navegador
2. Tente Chrome (funciona melhor)
3. No celular use HTTPS
4. Recarregue a página
```

### ❌ "Sem som"
**Solução**:
```
1. Aumente volume do navegador
2. Aumentar volume do PC/celular
3. Alguns navegadores requerem interação
4. Verifique console (F12)
```

### ❌ "Está muito lento"
**Solução**:
```
1. WiFi mais forte
2. Iluminação melhor
3. Navegador mais novo
4. Menos abas abertas
5. Feche outras aplicações
```

### ❌ "Erro ao iniciar jogo"
**Solução**:
```
1. Recarregue a página
2. Verifique console (F12)
3. Verifique se câmera não está em uso
4. Permita permissão novamente
5. Limpe cache (Ctrl+Shift+Del)
```

---

## 🔧 CUSTOMIZAÇÕES FÁCEIS

### Mudar cores
Abra `src/App.tsx` e procure por:
```tsx
// Linha ~130
className="text-5xl font-bold mb-4 text-transparent bg-clip-text 
           bg-gradient-to-r from-purple-500 to-cyan-400"
```
Mude `purple-500` e `cyan-400` para suas cores favoritas.

### Mudar textos
Abra `src/App.tsx` e procure por:
```tsx
// Linha ~130
<h1>Caçador de Tesouro</h1>  // Mude isso!
```

### Trocar sons
Substitua os arquivos em:
```
public/sounds/
├── ambient.mp3      (Música de fundo)
├── coin.wav         (Som de moeda)
└── chest.wav        (Som de baú)
```

---

## 📊 VERIFICAÇÃO

Tudo funcionando? ✓

- [ ] Câmera abre
- [ ] Carregando aparece
- [ ] Moedas e baús aparecem
- [ ] Consegue coletar
- [ ] Som toca (se permitido)
- [ ] Pontuação aumenta
- [ ] Vibração funciona (mobile)

Se tudo marcado ✅ - Perfeito! Jogue!

---

## 🚀 DEPLOY (Produção)

### Build
```bash
npm run build
```

### Resultado
```
dist/  <- Seu jogo pronto!
```

### Hospedar
- GitHub Pages
- Vercel
- Netlify
- AWS
- Google Cloud

---

## 💡 DICAS DE JOGO

1. **Boa iluminação** = Melhor AR
2. **WiFi forte** = Sem lag
3. **Ande devagar** = Mais fácil encontrar
4. **Perto de janelas** = Luz natural
5. **Celular horizontal** = Melhor vista

---

## 📞 SUPORTE

### Abra o console (F12)
Procure por mensagens vermelhas:
- `❌` = Erro crítico
- `⚠️` = Aviso
- `✅` = Sucesso

### Copie o erro e procure no Google

---

## 🎉 SUCESSO!

Se chegou aqui, seu jogo está funcionando! 🎮

**Compartilhe** com amigos e se divirta! 🚀

---

## 📚 DOCUMENTAÇÃO COMPLETA

Quer aprender mais?

- `RESUMO.md` - Visão geral
- `ESTRUTURA.md` - Arquivos do projeto
- `IMPLEMENTACOES.md` - Mudanças técnicas
- `README-NOVO.md` - Documentação completa

---

## ✨ VERSÃO

```
AR Treasure Hunt v2.0
React 19 + TypeScript + Vite
A-Frame + AR.js
17 de Novembro de 2025
```

---

**Pronto? Vá jogar! 🎮🚀**
