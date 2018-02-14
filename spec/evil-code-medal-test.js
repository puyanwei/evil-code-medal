describe("#evilCodeMedal", function() {
  describe("#initialize", function() {
    it("stores the gold medal time", function() {
      evilCodeMedal = new EvilCodeMedal(
        "00:30:00",
        "00:15:00",
        "00:45:00",
        "01:15:00"
      );
      expect(evilCodeMedal.gold).toEqual("00:15:00");
    });
    it("stores the silver medal time", function() {
      evilCodeMedal = new EvilCodeMedal(
        "00:30:00",
        "00:15:00",
        "00:45:00",
        "01:15:00"
      );
      expect(evilCodeMedal.silver).toEqual("00:45:00");
    });
    it("stores the bronze medal time", function() {
      evilCodeMedal = new EvilCodeMedal(
        "00:30:00",
        "00:15:00",
        "00:45:00",
        "01:15:00"
      );
      expect(evilCodeMedal.bronze).toEqual("01:15:00");
    });
  });
});
