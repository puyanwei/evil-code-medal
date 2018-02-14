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
      var result = evilCodeMedal.getMedal("00:29:00");
      console.log(result);
      expect(result).toEqual("Silver");
    });
  });
});
