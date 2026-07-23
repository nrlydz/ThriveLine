window.addEventListener("DOMContentLoaded", () => {
    // Screens
    const splashScreen = document.getElementById("splashScreen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");

    // Buttons
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");

    const skipBtns = document.querySelectorAll(".skip-link");

    // Splash -> Screen 1
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            splashScreen.style.display = "none";
            onboarding1.style.display = "flex";
        });
    }

    // Screen 1 -> Screen 2
    if (nextBtn1) {
        nextBtn1.addEventListener("click", () => {
            onboarding1.style.display = "none";
            onboarding2.style.display = "flex";
        });
    }

    // Screen 2 -> Screen 3
    if (nextBtn2) {
        nextBtn2.addEventListener("click", () => {
            onboarding2.style.display = "none";
            onboarding3.style.display = "flex";
        });
    }

    // Finish -> Complete Onboarding
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            alert("Onboarding complete! Heading to Home Screen...");
        });
    }

    // Skip Buttons
    skipBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Skipped to Home Screen!");
        });
    });
});
