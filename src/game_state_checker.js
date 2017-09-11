(function(exports){
  function GameStateChecker(board){
    this._board = board;
    this._turnsTaken = 0;
  }

  GameStateChecker.prototype = {
    updateGameState: function(isCross, lastMarkerRow, lastMarkerColumn){
      this.countTurn();
      this.checkForWin(isCross, lastMarkerRow, lastMarkerColumn);
    },

    checkForWin: function(isCross, lastMarkerRow, lastMarkerColumn){
      var self = this;
      var rowCounter = 0;
      var columnCounter = 0;
      var diagonalCounter = 0;
      var antiDiagonalCounter = 0;
      for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
        if (self._board.checkMarker(lastMarkerRow, i) === isCross) { rowCounter ++; }
        if (self._board.checkMarker(i, lastMarkerColumn) === isCross) { columnCounter ++; }
        if (self._board.checkMarker(i, i) === isCross) { diagonalCounter ++; }
        if (self._board.checkMarker(i, (BOARD_HEIGHT_AND_WIDTH - 1) - i) === isCross) { antiDiagonalCounter ++; }
      }

      return (rowCounter === BOARD_HEIGHT_AND_WIDTH ||
              columnCounter === BOARD_HEIGHT_AND_WIDTH ||
              diagonalCounter === BOARD_HEIGHT_AND_WIDTH ||
              antiDiagonalCounter === BOARD_HEIGHT_AND_WIDTH);
    },

    allFieldsClaimed: function(){
      return this._turnsTaken >= MAX_NUMBER_OF_TURNS;
    },

    countTurn: function(){
      this._turnsTaken ++;
    }
  };

  exports.GameStateChecker = GameStateChecker;
})(this);
