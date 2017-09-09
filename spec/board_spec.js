describe("Board", function(){
  var board;

  // Doubles
  var fieldDouble = jasmine.createSpyObj('field', ['claim', 'claimedBy']);
  var markerDouble = jasmine.createSpyObj('marker', ['isCross']);

  // Empty board
  function fieldClassDouble(){}
  var emptyBoard = constructEmptyBoardDouble(fieldClassDouble);

  var chosenRow = 1;
  var chosenColumn = 2;

  beforeEach(function(){
    spyOn(window, 'Field').and.returnValue(fieldDouble);
    board = new Board();
  });

  it("contains a 2D array of fields", function(){
    board = new Board(fieldClassDouble);
    expect(board.board()).toEqual(emptyBoard);
  });

  it("places a marker at a specified row and column", function(){
    board.placeMarker(markerDouble, chosenRow, chosenColumn);
    var argsLog = board.board()[chosenRow][chosenColumn].claim.calls.mostRecent().args;
    expect(argsLog).toEqual([markerDouble]);
  });

  it("checks for a marker at a specified row and column", function(){
    board.checkMarker(chosenRow,chosenColumn);
    expect(board.board()[chosenRow][chosenColumn].claimedBy).toHaveBeenCalled();
  });
});
