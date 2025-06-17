// js/gamified-home.js

document.addEventListener('DOMContentLoaded', () => {
    // XP bar animation
    const xpBar = document.getElementById('xp-bar-inner');
    if (xpBar) {
        setTimeout(() => {
            xpBar.style.width = xpBar.dataset.xp + '%';
        }, 400);
    }

    // Play sound on button click (optional, if you want to add a sound file)
    const btn = document.getElementById('start-quest-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            // Example: play a sound or animate
        });
    }
});
