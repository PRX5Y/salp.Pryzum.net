const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            activateKonamiCode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiCode() {
    const membersLoginDiv = document.getElementById('Members login');
    const hiddenLogin = document.getElementById('hidden-login');

    // Fade out the content in the Members login div
    membersLoginDiv.style.transition = 'opacity 1s';
    membersLoginDiv.style.opacity = '0';

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Hide the existing content
        Array.from(membersLoginDiv.children).forEach(child => {
            if (child !== hiddenLogin) {
                child.style.display = 'none';
            }
        });

        // Show the hidden login screen and trigger the fade-in effect
        hiddenLogin.style.display = 'flex';
        setTimeout(() => {
            hiddenLogin.classList.add('show');
        }, 10);
    }, 1000); // Match this duration with the fade-out transition duration
}