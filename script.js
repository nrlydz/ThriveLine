window.addEventListener("DOMContentLoaded", () => {
    const screens = document.querySelectorAll(".screen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");

    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");

    function goToScreen(targetScreen) {
        screens.forEach(s => s.classList.remove("active"));
        if (targetScreen) targetScreen.classList.add("active");
    }

    if (startBtn) startBtn.addEventListener("click", () => goToScreen(onboarding1));
    if (nextBtn1) nextBtn1.addEventListener("click", () => goToScreen(onboarding2));
    if (nextBtn2) nextBtn2.addEventListener("click", () => goToScreen(onboarding3));

    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            alert("Onboarding complete!");
        });
    }
});
