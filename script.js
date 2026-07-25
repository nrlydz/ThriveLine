window.addEventListener("DOMContentLoaded", () => {
    // 1. Grab all screens
    const screens = document.querySelectorAll(".screen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");

    // 2. Grab standard buttons
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");

    // 3. Helper function to switch active screen
    function goToScreen(targetScreen) {
        screens.forEach(s => s.classList.remove("active"));
        if (targetScreen) {
            targetScreen.classList.add("active");
        }
    }

    // Next button flows
    if (startBtn) startBtn.addEventListener("click", () => goToScreen(onboarding1));
    if (nextBtn1) nextBtn1.addEventListener("click", () => goToScreen(onboarding2));
    if (nextBtn2) nextBtn2.addEventListener("click", () => goToScreen(onboarding3));

    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            alert("Onboarding Complete!");
        });
    }

    // 4. FIX: Handle ALL Skip buttons directly
    const skipButtons = document.querySelectorAll(".skip-link");
    skipButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Prevents default button action
            goToScreen(onboarding3); // Jumps directly to Screen 3
        });
    });
});
