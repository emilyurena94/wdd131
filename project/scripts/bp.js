// ===== Juego 1: Adivina el miembro =====
function playGuess() {
  const members = ["jisoo", "jennie", "rose", "lisa"];
  const randomMember = members[Math.floor(Math.random() * members.length)];

  const userGuess = document.getElementById("userGuess").value.toLowerCase();
  const result = document.getElementById("resultGuess");

  if (userGuess.trim() === "") {
    result.textContent = "Please write a name 🤭";
    return;
  }

  if (!members.includes(userGuess)) {
    result.textContent = "That is not a BLACKPINK member 😅";
    return;
  }

  if (userGuess === randomMember) {
    result.textContent = `🎉 Correct! I was thinking of ${randomMember.toUpperCase()} 💖`;
  } else {
    result.textContent = `❌ Nope! I was thinking of ${randomMember.toUpperCase()}. Try again!`;
  }
}

// ===== Juego 2: True/False Quiz =====
const quizQuestions = [
  { question: "BLACKPINK debuted in 2016.", answer: true },
  { question: "Lisa is from South Korea.", answer: false },
  { question: "The group's fandom is called BLINK.", answer: true },
  { question: "Rosé was born in Thailand.", answer: false },
  { question: "Jennie was the first to debut as a soloist.", answer: true }
];
let currentQuiz = 0;
let score = 0;

function quizQuestion() {
  if (currentQuiz >= quizQuestions.length) {
    document.getElementById("quizQuestion").textContent = "Quiz finished!";
    document.getElementById("quizScore").textContent = `Final score: ${score} / ${quizQuestions.length}`;
    return;
  }
  document.getElementById("quizQuestion").textContent = quizQuestions[currentQuiz].question;
  document.getElementById("quizResult").textContent = "";
}

function checkAnswer() {
  const input = document.getElementById("quizAnswer").value.toLowerCase();
  if (input !== "true" && input !== "false") {
    document.getElementById("quizResult").textContent = "Type true or false!";
    return;
  }

  const userAnswer = input === "true";
  if (userAnswer === quizQuestions[currentQuiz].answer) {
    document.getElementById("quizResult").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("quizResult").textContent = "❌ Wrong!";
  }
  currentQuiz++;
  document.getElementById("quizScore").textContent = `Score: ${score} / ${quizQuestions.length}`;
}

// ===== Juego 3: Frases al azar =====
const quotes = [
  "Jisoo: 'Dream big and work hard!'",
  "Jennie: 'Confidence is key!'",
  "Rosé: 'Music is my life!'",
  "Lisa: 'Dance like nobody is watching!'",
  "BLACKPINK: 'We are BLACKPINK in your area!'"
];

function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").textContent = quote;
}

// ===== Carrusel funcional para discography / gallery =====
const carouselPositions = {}; // Guarda posición de cada carrusel

function moveCarousel(id, direction) {
  const track = document.getElementById(id);
  const container = track.parentElement;
  const card = track.querySelector('.song-card') || track.querySelector('.gallery-card') || track.querySelector('.member-card');
  const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight);

  if (!carouselPositions[id]) carouselPositions[id] = 0;

  carouselPositions[id] += direction * cardWidth;

  const maxScroll = track.scrollWidth - container.offsetWidth;
  if (carouselPositions[id] < 0) carouselPositions[id] = 0;
  if (carouselPositions[id] > maxScroll) carouselPositions[id] = maxScroll;

  track.style.transform = `translateX(-${carouselPositions[id]}px)`;
}
