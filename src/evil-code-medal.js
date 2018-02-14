function EvilCodeMedal(userTime, gold, silver, bronze) {
  this.gold = gold;
  this.silver = silver;
  this.bronze = bronze;
}

EvilCodeMedal.prototype.getMedal = function(userTime) {
  switch (true) {
    case userTime < this.gold:
      return "Gold";
      break;
    case userTime < this.silver:
      return "Silver";
      break;
    case userTime < this.bronze:
      return "Bronze";
      break;
    default:
      return "None";
  }
};
