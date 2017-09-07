describe("Marker", function(){
  var marker;

  it("can be a cross", function(){
    marker = new Marker(true);
    expect(marker.isCross()).toEqual(true);
  });

  it("can be a nought", function(){
    marker = new Marker(false);
    expect(marker.isCross()).toEqual(false);
  });
});
