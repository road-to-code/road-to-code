describe ("instructions", function() {
  var instructions = new Instructions();

  it("should add instructions to the typed variable", function() {
    instructions.append("moveUp");
    expect(instructions.typed).toEqual("moveUp\n");
  });

  //taken out as method has moved, the above test needs refactoring

  // it("should add instructions to the instructions array", function() {
  //   instructions.addInstructions("moveUp");
  //   expect(instructions.instructionsArr).toContain("moveUp");
  // });

});
