document.addEventListener("DOMContentLoaded", () => {
    // 1. Grab elements
    const startBtn = document.getElementById("startBtn");
    const splashScreen = document.getElementById("splashScreen");
    const onboarding1 = document.getElementById("onboarding1");

    // 2. Add click listener
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            console.log("Get Started Clicked!");
            
            // Hide Splash
            if (splashScreen) {
                splashScreen.classList.add("hidden");
            }
            
            // Show Onboarding 1
            if (onboarding1) {
                onboarding1.classList.remove("hidden");
            }
        });
    }
});
