describe ("instructions", function() {
  var instructions = new Instructions();

  it("should add instructions to the typed variable", function() {
    instructions.append("moveUp");
    expect(instructions.typed).toEqual("moveUp\n");
  });

<<<<<<< HEAD
  it("should add instructions to the instructions array", function() {
    instructions.addInstructions("moveUp");
    expect(instructions.instructionsArr).toContain("moveUp");
  });
//
// describe 'process'
// beforeEach
//   var insturctionsArr = "moveRight(2)", "moveLeft(4)"]);
// 
//   it('should parse instructions and return a function', function(){
//     instructions.process()
//   });
//
//   it('should parse instructions and return a number', function(){
//
//   });
=======
  //taken out as method has moved, the above test needs refactoring

  // it("should add instructions to the instructions array", function() {
  //   instructions.addInstructions("moveUp");
  //   expect(instructions.instructionsArr).toContain("moveUp");
  // });
>>>>>>> a32bad1d048ae892d3c3a76aea930ca427768a59

});
