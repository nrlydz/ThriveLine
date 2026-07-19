function goToHub() {
  document.getElementById("age-screen").style.display = "none";
  document.getElementById("hub-screen").style.display = "block";
}

function showAlert() {
  document.getElementById("alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("alert").style.display = "none";
}

function goToWallet() {
  document.getElementById("hub-screen").style.display = "none";
  document.getElementById("wallet-screen").style.display = "block";
}

function goBackToHub() {
  document.getElementById("wallet-screen").style.display = "none";
  document.getElementById("hub-screen").style.display = "block";
}
