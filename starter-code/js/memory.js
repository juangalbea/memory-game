class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  pickedCards
  shuffleCards(cards) {
    let len = this.cards.length;
        while (len > 0) {
            len--;
            let temp = this.cards[len];
            let randomIdx = Math.floor(Math.random() * len);
            this.cards[len] = this.cards[randomIdx];
            this.cards[randomIdx] = temp;
        }
      }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}