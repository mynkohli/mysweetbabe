function checkAnswer() {
  const correctAnswer = "chapri"; // <-- Change to your real answer
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();

  if (userAnswer === correctAnswer.toLowerCase()) {
    window.location.href = "main.html";
  } else {
    document.getElementById("error-message").innerText = "Oops! That's not the answer. Try again 🥺";
  }
}