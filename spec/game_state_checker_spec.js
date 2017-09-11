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
    describe("returns true if the last move wins by:", function(){
      it("making a row", function(){
        gameStateChecker = new GameStateChecker(constructRowWinTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsCross,
                                            topRow,
                                            rightCol)).toEqual(true);
      });

      it("making a column", function(){
        gameStateChecker = new GameStateChecker(constructColWinTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsNotCross,
                                            topRow,
                                            leftCol)).toEqual(true);
      });

      it("making the diagonal", function(){
        gameStateChecker = new GameStateChecker(constructDiagonalWinTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsCross,
                                            midRow,
                                            midCol)).toEqual(true);
      });

      it("making the anti-diagonal", function(){
        gameStateChecker = new GameStateChecker(constructAntiDiagonalWinTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsNotCross,
                                            midRow,
                                            midCol)).toEqual(true);
      });
    });

    describe("returns false if the last move fails to:", function(){
      it("make a row", function(){
        gameStateChecker = new GameStateChecker(constructRowWinTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsNotCross,
                                            midRow,
                                            rightCol)).toEqual(false);
      });

      it("make a column", function(){
        gameStateChecker = new GameStateChecker(constructColWinTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsNotCross,
                                            topRow,
                                            midCol)).toEqual(false);
      });

      it("make the diagonal", function(){
        gameStateChecker = new GameStateChecker(constructDiagonalLoseTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsCross,
                                            midRow,
                                            midCol)).toEqual(false);
      });

      it("make the anti-diagonal", function(){
        gameStateChecker = new GameStateChecker(constructAntiDiagonalLoseTestBoard());
        expect(gameStateChecker.checkForWin(lastMarkerIsNotCross,
                                            midRow,
                                            midCol)).toEqual(false);
      });
    });
  });

  describe("#allFieldsClaimed", function(){
    it("returns true if the number of turns taken is greater or equal to the number of fields", function(){
      for (var i = 0; i < MAX_NUMBER_OF_TURNS; i++) { gameStateChecker.countTurn(); }
      expect(gameStateChecker.allFieldsClaimed()).toEqual(true);
    });

    it("returns false if the number of turns taken is less than the number of fields", function(){
      for (var i = 0; i < MAX_NUMBER_OF_TURNS - 1; i++) { gameStateChecker.countTurn(); }
      expect(gameStateChecker.allFieldsClaimed()).toEqual(false);
    });
  });
});
