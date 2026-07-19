// Populate day and year selectors
window.onload = function() {
  let daySelect = document.getElementById("day");
  for (let d=1; d<=31; d++) {
    daySelect.innerHTML += `<option value="${d}">${d}</option>`;
  }

  let yearSelect = document.getElementById("year");
  for (let y=1980; y<=2026; y++) {
    let selected = (y>=2002 && y<=2009) ? "selected" : "";
    yearSelect.innerHTML += `<option value="${y}" ${selected}>${y}</option>`;
  }
};

// App Store flow
function downloadApp() {
  let btn = document.getElementById("download-btn");
  btn.innerText = "Open";
  btn.onclick = function() {
    document.getElementById("store-screen").style.display = "none";
    document.getElementById("age-screen").style.display = "block";
  };
}

// Age verification
function verifyAge() {
  let year = parseInt(document.getElementById("year").value);
  let age = 2026 - year;
  if (age >= 17 && age <= 24) {
    document.getElementById("age-screen").style.display = "none";
    document.getElementById("hub-screen").style.display = "
