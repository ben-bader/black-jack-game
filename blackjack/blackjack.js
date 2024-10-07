let player = {
  name : "bader",
  Chips : 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

let credit = document.getElementById("credit-el")
credit.textContent = player.name+" : $ "+ player.Chips 
function getRandomcard(){
    let randomNumber = Math.floor(Math.random() *13 +1)
    if(randomNumber ===1){
      return 11
    }
    else if(randomNumber >10 ){
      return 10
    }
    else
{    return randomNumber
}}
function startGame() {
  let card1 = getRandomcard();
  let card2 = getRandomcard();
  cards  = [card1,card2];
  sum    = card1+ card1;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "CARDS:";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += +cards[i] + " ";
  }
  sumEl.textContent = "SUM: " + sum;
  if (sum <= 20) {
    message = " draw a new card";
  } else if (sum === 21) {
    message = "balck jack!!!!";
    hasBlackjack = true;
  } else {
    message = "you've lost";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  
  if (isAlive === true && hasBlackJack === false)
  {let card = getRandomcard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
