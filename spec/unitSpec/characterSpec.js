describe ("character", function() {
  var character = new Character();
  it("should have a starting position", function() {
    expect(character.position).toEqual([0, 0]);
  });

  beforeEach(function() {
    character.position = [0, 0];
  });

  it("should move right", function() {
    character.moveRight();
    expect(character.position).toEqual([1, 0]);
  });

  it("should move left", function() {
    character.moveRight();
    character.moveRight();
    character.moveLeft();
    expect(character.position).toEqual([1, 0]);
  });

  it("should move down", function() {
    character.moveDown();
    expect(character.position).toEqual([0, 1]);
  });

  it("should move up", function() {
    character.moveDown();
    character.moveDown();
    character.moveUp();
    expect(character.position).toEqual([0, 1]);
  });

  xit('should not be able to leave map on the LHS', function (){
    character.moveRight(1);
    character.moveLeft(2);
    expect(character.position).toEqual([0, 0]);
  });

  xit('should not be able to leave map on the RHS', function (){
    character.moveRight(11);
    expect(character.position).toEqual([100, 0]);
  });

  xit('should not be able to leave top of map', function (){
    character.moveDown(1);
    character.moveUp(2);
    expect(character.position).toEqual([0, 0]);
  });

  xit('should not be able to leave bottom of map', function (){
    character.moveDown(11);
    expect(character.position).toEqual([0, 100]);
  });

});
