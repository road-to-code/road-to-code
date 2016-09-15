describe ("instructions", function() {
  var instructions = new Instructions();


  beforeEach(function() {
    instructions.typed = "";
    instructions.list = [];
  });


    it("should keep track of instructions added", function() {
      instructions.append("moveUp(1)");
      expect(instructions.list).toEqual(['moveUp(1)']);
    });


    it("should add instructions to the typed variable", function() {
      instructions.append("moveUp");
      expect(instructions.typed).toEqual("moveUp\n");
    });

    it('splits instructions into single moves', function () {
      instructions.append("moveDown(4)");
      instructions.append("moveRight(4)");
      instructions.splitIntoSingleMoves();
      expect(instructions.processedList).toContain('moveRight');
      expect(instructions.processedList.length).toEqual(8);

    });
});
