describe("#evilCodeMedal", function() {
  describe("#initialize", function() {
    it("stores the medal times", function() {
      evilCodeMedal = new EvilCodeMedal(
        "00:30:00",
        "00:15:00",
        "00:45:00",
        "01:15:00"
      );
      expect(evilCodeMedal.gold).toEqual("00:15:00");
      expect(evilCodeMedal.silver).toEqual("00:45:00");
      expect(evilCodeMedal.bronze).toEqual("01:15:00");
    });
  });

  describe("#getMedal", function() {
    it("returns the correct medal based on the user time", function() {
      evilCodeMedal = new EvilCodeMedal(
        "00:30:00",
        "00:15:00",
        "00:45:00",
        "01:15:00"
      );
      var result = evilCodeMedal.getMedal("00:14:00");
      expect(result).toEqual("Gold");
      var result = evilCodeMedal.getMedal("00:44:00");
      expect(result).toEqual("Silver");
      var result = evilCodeMedal.getMedal("01:14:00");
      expect(result).toEqual("Bronze");
    });
  });
});
