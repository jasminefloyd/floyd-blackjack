var hasBlackjack = false
var isGameOver = false
var newLog = document.getElementById('bottomMessage')
var counterEl = document.getElementById('counter')
var mainAppContainerEl = document.getElementById('app-container-main')
var startAppContainerEl = document.getElementById('app-container-start')
var cardsEl = document.getElementById('cards-main')
var drawBtnEl = document.getElementById('draw-btn')
var firstCard
var secondCard
var cards = []
//mainAppContainerEl.style.display = `none`


function checkBlackjack(){
    if (sum === 21) {
        hasBlackjack = true
        startGame()
    } 
}


function dealCards(){
    firstCard = Math.floor(Math.random() * 11) + 1
    secondCard = Math.floor(Math.random() * 11) + 1
    cards.push(firstCard, secondCard)
    cardsEl.innerText = "Cards: " + cards
}

function drawNewCard(){
    var newCard = Math.floor(Math.random() * 11) + 1
    cards.push(newCard)
    counterEl.textContent = sum += newCard
    cardsEl.innerText = "Cards: " + cards
}


function hideGameBoard(){
    startAppContainerEl.style.display = `none`
    mainAppContainerEl.style.display = `block`
}

function playBlackJack(){
    var cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    counterEl.textContent = sum
    if (sum <= 20) {
        newLog.innerText = "Do you want to deal again?";
        drawBtnEl.style.display = `inline`
    } else if (sum === 21){
        newLog.innerHTML = "Woohoo! You've got Blackjack!";
        drawBtnEl.style.display = `none`
    } else {
        newLog.innerHTML = "Busted! You're out of the game!";
        isGameOver = true;
        drawBtnEl.style.display = `none`
    }
    

}

function startGame(){
    hideGameBoard()
    dealCards()
    playBlackJack()
}
