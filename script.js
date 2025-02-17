
const cardInsertedButton = document.getElementById('card-inserted');
if (cardInsertedButton) {
  cardInsertedButton.addEventListener('click', function () {
    this.style.animation = 'insertCard 1s forwards';
    window.location.href = 'pin.html'; // Instantly loads pin.html
  });
}




const accounts = [
  { username: "Ahmed", pin: "1234", balance: 5000 },
  { username: "Kajal", pin: "1111", balance: 3000 }
];

// Handle PIN Input
const pinInput = document.getElementById("pin-input");
const dots = document.querySelectorAll('.dot');

if (pinInput && dots) {
  // Prevent non-numeric input
  pinInput.addEventListener("keypress", function (e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });

  pinInput.addEventListener("input", function () {
    const pinLength = pinInput.value.length;

    // Update dots
    dots.forEach((dot, index) => {
      if (index < pinLength) {
        dot.textContent = '*'; // Show asterisk for entered numbers
        dot.style.opacity = '1';
      } else {
        dot.textContent = '•'; // Keep dots for unfilled spaces
        dot.style.opacity = '0.5';
      }
    });

    // Auto-submit when 4 digits are entered
    if (pinLength === 4) {
      const enteredPin = this.value;
      const user = accounts.find(acc => acc.pin === enteredPin);

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user)); // Store user data for transactions
        window.location.href = "menu.html"; // Redirect to transaction menu
      } else {
        window.location.href = "exit.html"; // Redirect to exit page
      }
    }
  });
}

// Update welcome message in menu.html
const welcomeMessage = document.getElementById('welcome-message');
if (welcomeMessage) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    welcomeMessage.textContent = `Welcome ${currentUser.username}`;
  }
}

function navigate(page) {
  window.location.href = page;
}