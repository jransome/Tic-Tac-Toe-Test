(function(exports){
  function GameStateChecker(board){
    this._board = board;
    this._turnsTaken = 0;
  }

  GameStateChecker.prototype = {
    checkForWin: function(isCross, lastMarkerRow, lastMarkerColumn){
      var self = this;
      var rowCounter = 0;
      var columnCounter = 0;
      var diagonalCounter = 0;
      var antiDiagonalCounter = 0;
      for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
        if (this.checkMarkerTeam(isCross, lastMarkerRow, i)) { rowCounter ++; }
        if (this.checkMarkerTeam(isCross, i, lastMarkerColumn)) { columnCounter ++; }
        if (this.checkMarkerTeam(isCross, i, i)) { diagonalCounter ++; }
        if (this.checkMarkerTeam(isCross, i, (BOARD_HEIGHT_AND_WIDTH - 1) - i)) { antiDiagonalCounter ++; }
      }

      return (rowCounter === BOARD_HEIGHT_AND_WIDTH ||
              columnCounter === BOARD_HEIGHT_AND_WIDTH ||
              diagonalCounter === BOARD_HEIGHT_AND_WIDTH ||
              antiDiagonalCounter === BOARD_HEIGHT_AND_WIDTH);
    },

    checkMarkerTeam: function(isCross, row, col){
      return this._board.checkMarker(row, col) === isCross;
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
