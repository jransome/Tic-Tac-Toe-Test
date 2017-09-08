describe("Board", function(){
  var board;

  // Doubles
  function fieldClassDouble(){}

  var markerDouble = jasmine.createSpyObj('marker', ['isCross']);
  markerDouble.isCross.and.callFake(function(){ return true; });

  // Empty board
  var emptyRow = [new fieldClassDouble(), new fieldClassDouble(), new fieldClassDouble()];
  var emptyBoard = [emptyRow, emptyRow, emptyRow];

  var chosenRow = 1;
  var chosenColumn = 2;

  beforeEach(function(){
    board = new Board(fieldClassDouble);
  });

  it("has no markers on it by default", function(){
    expect(board.board()).toEqual(emptyBoard);
  });

  it("places a marker at a specified row and column", function(){
    board.placeMarker(markerDouble, chosenRow, chosenColumn);
    console.log(board.board());
    expect(board.board()[chosenRow][chosenColumn]).toEqual(markerDouble);
  });

  it("checks for a marker at a specified row and column", function(){
    board.board()[chosenRow][chosenColumn] = markerDouble;
    expect(board.checkMarker(chosenRow, chosenColumn)).toEqual(markerDouble);
  });
});
