window.addEventListener("DOMContentLoaded", () => {
    // 1. Get screens
    const screens = document.querySelectorAll(".screen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");
    const ageVerificationScreen = document.getElementById("ageVerificationScreen");

    // 2. Get controls
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");
    const skipBtns = document.querySelectorAll(".skip-link");

    const birthYearSelect = document.getElementById("birthYear");
    const confirmAgeBtn = document.getElementById("confirmAgeBtn");

    // Helper: Switch active screen
    function goToScreen(targetScreen) {
        screens.forEach(s => s.classList.remove("active"));
        if (targetScreen) targetScreen.classList.add("active");
    }

    // Populate Birth Years dynamically
    if (birthYearSelect) {
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= currentYear - 100; year--) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            birthYearSelect.appendChild(option);
        }
    }

    // Flow listeners
    if (startBtn) startBtn.addEventListener("click", () => goToScreen(onboarding1));
    if (nextBtn1) nextBtn1.addEventListener("click", () => goToScreen(onboarding2));
    if (nextBtn2) nextBtn2.addEventListener("click", () => goToScreen(onboarding3));

    // Finish Onboarding 3 -> Go to Age Verification
    if (finishBtn) finishBtn.addEventListener("click", () => goToScreen(ageVerificationScreen));

    // Skip Buttons -> Go straight to Age Verification
    skipBtns.forEach(skipBtn => {
        skipBtn.addEventListener("click", (e) => {
            e.preventDefault();
            goToScreen(ageVerificationScreen);
        });
    });

    // Confirm Age Button Action
    if (confirmAgeBtn) {
        confirmAgeBtn.addEventListener("click", () => {
            const selectedYear = birthYearSelect ? birthYearSelect.value : "";
            if (!selectedYear) {
                alert("Please select your birth year before continuing.");
                return;
            }
            alert(`Age verified for birth year ${selectedYear}! Welcome aboard.`);
        });
    }
});
