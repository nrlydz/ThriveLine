/* =========================
   ThriveLine v1.0
   Splash Screen
========================= */

const startButton = document.getElementById("startBtn");

startButton.addEventListener("click", () => {

    // Button animation
    startButton.style.transform = "scale(0.97)";
    startButton.style.opacity = "0.9";

    setTimeout(() => {
        startButton.style.transform = "scale(1)";
        startButton.style.opacity = "1";
    }, 150);

    // Temporary message
    setTimeout(() => {
        alert("Welcome to ThriveLine! 🚀\n\nThe onboarding screen will be added next.");
    }, 180);

});
