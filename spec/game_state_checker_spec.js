describe("GameStateChecker", function(){
  var gameStateChecker;
  var [lastMarkerIsCross, lastMarkerIsNotCross] = [true, false];
  var [topRow, midRow, bottomRow] = [0, 1, 2];
  var [leftCol, midCol, rightCol] = [0, 1, 2];

  beforeEach(function(){
    var emptyBoard = constructEmptyBoardDouble();
    gameStateChecker = new GameStateChecker(emptyBoard);
  });

  describe("#checkForWin", function(){
    it("returns true if the last move wins by making a row", function(){
      gameStateChecker = new GameStateChecker(constructRowWinTestBoard());
      expect(gameStateChecker.checkForWin(lastMarkerIsCross,
                                          topRow,
                                          rightCol)).toEqual(true);
    });

    it("returns false if the last move doesn't win by making a row", function(){
      gameStateChecker = new GameStateChecker(constructRowWinTestBoard());
      expect(gameStateChecker.checkForWin(lastMarkerIsNotCross,
                                          midRow,
                                          rightCol)).toEqual(false);
    });

    it("returns false if there is no winner after the turn ends", function(){

    });
  });

  describe("#allFieldsClaimed", function(){
    it("returns true if the number of turns taken equals the number of fields", function(){
      for (var i = 0; i < MAX_NUMBER_OF_TURNS; i++) { gameStateChecker.countTurn(); }
      expect(gameStateChecker.allFieldsClaimed()).toEqual(true);
    });

    it("returns false if the number of turns taken is less than the number of fields", function(){
      for (var i = 0; i < MAX_NUMBER_OF_TURNS - 1; i++) { gameStateChecker.countTurn(); }
      expect(gameStateChecker.allFieldsClaimed()).toEqual(false);
    });
  });
});
