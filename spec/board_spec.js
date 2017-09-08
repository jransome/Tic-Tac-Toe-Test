describe("Board", function(){
  var board;

  // Doubles
  function fieldClassDouble(){}
  var markerDouble = jasmine.createSpyObj('marker', ['isCross']);

  // Empty board
  var emptyBoard = function constructEmptyBoardDouble(fieldClass){
    var board = [];
    for (var i = 0; i < BOARD_HEIGHT; i++) {
      var newRow = [];
      for (var j = 0; j < BOARD_WIDTH; j++) {
        newRow.push(new fieldClassDouble());
      }
      board.push(newRow);
    }
    return board;
  }();

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
    expect(board.board()[chosenRow][chosenColumn]).toEqual(markerDouble);
  });

  it("checks for a marker at a specified row and column", function(){
    board.board()[chosenRow][chosenColumn] = markerDouble;
    expect(board.checkMarker(chosenRow, chosenColumn)).toEqual(markerDouble);
  });
});
