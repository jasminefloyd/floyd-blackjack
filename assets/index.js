let firstCard
let secondCard
let sum
let cards = [ ]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("bottomMessage")
let sumEl = document.getElementById("counter")
let cardsEl = document.getElementById("cards-main")
let drawBtnEl = document.getElementById('draw-btn')
let dealBtnEl = document.getElementById('deal-btn')
let mainAppContainerEl = document.getElementById('app-container-main')
let startAppContainerEl = document.getElementById('app-container-start')
mainAppContainerEl.style.display = `none`

function renderGame() {
    shuffleCards()
    checkBlackJack()
}

function startGame() {
    hideGameBoard()
    renderGame()
}

function hideGameBoard(){
    startAppContainerEl.style.display = `none`
    mainAppContainerEl.style.display = `block`
 }

 function shuffleCards() {
    firstCard = Math.floor(Math.random() * 11) + 1
    secondCard = Math.floor(Math.random() * 11) + 1
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]  
    sumEl.textContent = sum
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
 }


function checkBlackJack() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        drawBtnEl.style.display = `inline`
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        drawBtnEl.style.display = `none`
    } else {
        message = "You're out of the game!"
        isAlive = false
        drawBtnEl.style.display = `none`
    }
    messageEl.textContent = message
}



function newCard() {
    let card = Math.floor(Math.random() * 11) + 1
    sum += card
    sumEl.textContent = sum
    cards.push(card)
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }   
    checkBlackJack()     
}
    