describe ("instructions", function() {
  var instructions = new Instructions();

  it("should keep track of instructions added", function() {
    instructions.append("moveUp(1)");
    expect(instructions.list).toEqual(['moveUp(1)']);
  });


  it("should add instructions to the typed variable", function() {
    instructions.typed = "";
    instructions.append("moveUp");
    expect(instructions.typed).toEqual("moveUp\n");
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

  //taken out as method has moved, the above test needs refactoring

  // it("should add instructions to the instructions array", function() {
  //   instructions.addInstructions("moveUp");
  //   expect(instructions.instructionsArr).toContain("moveUp");
  // });


});
