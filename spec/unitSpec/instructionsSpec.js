describe ("instructions", function() {
  var instructions = new Instructions();

  it("should add instructions to the typed variable", function() {
    instructions.append("moveUp");
    expect(instructions.typed).toEqual("moveUp\n");
  });

  it("should add instructions to the instructions array", function() {
    instructions.addInstructions("moveUp");
    expect(instructions.instructionsArr).toContain("moveUp");
  });

});
