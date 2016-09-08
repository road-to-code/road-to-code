describe ("character", function() {
  var character = new Character();
  it("should have a starting position", function() {
    expect(character.position).toEqual([10, 10]);
  });
});
