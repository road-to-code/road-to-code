describe("scores", function() {
  var scores = new Scores();
  xit("should return scores", function() {
    scores.retrieve();
    expect(scores.list).toEqual('test');
  });

});
