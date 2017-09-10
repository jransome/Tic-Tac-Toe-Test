describe("Board", function(){
  var board;

  // Doubles
  var markerDouble = jasmine.createSpyObj('marker', ['isCross']);
  var fieldDouble = jasmine.createSpyObj('field', ['claim', 'claimedBy']);
  fieldDouble.claimedBy.and.callFake(function(){ return markerDouble; });

  // Empty board
  function fieldClassDouble(){}
  var emptyBoard = constructEmptyBoardDouble(fieldClassDouble);

  var chosenRow = 1;
  var chosenColumn = 2;
  var invalidRow = 8;
  var invalidColumn = 8;
  var outOfBoardRangeError = "That field does not exist!";

  function instantiateBoardSubject(args){
    board = new Board(args);
  }

  beforeEach(function(){
    spyOn(window, 'Field').and.returnValue(fieldDouble);
    instantiateBoardSubject();
  });

  it("contains a 2D array of fields", function(){
    instantiateBoardSubject(fieldClassDouble);
    expect(board.board()).toEqual(emptyBoard);
  });

  describe("#placeMarker", function(){
    it("places a marker at a specified row and column", function(){
      board.placeMarker(markerDouble, chosenRow, chosenColumn);
      var argsLog = board.board()[chosenRow][chosenColumn].claim.calls.mostRecent().args;
      expect(argsLog).toEqual([markerDouble]);
    });

    it("raises an error if placing at a field outside the board's range", function(){
      expect(function(){ board.placeMarker(invalidRow, invalidColumn); })
      .toThrow(outOfBoardRangeError);
    });
  });

  describe("#getMarker", function(){
    it("gets the marker at a specified row and column", function(){
      board.getMarker(chosenRow,chosenColumn);
      expect(board.board()[chosenRow][chosenColumn].claimedBy).toHaveBeenCalled();
    });
  });

  describe("#checkMarker", function (){
    it("checks whether the marker at a specified row and column is a cross", function(){
      board.checkMarker(chosenRow,chosenColumn);
      expect(board.board()[chosenRow][chosenColumn].claimedBy().isCross).toHaveBeenCalled();
    });
  });
});
