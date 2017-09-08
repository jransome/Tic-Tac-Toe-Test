(function(exports){
  function Board(fieldClass = Field){
    this.constructBoard(fieldClass);
  }

  Board.prototype = {
    constructBoard: function(fieldClass){
      this._board = [];
      for (var i = 0; i < BOARD_HEIGHT; i++) {
        var newRow = [];
        for (var j = 0; j < BOARD_WIDTH; j++) {
          newRow.push(new fieldClass());
        }
        this._board.push(newRow);
      }
    },

    board: function(){
      return this._board;
    },

    placeMarker: function(marker, row, column){
      this._board[row][column] = marker;
    },

    checkMarker: function(row, column){
      return this._board[row][column];
    }
  };

  exports.Board = Board;
})(this);
