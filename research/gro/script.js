const rollBtn = document.getElementById("rollBtn");
const bankBtn = document.getElementById("bankBtn");
const newTurnBtn = document.getElementById("newTurnBtn");
const resetBtn = document.getElementById("resetBtn");

const rollDisplay = document.getElementById("rollDisplay");
const diceLeftEl = document.getElementById("diceLeft");
const onesCountEl = document.getElementById("onesCount");
const turnTotalEl = document.getElementById("turnTotal");
const bankedScoreEl = document.getElementById("bankedScore");
const historyRow = document.getElementById("historyRow");
const statusText = document.getElementById("statusText");

const WIN_SCORE = 50;
const winOverlay = document.getElementById("winOverlay");
const overlayNewGameBtn = document.getElementById("overlayNewGameBtn");

let diceLeft = 5;
let onesThisTurn = 0;
let turnTotal = 0;
let bankedScore = 0;
let turnActive = true;
let gameOver = false;
let gameOverAudio = null;


function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function renderRoll(rolls) {
  rollDisplay.textContent = rolls.length ? `🎲 ${rolls.join(" ")}` : "—";
}

function showWinOverlay() {
  winOverlay.classList.remove("hidden");
}

function hideWinOverlay() {
  winOverlay.classList.add("hidden");
}


function updateUI() {
  diceLeftEl.textContent = String(diceLeft);
  onesCountEl.textContent = String(onesThisTurn);
  turnTotalEl.textContent = String(turnTotal);
  bankedScoreEl.textContent = String(bankedScore);

  rollBtn.disabled = gameOver || !turnActive;
  bankBtn.disabled = gameOver || !turnActive || turnTotal < 1;
  newTurnBtn.disabled = gameOver;
}

function startNewTurn(message = "New turn started. Roll whenever you dare.") {
  diceLeft = 5;
  onesThisTurn = 0;
  turnTotal = 0;
  turnActive = true;

  renderRoll([]);
  statusText.textContent = message;
  updateUI();
}

// --- audio helpers ---
const diceSound = new Audio("../../assets/dice.mp3");
diceSound.preload = "auto";

function playSfx(audio) {
  const sfx = audio.cloneNode();
  sfx.volume = audio.volume;
  sfx.play().catch(() => {});
}

function playFile(path) {
  const a = new Audio(path);
  a.play().catch(() => {});
}

function endGame(message) {
  gameOver = true;
  turnActive = false;
  statusText.textContent = message;
  showWinOverlay();
  updateUI();
}

function scorePoints() {
  bankedScore += turnTotal;
    statusText.textContent = `Banked +${turnTotal}.`;
    if (bankedScore >= WIN_SCORE) {
      endGame(`You reached ${bankedScore} points! You have successfully summoned Cthulhu. Press New Game to attempt the ritual again.`);
      gameOverAudio = new Audio("../../assets/cthulhu.mp3");
      gameOverAudio.play().catch(() => {});
      return;
    }
    playFile("../../assets/cc.mp3");
    setTimeout(() => startNewTurn(), 600);
}

// --- end turn ---
function endTurn({ reason, bank = false }) {

  if(gameOver) return; 

  turnActive = false;
  updateUI();
  // if choose to hold
  if (bank) {
    scorePoints()

  } else {
    // busted / forced end
    turnTotal = 0;
    statusText.textContent = reason;
    playFile("../../assets/bruh.mp3");
    setTimeout(() => startNewTurn(), 2400);

  }

  updateUI();

  // auto-start next turn after a short beat
}

function resetAll() {
  if (gameOverAudio) {
    gameOverAudio.pause();
    gameOverAudio.currentTime = 0;
    gameOverAudio = null;
  }
  hideWinOverlay();
  bankedScore = 0;
  gameOver = false;
  startNewTurn("Reset complete.");
}

rollBtn.addEventListener("click", () => {
  if (!turnActive) return;

  if (diceLeft <= 0) {
    endTurn({ reason: "No dice left. Turn ends." });
    return;
  }

  playSfx(diceSound);

  const rolls = [];
  let onesThisRoll = 0;

  for (let i = 0; i < diceLeft; i++) {
    const r = rollDie();
    rolls.push(r);
    if (r === 1) onesThisRoll += 1;
  }

  const pointsThisRoll = diceLeft - onesThisRoll;

  onesThisTurn += onesThisRoll;
  diceLeft -= onesThisRoll;
  turnTotal += pointsThisRoll;

  renderRoll(rolls);

  if (onesThisTurn >= 3) {
    endTurn({ reason: "BUST: 3 ones this turn. Turn score = 0." });
    return;
  }

  if (diceLeft === 0) {
    endTurn({ reason: "All dice removed this turn (rolled ones). Turn score = 0." });
    return;
  }

  statusText.textContent = `Safe… for now. Dice left: ${diceLeft}. Ones this turn: ${onesThisTurn}.`;
  updateUI();
});

bankBtn.addEventListener("click", () => {
  if (!turnActive || turnTotal < 1) return;
  endTurn({ bank: true });
});

newTurnBtn.addEventListener("click", () => {
  if (turnTotal == 0) {
    startNewTurn("New turn started.")
  }
  else {
    scorePoints()
  }
});
resetBtn.addEventListener("click", resetAll);
overlayNewGameBtn.addEventListener("click", resetAll);
winOverlay.addEventListener("click", (e) => {
  if (e.target === winOverlay) resetAll();
});

// init
startNewTurn();
