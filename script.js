document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        createFloatingHeart();
    }

    // Handle button click for heart rain animation
    const mainButton = document.querySelector('.main-button');
    if (mainButton) {
        mainButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation
            for (let i = 0; i < 50; i++) {
                createRainingHeart();
            }
            // Navigate to the love page after a short delay
            setTimeout(() => {
                window.location.href = mainButton.href;
            }, 500);
        });
    }

    // Animate sentences on the surprise page
    const sentences = document.querySelectorAll('.sentences p');
    if (sentences.length > 0) {
        sentences.forEach((sentence, index) => {
            sentence.style.animationDelay = `${index * 1.5 + 1}s`;
        });
    }

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 10}s`; // 10-15 seconds
        heart.style.opacity = Math.random();
        body.appendChild(heart);

        // Remove heart after animation to prevent clutter
        heart.addEventListener('animationend', () => {
            heart.remove();
            createFloatingHeart(); // Create a new one to keep the effect going
        });
    }

    function createRainingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animation = `rain ${Math.random() * 2 + 1}s linear forwards`;
        body.appendChild(heart);

        // Remove heart after it falls
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});

// Add a keyframe rule for the rain animation dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes rain {
    0% {
        transform: translateY(-10vh) rotate(-45deg);
        opacity: 1;
    }
    100% {
        transform: translateY(110vh) rotate(-45deg);
        opacity: 1;
    }
}`;
document.head.appendChild(styleSheet);