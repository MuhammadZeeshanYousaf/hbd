document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope-wrapper');
    const birthdayContent = document.querySelector('.birthday-content');
    const celebrateBtn = document.querySelector('.celebrate-btn');
    const nameElement = document.querySelector('.name');
    
    // Create background sparkles
    createSparkles();
    
    // Function to create sparkles
    function createSparkles() {
        const sparklesContainer = document.getElementById('sparkles-container');
        const sparkleCount = 30;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            // Random position
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 5 + 2;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            // Random animation delay
            sparkle.style.animationDelay = `${Math.random() * 4}s`;
            
            // Random color
            const colors = ['#ff80ab', '#ea80fc', '#8c9eff', '#80d8ff', '#ffd180'];
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            sparklesContainer.appendChild(sparkle);
        }
    }
    
    // Function to update name when provided
    function updateName(name) {
        if (name && name.trim() !== '') {
            nameElement.textContent = name;
        }
    }
    
    // Envelope click event with improved animation
    envelope.addEventListener('click', () => {
        const envelopeElement = envelope.querySelector('.envelope');
        envelopeElement.classList.add('envelope-open');
        
        // Add small confetti burst on envelope open
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.5, x: 0.5 },
            colors: ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a6c1ee', '#ff4081', '#ea80fc', '#8c9eff'],
            disableForReducedMotion: true
        });
        
        // Hide envelope and show birthday content after animation
        setTimeout(() => {
            envelope.style.display = 'none';
            birthdayContent.classList.remove('hidden');
            
            // Add entrance animations to elements
            animateElements();
        }, 1000);
    });
    
    // Function to animate elements with improved sequence
    function animateElements() {
        const elements = [
            document.querySelector('.cake-container'),
            document.querySelector('.birthday-heading'),
            document.querySelector('.birthday-text'),
            document.querySelector('.signature'),
            celebrateBtn
        ];
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100);
            }, index * 300);
        });
    }
    
    // Celebrate button click event
    celebrateBtn.addEventListener('click', () => {
        launchConfetti();
        playBirthdaySong();
        addFloatingHearts();
        blowOutCandle();
    });
    
    // Function to launch confetti with improved colors and patterns
    function launchConfetti() {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }
        
        // Launch multiple confetti bursts
        (function frame() {
            const timeLeft = animationEnd - Date.now();
            
            if (timeLeft <= 0) {
                return;
            }
            
            const particleCount = 50;
            
            // Launch confetti from sides
            confetti({
                particleCount,
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                origin: { x: 0 },
                colors: ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a6c1ee', '#ff4081', '#ea80fc', '#8c9eff'],
                disableForReducedMotion: true
            });
            
            confetti({
                particleCount,
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                origin: { x: 1 },
                colors: ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a6c1ee', '#ff4081', '#ea80fc', '#8c9eff'],
                disableForReducedMotion: true
            });
            
            // Launch confetti from bottom
            if (timeLeft > duration / 2) {
                confetti({
                    particleCount: 30,
                    angle: randomInRange(80, 100),
                    spread: randomInRange(50, 100),
                    origin: { y: 1 },
                    colors: ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a6c1ee', '#ff4081', '#ea80fc', '#8c9eff'],
                    disableForReducedMotion: true
                });
            }
            
            requestAnimationFrame(frame);
        }());
        
        // Add a final burst after the animation
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a6c1ee', '#ff4081', '#ea80fc', '#8c9eff'],
                disableForReducedMotion: true
            });
        }, duration);
    }
    
    // Function to add floating hearts with improved animation
    function addFloatingHearts() {
        const container = document.querySelector('.container');
        const heartCount = 20;
        const heartTypes = ['❤️', '💖', '💕', '💗', '💓', '💘'];
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
            heart.className = 'floating-heart';
            heart.style.cssText = `
                position: fixed;
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                opacity: ${Math.random() * 0.5 + 0.5};
                animation: float ${Math.random() * 6 + 4}s linear forwards;
                z-index: 999;
            `;
            
            document.body.appendChild(heart);
            
            // Remove hearts after animation
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
        
        // Add floating heart animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Function to play birthday song
    function playBirthdaySong() {
        // Create audio element for birthday song
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.volume = 0.5;
        audio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    }
    
    // Function to make the cake's candle blow out
    function blowOutCandle() {
        const flame = document.querySelector('.flame');
        
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.boxShadow = 'none';
            
            // Add multiple smoke particles for better effect
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSmokeParticle();
                }, i * 200);
            }
        }, 500);
    }
    
    // Function to create smoke particles
    function createSmokeParticle() {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        
        // Randomize smoke properties slightly
        const size = Math.random() * 5 + 8;
        const xOffset = Math.random() * 10 - 5;
        
        smoke.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(200, 200, 200, 0.5);
            border-radius: 50%;
            top: -25px;
            left: calc(50% + ${xOffset}px);
            transform: translateX(-50%);
            animation: rise ${Math.random() * 1 + 1.5}s linear forwards;
            z-index: 1;
        `;
        
        document.querySelector('.candle').appendChild(smoke);
        
        // Add smoke animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rise {
                0% {
                    opacity: 0.7;
                    transform: translateX(-50%) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateX(-50%) scale(5) translateY(-100px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Check for mobile devices and adjust animations if needed
    function checkMobile() {
        if (window.innerWidth <= 768) {
            // Reduce animation complexity on mobile
            const sparkles = document.querySelectorAll('.sparkle');
            sparkles.forEach((sparkle, index) => {
                if (index % 2 === 0) {
                    sparkle.style.display = 'none';
                }
            });
        }
    }
    
    // Run mobile check
    checkMobile();
    
    // Re-check on window resize
    window.addEventListener('resize', checkMobile);
}); 