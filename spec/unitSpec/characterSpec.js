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
    expect(character.position).toEqual([2, 0]);
  });

  it("should move left by specified amount", function() {
    character.moveRight(4);
    character.moveLeft(2);
    expect(character.position).toEqual([2, 0]);
  });

  it("should move down by specified amount", function() {
    character.moveDown(2);
    expect(character.position).toEqual([0, 2]);
  });

  it("should move up by specified amount", function() {
    character.moveDown(4);
    character.moveUp(2);
    expect(character.position).toEqual([0, 2]);
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
