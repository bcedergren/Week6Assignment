// Card class
class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  toString() {
    return `${this.rank} of ${this.suit}`
  }
}

// Deck class
class Deck {
  constructor() {
    this.cards = []
  }

  initialize() {
    const ranks = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
    ]
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']

    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(rank, suit))
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  deal(player1, player2) {
    while (this.cards.length) {
      player1.hand.push(this.cards.pop())
      player2.hand.push(this.cards.pop())
    }
  }
}

// Player class
class Player {
  constructor(name) {
    this.name = name
    this.hand = []
    this.score = 0
  }

  playCard() {
    return this.hand.shift()
  }

  updateScore() {
    this.score++
  }

  displayScore() {
    console.log(`${this.name}'s score: ${this.score}`)
  }
}

// Game logic
const player1 = new Player('Player 1')
const player2 = new Player('Player 2')
const deck = new Deck()

deck.initialize()
deck.shuffle()
deck.deal(player1, player2)

while (player1.hand.length && player2.hand.length) {
  const card1 = player1.playCard()
  const card2 = player2.playCard()

  console.log(`${player1.name} plays: ${card1}`)
  console.log(`${player2.name} plays: ${card2}`)

  if (card1.rank > card2.rank) {
    player1.updateScore()
  } else if (card1.rank < card2.rank) {
    player2.updateScore()
  }
}

player1.displayScore()
player2.displayScore()

if (player1.score > player2.score) {
  console.log(`${player1.name} wins!`)
} else if (player1.score < player2.score) {
  console.log(`${player2.name} wins!`)
} else {
  console.log("It's a tie!")
}
