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

/* ========================================= */
/* SPLASH -> ONBOARDING 1 */
/* ========================================= */

const splash = document.querySelector(".splash-screen");
const onboarding1 = document.getElementById("onboarding1");

document
    .getElementById("startBtn")
    .addEventListener("click", () => {

        splash.style.display = "none";

        onboarding1.classList.remove("hidden");

});

// Splash -> Onboarding 1
const startBtn = document.getElementById("startBtn");
const splashScreen = document.querySelector(".splash-screen");
const onboarding1 = document.getElementById("onboarding1");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        splashScreen.classList.add("hidden");
        onboarding1.classList.remove("hidden");
    });
}
