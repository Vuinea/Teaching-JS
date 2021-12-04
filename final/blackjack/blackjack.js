const drawBtn = document.querySelector("#draw-card");

const startOverBtn = document.querySelector("#start-over")

const cardsNumDiv = document.querySelector("#card-nums");

const scoreCount = document.querySelector("#score");

const messageP = document.querySelector("#message");

function drawCard() {
  let card = Math.floor(Math.random() * 11) + 1;
  cardsNumDiv.innerHTML += `<p class='card'>${card}</p>`
}




function calculateScore() {
  let score = 0;
  let cards = document.getElementsByClassName("card");
  let currentCardNum;
  for (let i = 0; i < cards.length; i++) {
    currentCardNum = parseInt(cards[i].textContent);
    score += currentCardNum;
  }
  scoreCount.textContent = score;

  const gameFinished = () => {
    drawBtn.disabled = true; 
    startOverBtn.classList.remove("hidden");
  }

  if (score > 21) {
    messageP.textContent = "You Lose!";
    gameFinished();
  } else if (score === 21) {
    messageP.textContent = "BlackJack!!!";
    gameFinished();
  } else if (score >= 17) {
    messageP.textContent = "Drawing a card is risky";
  } else if (score < 17) {
    messageP.textContent = "Draw A Card";
  }
}


function startOver() {  
  messageP.textContent = "Draw A Card";
  cardsNumDiv.innerHTML = ""
  drawBtn.disabled = false;
  startOverBtn.classList.add("hidden");
  scoreCount.textContent = "0";
}

function playerTurn() {
  drawCard();
  calculateScore();
}


drawBtn.onclick = () => {
  playerTurn();
};

startOverBtn.onclick = () => {
  startOver();
}

