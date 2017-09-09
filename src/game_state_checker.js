(function(exports){
  function GameStateChecker(board){
    this._board = board;
    this._turnsTaken = 0;
  }

  GameStateChecker.prototype = {
    updateGameState: function(isLastMarkerCross, lastMarkerRow, lastMarkerColumn){
      this.checkForWin(isCross, lastMarkerRow, lastMarkerColumn);
      this.countTurn();
    },

    checkForWin: function(isCross, lastMarkerRow, lastMarkerColumn){
      var self = this;
      var rowCounter;
      var columnCounter;
      var diagonalCounter;
      var antiDiagonalCounter;
      for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
        if (self._board[lastMarkerRow][i].claimedBy().isCross() === isCross) { rowCounter += 1; }
        if (self._board[i][lastMarkerColumn].claimedBy().isCross() === isCross) { columnCounter += 1; }
      }
      console.log(rowCounter)
      console.log(columnCounter)
    },

    isDraw: function(){
      return this._turnsTaken === MAX_NUMBER_OF_TURNS;
    },

    countTurn: function(){
      this._turnsTaken += 1;
    }
  };

  exports.GameStateChecker = GameStateChecker;
})(this);
