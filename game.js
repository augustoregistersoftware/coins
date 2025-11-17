// Pontuação
let coinScore = 0;
let chestScore = 0;
let userPosition = { x: 0, y: 0, z: 0 };
let lastSpawnTime = 0;
const spawnInterval = 2000; // Spawna nova moeda/baú a cada 2 segundos
const coins = [];
const chests = [];

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    console.log('🎮 Jogo de RA iniciado!');
    
    // Atualizar posição da câmera a cada frame
    setInterval(updateGameState, 100);
});

// Atualizar estado do jogo
function updateGameState() {
    const camera = document.querySelector('a-camera');
    if (camera) {
        userPosition = camera.getAttribute('position') || { x: 0, y: 0, z: 0 };
    }
    
    // Spawnar novos objetos
    if (Date.now() - lastSpawnTime > spawnInterval) {
        spawnRandomObject();
        lastSpawnTime = Date.now();
    }
    
    // Verificar colisões
    checkCollisions();
}

// Spawnar moeda ou baú aleatoriamente
function spawnRandomObject() {
    const container = Math.random() > 0.3 ? 'coins-container' : 'chests-container';
    const isChest = container === 'chests-container';
    
    // Posição aleatória ao redor do jogador
    const angle = Math.random() * Math.PI * 2;
    const distance = 3 + Math.random() * 5; // 3 a 8 metros
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    const y = Math.random() * 2 - 0.5;
    
    const entity = createObjectEntity(x, y, z, isChest);
    const containerElement = document.querySelector(`#${container}`);
    containerElement.appendChild(entity);
    
    // Registrar objeto
    const obj = {
        element: entity,
        position: { x, y, z },
        isChest: isChest,
        id: `${container}-${Date.now()}-${Math.random()}`
    };
    
    if (isChest) {
        chests.push(obj);
    } else {
        coins.push(obj);
    }
    
    console.log(`✨ Novo ${isChest ? 'baú' : 'moeda'} spawned em (${x.toFixed(1)}, ${y.toFixed(1)}, ${z.toFixed(1)})`);
}

// Criar elemento visual do objeto
function createObjectEntity(x, y, z, isChest) {
    const entity = document.createElement('a-entity');
    entity.setAttribute('position', `${x} ${y} ${z}`);
    
    if (isChest) {
        // Baú (cubo com cor marrom)
        entity.innerHTML = `
            <a-box width="0.6" height="0.6" depth="0.6" color="#8B4513"></a-box>
            <a-cone position="0 0.35 0" radius="0.25" height="0.4" color="#FFD700"></a-cone>
        `;
        entity.setAttribute('rotation', '0 45 0');
        // Rotação contínua
        entity.setAttribute('animation', 'property: rotation; to: 0 405 0; dur: 3000; loop: true; easing: linear');
    } else {
        // Moeda (cilindro dourado)
        entity.innerHTML = `
            <a-cylinder radius="0.25" height="0.1" color="#FFD700"></a-cylinder>
        `;
        // Rotação contínua
        entity.setAttribute('animation', 'property: rotation; to: 360 0 0; dur: 2000; loop: true; easing: linear');
    }
    
    return entity;
}

// Verificar colisões com objetos
function checkCollisions() {
    const collisionDistance = 0.5; // Distância para coletar
    
    // Verificar moedas
    coins.forEach((coin, index) => {
        const distance = calculateDistance(userPosition, coin.position);
        if (distance < collisionDistance) {
            coinScore++;
            coin.element.remove();
            coins.splice(index, 1);
            playSound('coin');
            updateUI();
            console.log(`💰 Moeda coletada! Total: ${coinScore}`);
        }
    });
    
    // Verificar baús
    chests.forEach((chest, index) => {
        const distance = calculateDistance(userPosition, chest.position);
        if (distance < collisionDistance) {
            chestScore += 5;
            coinScore += 5; // Baú vale 5 moedas
            chest.element.remove();
            chests.splice(index, 1);
            playSound('chest');
            updateUI();
            console.log(`🎁 Baú coletado! Total: ${chestScore}`);
        }
    });
}

// Calcular distância entre dois pontos
function calculateDistance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

// Tocar som (simulado)
function playSound(type) {
    // Usar Web Audio API para simples beep
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'coin') {
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'chest') {
        oscillator.frequency.value = 400;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    }
}

// Atualizar UI
function updateUI() {
    document.getElementById('score').textContent = coinScore;
    document.getElementById('chests').textContent = chestScore;
    document.getElementById('status').textContent = `Moedas ao redor: ${coins.length} | Baús: ${chests.length}`;
}
