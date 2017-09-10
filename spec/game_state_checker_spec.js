describe("GameStateChecker", function(){
  var gameStateChecker;
  var lastMarkerIsCross = true;
  var topRow = 0;
  var rightColumn = 2;

  beforeEach(function(){
    var emptyBoard = constructEmptyBoardDouble();
    gameStateChecker = new GameStateChecker(emptyBoard);
  });

  describe("#checkForWin", function(){
    it("returns true if the last move wins by making a row", function(){
      gameStateChecker = new GameStateChecker(constructRowWinTestBoard());
      expect(gameStateChecker.checkForWin(lastMarkerIsCross,
                                          topRow,
                                          rightColumn)).toEqual(true);
    });

    it("returns false if the last move doesn't win by making a row", function(){
      gameStateChecker = new GameStateChecker(constructRowWinTestBoard());
      expect(gameStateChecker.checkForWin(false,
                                          1,
                                          2)).toEqual(false);
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
