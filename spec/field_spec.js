describe("Field", function(){
  var field;

  beforeEach(function(){
    field = new Field();
  });

  it("is empty by default", function(){
    expect(field.claimedBy()).toEqual(null);
  });

  it("can be claimed by a player", function(){
    field.claim('X');
    expect(field.claimedBy()).toEqual('X');
  });

  it("throws an error a player attempts to claim an already claimed field", function(){
    field.claim('X');
    expect(function(){ field.claim('O'); }).toThrow("Field is already claimed!");
  });
});
