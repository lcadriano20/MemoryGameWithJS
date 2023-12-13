// Flip the card when u clicked 

const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard,secondCard; 
let lockBoard = false;

cards.forEach((card)=>{
    card.addEventListener('click',flipTheCard)
})

function shuffleCards() {
    cards.forEach(card => {
        let randomCard = Math.floor(Math.random() * 12)
        card.style.order = randomCard
    })
}
shuffleCards()


function flipTheCard() {
    if(lockBoard) {
        return
    } 

    if(this === firstCard) {
        return
    }
    
    this.classList.toggle('flip')

    if(!hasFlippedCard) {
        // First time a player clicked a card 
        hasFlippedCard = true;
        firstCard = this
    } else {
        hasFlippedCard = false; 
        secondCard     = this;

        let dataFromFirstCard  = firstCard.dataset.framework
        let dataFromSecondCard = secondCard.dataset.framework

       // do the cards match with each other ?
      cardsAreMatchingOrNot(dataFromFirstCard,dataFromSecondCard)

}
    
}


function cardsAreMatchingOrNot(dataFromFirstCard,dataFromSecondCard) {
    if(dataFromFirstCard === dataFromSecondCard) {
        // ItsAMatch!
        firstCard.removeEventListener('click', flipTheCard)
        secondCard.removeEventListener('click', flipTheCard)

        resetBoard()

    } else {
        // not a match remove the class
        lockBoard = true

        setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        
        resetBoard()

        },1200) 
    }
   
}
function resetBoard() {
    [hasFlippedCard,lockBoard] = [false,false]
    [firstCard.secondCard] = [null,null]
}
