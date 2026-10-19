// Day/Night Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops button from triggering the background sound
    document.body.classList.toggle('night-mode');
    themeBtn.textContent = document.body.classList.contains('night-mode') ? '☀️ Day Mode' : '🌙 Night Mode';
});

// Audio & Mute Toggle Fix
let isMuted = false;
const muteBtn = document.getElementById('mute-toggle');
const clickSound = new Audio('giggle.mp3.mp3'); 

muteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // CRITICAL: Stops the mute button from triggering the sound
    isMuted = !isMuted;
    muteBtn.textContent = isMuted ? '🔇 Unmute Audio' : '🔊 Mute Audio';
});

// Global Click Sound - FIXED
document.addEventListener('click', () => {
    if (!isMuted) {
        clickSound.currentTime = 0; // Rewinds the sound to the beginning instantly
        clickSound.play(); // Plays the sound directly
    }
});

// Floating Music Notes for the Lullaby Lab
const lullabyCard = document.querySelectorAll('.card')[0]; 
lullabyCard.addEventListener('mouseover', (e) => {
    if (Math.random() > 0.3) return; 
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = '🎵'; 
    note.style.left = (e.clientX - lullabyCard.getBoundingClientRect().left) + 'px';
    note.style.top = (e.clientY - lullabyCard.getBoundingClientRect().top) + 'px';
    lullabyCard.appendChild(note);
    setTimeout(() => note.remove(), 2000);
});

// Sparkle Cursor Trail
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});

// Floating Glowing Stars for the Nightlight Lantern
const lanternCard = document.querySelectorAll('.card')[1]; // Grabs the second card (Lantern)

lanternCard.addEventListener('mouseover', (e) => {
    // Ye control karega ki kitne stars niklenge (taki screen bhar na jaye)
    if (Math.random() > 0.35) return; 

    const star = document.createElement('div');
    star.className = 'lantern-star';
    star.textContent = '✨'; // Sparkle symbol
    
    // Position the star near the mouse cursor
    star.style.left = (e.clientX - lanternCard.getBoundingClientRect().left) + 'px';
    star.style.top = (e.clientY - lanternCard.getBoundingClientRect().top) + 'px';
    
    lanternCard.appendChild(star);
    
    // Remove the star after animation finishes
    setTimeout(() => star.remove(), 1500);
});