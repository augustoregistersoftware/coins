// Game State
let score = 0;
const scoreElement = document.getElementById('score');
const coinContainer = document.getElementById('coin-container');
const resetBtn = document.getElementById('reset-btn');

// Sound Effects (Simple synthesized beeps using Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playCollectSound() {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
    oscillator.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1); // A6

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

// Register A-Frame Component for Coin
AFRAME.registerComponent('coin', {
    init: function () {
        const el = this.el;
        
        // Visuals
        el.setAttribute('geometry', {
            primitive: 'cylinder',
            radius: 0.2,
            height: 0.05,
            segmentsRadial: 32
        });
        el.setAttribute('material', {
            color: '#FFD700',
            metalness: 0.8,
            roughness: 0.2
        });
        el.setAttribute('rotation', '90 0 0'); // Face the camera initially

        // Animation (Spinning)
        el.setAttribute('animation', {
            property: 'rotation',
            to: '90 360 0',
            loop: true,
            dur: 3000,
            easing: 'linear'
        });

        // Interaction
        el.addEventListener('click', () => {
            this.collect();
        });
        
        // Also listen for touch events if raycaster is configured for it
        el.addEventListener('touchstart', () => {
            this.collect();
        });
    },

    collect: function () {
        // Prevent double collection
        if (this.el.isCollected) return;
        this.el.isCollected = true;

        // Visual Effect (Scale up and fade out)
        this.el.setAttribute('animation__collect', {
            property: 'scale',
            to: '2 2 2',
            dur: 200,
            easing: 'easeOutQuad'
        });
        this.el.setAttribute('animation__fade', {
            property: 'material.opacity',
            to: '0',
            dur: 200,
            easing: 'easeOutQuad'
        });

        // Sound
        playCollectSound();

        // Logic
        score++;
        updateScore();

        // Remove after animation
        setTimeout(() => {
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }, 200);
    }
});

// Helper: Update Score UI
function updateScore() {
    scoreElement.textContent = score;
}

// Helper: Spawn a Coin at random position
function spawnCoin() {
    const coin = document.createElement('a-entity');
    coin.setAttribute('coin', '');

    // Random position in front of camera
    // x: -2 to 2
    // y: -1 to 1 (relative to camera height, or fixed height)
    // z: -2 to -5 (distance from camera)
    
    const x = (Math.random() * 4) - 2;
    const y = (Math.random() * 2) - 0.5; // Slightly above and below eye level
    const z = -(Math.random() * 3) - 2; // 2 to 5 meters away

    coin.setAttribute('position', `${x} ${y} ${z}`);
    
    // Ensure it faces roughly towards the camera (0,0,0 is assumed camera start)
    // The coin component sets initial rotation, but we might want it to face the user.
    // For simplicity, the spinning animation handles visibility well.

    coinContainer.appendChild(coin);
}

// Game Loop: Spawn coins periodically
setInterval(() => {
    // Limit max coins to prevent performance issues
    if (document.querySelectorAll('[coin]').length < 10) {
        spawnCoin();
    }
}, 3000);

// Reset Logic
resetBtn.addEventListener('click', () => {
    score = 0;
    updateScore();
    // Remove all existing coins
    const coins = document.querySelectorAll('[coin]');
    coins.forEach(c => c.parentNode.removeChild(c));
});

// Initial Spawn
spawnCoin();
spawnCoin();
spawnCoin();
