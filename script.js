window.addEventListener("DOMContentLoaded", () => {
    // 1. Get screens
    const screens = document.querySelectorAll(".screen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");
    const ageVerificationScreen = document.getElementById("ageVerificationScreen");
    const outOfRangeScreen = document.getElementById("outOfRangeScreen");

    // 2. Get controls
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");
    const skipBtns = document.querySelectorAll(".skip-link");

    const birthYearSelect = document.getElementById("birthYear");
    const confirmAgeBtn = document.getElementById("confirmAgeBtn");
    const backToAgeBtn = document.getElementById("backToAgeBtn");
    const continueAnywayBtn = document.getElementById("continueAnywayBtn");

    // Helper: Switch active screen
    function goToScreen(targetScreen) {
        screens.forEach(s => s.classList.remove("active"));
        if (targetScreen) targetScreen.classList.add("active");
    }

    // Populate Birth Years dynamically (100 years down to current year)
    if (birthYearSelect) {
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= currentYear - 100; year--) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            birthYearSelect.appendChild(option);
        }
    }

    // Navigation Flows
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

    // AGE CHECK LOGIC
    if (confirmAgeBtn) {
        confirmAgeBtn.addEventListener("click", () => {
            const selectedYear = parseInt(birthYearSelect ? birthYearSelect.value : "0", 10);
            
            if (!selectedYear) {
                alert("Please select your birth year before continuing.");
                return;
            }

            // Core demographic: 2002 to 2009 (Ages 17-24 in 2026)
            if (selectedYear >= 2002 && selectedYear <= 2009) {
                alert(`Welcome! Birth year ${selectedYear} is in our core demographic. Setup complete!`);
            } else {
                // Out of target range (e.g. 1999) -> Show notice screen
                goToScreen(outOfRangeScreen);
            }
        });
    }

    // Back button on Out of Range screen
    if (backToAgeBtn) {
        backToAgeBtn.addEventListener("click", () => goToScreen(ageVerificationScreen));
    }

    // Continue Anyway button on Out of Range screen
    if (continueAnywayBtn) {
        continueAnywayBtn.addEventListener("click", () => {
            alert("Proceeding to main dashboard with general settings...");
        });
    }
});
