document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.getElementById('background-container');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // Create falling hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-5vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = '1';
        heart.style.transition = 'opacity 1s ease-out';
        
        backgroundContainer.appendChild(heart);

        let position = -5;
        const fallSpeed = Math.random() * 2 + 1;
        
        const fallInterval = setInterval(() => {
            position += fallSpeed;
            heart.style.top = position + 'vh';

            // Fade out as it reaches the bottom
            if (position > 85) {
                heart.style.opacity = (100 - position) / 15;
            }

            if (position > 100) {
                clearInterval(fallInterval);
                heart.remove();
            }
        }, 20);
    }

    setInterval(createHeart, 300);

    // No button movement
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }

    // Yes button action
    yesBtn.addEventListener('click', () => {
        document.querySelector('.container').innerHTML = '<h1>I knew it,i love you too!😚</h1>';
    });
});