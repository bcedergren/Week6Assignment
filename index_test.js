const assert = chai.assert

describe('Deck', function () {
  describe('#deal()', function () {
    it('should distribute half of the deck to each player', function () {
      const deck = new Deck()
      const player1 = new Player('Player 1')
      const player2 = new Player('Player 2')

      deck.initialize()
      deck.shuffle()
      deck.deal(player1, player2)

      assert.equal(player1.hand.length, 26)
      assert.equal(player2.hand.length, 26)
    })
  })
})
