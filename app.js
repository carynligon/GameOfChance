function PlayingCardConstructor (suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

var newCard = new PlayingCardConstructor ('hearts', 6);

function MakeDeck() {
  this.cards = [];
  this.shuffle = function () {
    
  };
  var suits = ['clubs', 'hearts', 'spades', 'diamonds'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  var self = this;
  var index = 0;
  suits.forEach(function(suit, i) {
    ranks.forEach(function(rank, i) {
      self.cards[index] = rank + ' of ' + suit;
      index++;
    });
  });
  }

var newDeck = new MakeDeck();


function BuildDice (currValue) {
  this.currValue = currValue;
  this.roll = function() {
    this.currValue = Math.floor(Math.random() * 6) + 1;
    return this.currValue;
  };
}

var die1 = new BuildDice(3);
var die2 = new BuildDice(1);
var resultArr = [0,0,0,0,0,0,0,0,0,0,0,0];

function getProbabilities (timesRolled) {
  for (i = 0; i <= timesRolled; i++) {
  die1.roll();
  die2.roll();
  var sum = (die1.currValue + die2.currValue);
  resultArr[sum-2]++;
  }
  return resultArr;
}
