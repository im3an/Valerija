function startQuestions() {
  document.getElementById("questions").style.display = "block";
}

function answerYes() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "HEYYYYYY 🎉🎉";
  document.getElementById("message").style.display = "block";
  document.getElementById("messageText").innerText = "Ich gratuliere, sie werden denn besten date ihres leben haben 🥂🍾";
  document.getElementById("messageText2").innerText = "Drücken Sie unten auf San und schreiben Sie mir eine Nachricht :)";
  showConfetti()
}

// Function to show confetti
function showConfetti() {
  const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
      confetti.clear();
  }, 5000);
}

// Function to make the "No" button bounce off and become unclickable
document.getElementById('noBtn').addEventListener('click', function(e) {
  this.style.position = 'absolute';
  this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
  this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
  e.stopPropagation(); // Prevent the click event from propagating further
  return false; // Prevent the default behavior of the button click
});

