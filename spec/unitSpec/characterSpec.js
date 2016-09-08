describe ("character", function() {
  var character = new Character();
  it("should have a starting position", function() {
    expect(character.position).toEqual([0, 0]);
  });

  beforeEach(function() {
    character.position = [0, 0];
  });

  it("should move right by specified amount", function() {
    character.moveRight(2);
    expect(character.position).toEqual([20, 0]);
  });

  it("should move left by specified amount", function() {
    character.moveRight(4);
    character.moveLeft(2);
    expect(character.position).toEqual([20, 0]);
  });

  it("should move down by specified amount", function() {
    character.moveDown(2);
    expect(character.position).toEqual([0, 20]);
  });

  it("should move up by specified amount", function() {
    character.moveDown(4);
    character.moveUp(2);
    expect(character.position).toEqual([0, 20]);
  });

});
