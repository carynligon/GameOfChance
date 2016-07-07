function PlayingCardConstructor (suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

var newCard = new PlayingCardConstructor ('hearts', 6);

function MakeDeck() {
  this.cards = [];
  var self = this;
  this.shuffle = function () {
    self.cards.forEach(function(card, i) {
      var newIndex = Math.floor(Math.random() * self.cards.length);
      var number = self.cards[i];
      self.cards[i] = self.cards[newIndex];
      self.cards[newIndex] = number;
    });
  };
  this.draw = function () {
    var topCard = self.cards[0];
    console.log(topCard);
    return topCard;
  };
  var suits = ['clubs', 'hearts', 'spades', 'diamonds'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  var index = 0;
  suits.forEach(function(suit, i) {
    ranks.forEach(function(rank, i) {
      self.cards[index] = rank + ' of ' + suit;
      index++;
    });
  });
  }

var newDeck = new MakeDeck();

$('#top-card').on('click', loadCardImg);

function loadCardImg () {
  var shuffleDeck = newDeck.shuffle();
  var selectedCard = newDeck.draw();
  var fileName = selectedCard.split(' ').join('_') + '.png';
  console.log(fileName);
  $('#top-card').text('');
  $('#top-card').append('<img src="#" />');
  $('img').attr('src', 'assets/images/' + fileName);
}



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
