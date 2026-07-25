document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. DOM ELEMENTS
    // -------------------------------------------------------------
    const screens = document.querySelectorAll(".screen");
    const onboarding1 = document.getElementById("onboarding1");
    const onboarding2 = document.getElementById("onboarding2");
    const onboarding3 = document.getElementById("onboarding3");
    const ageVerificationScreen = document.getElementById("ageVerificationScreen");
    const outOfRangeScreen = document.getElementById("outOfRangeScreen");
    const splashScreen = document.getElementById("splashScreen");
    
    // Main App & Navigation Controls
    const bottomNav = document.getElementById("bottomNav");
    const navItems = document.querySelectorAll(".nav-item");

    // Side Drawer Controls
    const menuBtn = document.getElementById("menuBtn");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");

    // Buttons
    const startBtn = document.getElementById("startBtn");
    const nextBtn1 = document.getElementById("nextBtn1");
    const nextBtn2 = document.getElementById("nextBtn2");
    const finishBtn = document.getElementById("finishBtn");
    const skipBtns = document.querySelectorAll(".skip-link");

    const birthYearSelect = document.getElementById("birthYear");
    const confirmAgeBtn = document.getElementById("confirmAgeBtn");
    const backToAgeBtn = document.getElementById("backToAgeBtn");
    const logoutBtn = document.querySelector(".logout-btn");

    // -------------------------------------------------------------
    // 2. HELPER FUNCTIONS
    // -------------------------------------------------------------
    
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

    // Side Drawer Helpers
    function openDrawer() {
        if (sideDrawer) sideDrawer.classList.add("open");
        if (drawerOverlay) drawerOverlay.classList.add("active");
    }

    function closeDrawer() {
        if (sideDrawer) sideDrawer.classList.remove("open");
        if (drawerOverlay) drawerOverlay.classList.remove("active");
    }

    // -------------------------------------------------------------
    // 3. EVENT LISTENERS & SETUP
    // -------------------------------------------------------------

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

    // Age Check Logic (2002 to 2009 for Ages 17-24)
    if (confirmAgeBtn) {
        confirmAgeBtn.addEventListener("click", () => {
            const selectedYear = parseInt(birthYearSelect ? birthYearSelect.value : "0", 10);
            
            if (!selectedYear) {
                alert("Please select your birth year before continuing.");
                return;
            }

            if (selectedYear >= 2002 && selectedYear <= 2009) {
                enterApp("homeScreen");
            } else {
                goToScreen(outOfRangeScreen);
            }
        });
    }

    // Back button on Restricted Screen
    if (backToAgeBtn) {
        backToAgeBtn.addEventListener("click", () => goToScreen(ageVerificationScreen));
    }

    // Bottom Navigation Switching
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.dataset.target;
            enterApp(targetId);
        });
    });

    // Side Drawer Listeners
    if (menuBtn) menuBtn.addEventListener("click", openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

    // Log Out Listener
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            closeDrawer();
            goToScreen(splashScreen, false);

            // Reset bottom nav tab highlighting back to 'Safety' (Home)
            navItems.forEach(item => item.classList.remove("active"));
            const homeNavItem = document.querySelector('.nav-item[data-target="homeScreen"]');
            if (homeNavItem) homeNavItem.classList.add("active");
        });
    }
});
