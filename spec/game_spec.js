describe("Game", function(){
  var game;
  var selectedRowForCross = 0;
  var selectedColumnForCross = 0;
  var selectedRowForNought = 1;
  var selectedColumnForNought = 1;

  var boardDouble = jasmine.createSpyObj('board', ['placeMarker']);
  var gameStateCheckerDouble = jasmine.createSpyObj('gameStateChecker', ['checkForWin', 'allFieldsClaimed']);
  function MarkerClassDouble(isCross) {
    this._isCross = isCross;
  }
  MarkerClassDouble.prototype = {
    isCross: function(){
      return this._isCross;
    }
  };
  var crossMarkerDouble = new MarkerClassDouble(true);
  var noughtMarkerDouble = new MarkerClassDouble(false);

  beforeEach(function(){
    game = new Game(boardDouble, MarkerClassDouble, gameStateCheckerDouble);
  });

  it("begins on cross' turn", function(){
    expect(game.isCrossTurn()).toEqual(true);
  });

  describe("#playTurn", function(){
    it("throws an error if the game is already over", function(){
      game.recordDraw();
      expect(function(){ game.playTurn(selectedRowForCross, selectedColumnForCross); })
      .toThrow("Game is over!");
    });

    it("calls for a marker to be placed on the board", function(){
      game.playTurn(selectedRowForCross, selectedColumnForCross);
      expect(boardDouble.placeMarker).toHaveBeenCalled();
    });

    it("places a cross marker when it is cross' turn", function(){
      game.playTurn(selectedRowForCross, selectedColumnForCross);
      expect(boardDouble.placeMarker.calls.mostRecent().args)
      .toEqual([crossMarkerDouble, selectedRowForCross, selectedColumnForCross]);
    });

    it("places a nought marker when it is nought's turn", function(){
      game.playTurn(selectedRowForCross, selectedColumnForCross);
      game.playTurn(selectedRowForNought, selectedColumnForNought);
      expect(boardDouble.placeMarker.calls.mostRecent().args)
      .toEqual([noughtMarkerDouble, selectedRowForNought, selectedColumnForNought]);
    });
  });

  describe("#updateGameState", function(){
    it("records a win if a player has won", function(){
      gameStateCheckerDouble.checkForWin.and.callFake(function(){ return true; });
      game.updateGameState();
      expect(game._xWin).toEqual(true);
    });

    it("records a draw if no player has won and all fields are claimed", function(){
      gameStateCheckerDouble.checkForWin.and.callFake(function(){ return false; });
      gameStateCheckerDouble.allFieldsClaimed.and.callFake(function(){ return true; });
      game.updateGameState();
      expect(game._isDraw).toEqual(true);
    });
  });

  describe("#recordWin", function(){
    it("records a win for the current player turn", function(){
      game.recordWin();
      expect(game._xWin).toEqual(true);
    });
  });

  describe("#recordDraw", function(){
    it("records a draw", function(){
      game.recordDraw();
      expect(game._isDraw).toEqual(true);
    });
  });
});
