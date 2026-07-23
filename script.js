window.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const splashScreen = document.getElementById("splashScreen");
    const onboarding1 = document.getElementById("onboarding1");

    if (startBtn) {
        startBtn.addEventListener("click", () => {
            // Hide Splash
            splashScreen.style.display = "none";
            
            // Show Onboarding Screen 1
            onboarding1.style.display = "flex";
        });
    }
});
