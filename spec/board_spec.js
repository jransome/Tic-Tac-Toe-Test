describe("Board", function(){
  var board;
  var emptyBoardArray = constructEmptyBoardDouble();
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
    instantiateBoardSubject(FieldClassDouble);
    expect(board.board()).toEqual(emptyBoardArray);
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

    sharedNullReturnTest();
  });

  describe("#checkMarker", function (){
    it("checks whether the marker at a specified row and column is a cross", function(){
      board.checkMarker(chosenRow,chosenColumn);
      expect(board.board()[chosenRow][chosenColumn].claimedBy().isCross).toHaveBeenCalled();
    });

    sharedNullReturnTest();
  });

  function sharedNullReturnTest(){
    it("returns null when specified position is out of board's range", function(){
      expect(board.getMarker(invalidRow,invalidColumn)).toEqual(null);
    });
  }
});
