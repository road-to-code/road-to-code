describe("scores", function() {
  var scores = new Scores();
  it("should return scores", function() {
    scores.retrieve();
    expect(scores.list).toEqual('test');
  });

});
