

document.getElementById('card-inserted').addEventListener('click', function () {
  this.style.animation = 'insertCard 1s forwards';
  window.location.href = 'pin.html'; // Instantly loads pin.html
});




const accounts = [
  { username: "User1", pin: "1234", balance: 5000 },
  { username: "User2", pin: "5678", balance: 3000 }
];

// Handle PIN Input
document.getElementById("pin-input").addEventListener("input", function () {
  if (this.value.length === 4) {
      const enteredPin = this.value;
      const user = accounts.find(acc => acc.pin === enteredPin);

      if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user)); // Store user data for transactions
          window.location.href = "menu.html"; // Redirect to transaction menu
      } else {
          alert("Incorrect PIN. Try again.");
          this.value = ""; // Clear input field
      }
  }
});
