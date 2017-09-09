describe("Field", function(){
  var field;
  var markerDouble = jasmine.createSpyObj('marker', ['isCross']);

  beforeEach(function(){
    field = new Field();
  });

  it("is empty by default", function(){
    expect(field.claimedBy()).toEqual(null);
  });

  it("can be claimed by a player", function(){
    field.claim(markerDouble);
    expect(field.claimedBy()).toEqual(markerDouble);
  });

  it("throws an error a player attempts to claim an already claimed field", function(){
    field.claim(markerDouble);
    expect(function(){ field.claim(markerDouble); }).toThrow("Field is already claimed!");
  });
});
