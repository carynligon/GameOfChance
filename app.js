function PlayingCardConstructor (suit, value) {
  this.suit = suit;
  this.value = value;
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
