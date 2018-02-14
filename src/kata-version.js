function evilCodeMedal(userTime, gold, silver, bronze) {
  this.gold = gold;
  this.silver = silver;
  this.bronze = bronze;

  if (userTime < this.gold) {
    return "Gold";
  }
  if (userTime < this.silver) {
    return "Silver";
  }
  if (userTime < this.bronze) {
    return "Bronze";
  }
  return "None";
}
