window.addEventListener("DOMContentLoaded", () => {
    // 1. Get screens
    const screens = document.querySelectorAll(".screen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");
    const ageVerificationScreen = document.getElementById("ageVerificationScreen");
    const outOfRangeScreen = document.getElementById("outOfRangeScreen");
    
    // Main App & Bottom Nav Controls
    const bottomNav = document.getElementById("bottomNav");
    const navItems = document.querySelectorAll(".nav-item");

    // Buttons
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");
    const skipBtns = document.querySelectorAll(".skip-link");

    const birthYearSelect = document.getElementById("birthYear");
    const confirmAgeBtn = document.getElementById("confirmAgeBtn");
    const backToAgeBtn = document.getElementById("backToAgeBtn");

    // Helper: Switch Screen and Control Bottom Nav
    function goToScreen(targetScreen, showNav = false) {
        screens.forEach(s => s.classList.remove("active"));
        if (targetScreen) {
            targetScreen.classList.add("active");
        }

        if (bottomNav) {
            if (showNav) {
                bottomNav.classList.remove("hidden");
            } else {
                bottomNav.classList.add("hidden");
            }
        }
    }

    // Helper: Enter Main App View
    function enterApp(targetId = "homeScreen") {
        const targetScreen = document.getElementById(targetId);
        goToScreen(targetScreen, true);
        
        navItems.forEach(item => {
            if (item.dataset.target === targetId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Dynamic Birth Years Dropdown (2026 down to 1980)
    if (birthYearSelect) {
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 1980; year--) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            birthYearSelect.appendChild(option);
        }
    }

    // Onboarding Navigation
    if (startBtn) startBtn.addEventListener("click", () => goToScreen(onboarding1));
    if (nextBtn1) nextBtn1.addEventListener("click", () => goToScreen(onboarding2));
    if (nextBtn2) nextBtn2.addEventListener("click", () => goToScreen(onboarding3));
    if (finishBtn) finishBtn.addEventListener("click", () => goToScreen(ageVerificationScreen));

    // Skip Buttons in Onboarding -> Go straight to Age Verification
    skipBtns.forEach(skipBtn => {
        skipBtn.addEventListener("click", (e) => {
            e.preventDefault();
            goToScreen(ageVerificationScreen);
        });
    });

    // STRICT AGE CHECK LOGIC
    if (confirmAgeBtn) {
        confirmAgeBtn.addEventListener("click", () => {
            const selectedYear = parseInt(birthYearSelect ? birthYearSelect.value : "0", 10);
            
            if (!selectedYear) {
                alert("Please select your birth year before continuing.");
                return;
            }

            // Strictly allowed: Born 2002 to 2009 (Ages 17-24 in 2026)
            if (selectedYear >= 2002 && selectedYear <= 2009) {
                enterApp("homeScreen");
            } else {
                // Out of range -> Restricted Access
                goToScreen(outOfRangeScreen);
            }
        });
    }

    // Back button on Restricted Screen -> Returns to Age Verification
    if (backToAgeBtn) {
        backToAgeBtn.addEventListener("click", () => goToScreen(ageVerificationScreen));
    }

    // Bottom Navigation Bar Switching
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.dataset.target;
            enterApp(targetId);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");

    function openDrawer() {
        sideDrawer.classList.add("open");
        drawerOverlay.classList.add("active");
    }

    function closeDrawer() {
        sideDrawer.classList.remove("open");
        drawerOverlay.classList.remove("active");
    }

    if (menuBtn) menuBtn.addEventListener("click", openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
});

// Log Out Functionality
const logoutBtn = document.querySelector('.logout-btn');
const bottomNav = document.getElementById('bottomNav');
const allScreens = document.querySelectorAll('.screen');

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Hide all screens
        allScreens.forEach(screen => screen.classList.remove('active'));
        
        // Show splash screen
        const splashScreen = document.getElementById('splashScreen');
        if (splashScreen) {
            splashScreen.classList.add('active');
        }
        
        // Hide the bottom navigation bar on splash screen
        if (bottomNav) {
            bottomNav.classList.add('hidden');
        }
    });
}
