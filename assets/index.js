//Global Variables
let firstCard
let secondCard
let sum
let cards = [ ]
let hasBlackJack = false
let isAlive = true
let message = ""

//DOM Elements
let playerEl = document.getElementById("playerMessage")
let chipsEl = document.getElementById("chipsMessage")
let messageEl = document.getElementById("bottomMessage")
let sumEl = document.getElementById("counter")
let cardsEl = document.getElementById("cards-main")
let drawBtnEl = document.getElementById('draw-btn')
let dealBtnEl = document.getElementById('deal-btn')
let mainAppContainerEl = document.getElementById('app-container-main')
let startAppContainerEl = document.getElementById('app-container-start')
mainAppContainerEl.style.display = `none`

//Objects
var player = {
    name: "Jasmine",
    chips: 300,
    hand: function dealCards() {
        firstCard = Math.floor(Math.random() * 11) + 1
        secondCard = Math.floor(Math.random() * 11) + 1
        cards = [firstCard, secondCard]
        sum = cards[0] + cards[1]  
        sumEl.textContent = sum
        cardsEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`
    },
    hit: function newCard() {
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
}


//Functions
function renderGame() {
    player.hand()
    checkBlackJack()
}

function startGame() {
    playerEl.textContent = "Player: " + player.name
    chipsEl.textContent = "Chips: $" + player.chips
    hideGameBoard()
    renderGame()
}

function hideGameBoard(){
    startAppContainerEl.style.display = `none`
    mainAppContainerEl.style.display = `block`
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




    