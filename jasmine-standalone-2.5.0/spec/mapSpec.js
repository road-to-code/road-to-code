describe("mapArray", function() {
  var map = new Map();
  it("should be an array", function() {
    expect(map.array).toEqual(jasmine.any(Array));
  });

  it("should be an array of 10 arrays", function(){
    expect(map.array.length).toEqual(10);
  })
  it("each array should contain 10 elements", function(){
    for(var i=0; i<map.array.length; i++){
      expect(map.array[i].length).toEqual(10);
    }
  })
});
