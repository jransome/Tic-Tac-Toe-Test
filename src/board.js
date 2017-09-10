(function(exports){
  function Board(fieldClass = Field){
    this.constructBoard(fieldClass);
  }

  Board.prototype = {
    constructBoard: function(fieldClass){
      this._board = [];
      for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
        var newRow = [];
        for (var j = 0; j < BOARD_HEIGHT_AND_WIDTH; j++) {
          newRow.push(new fieldClass());
        }
        this._board.push(newRow);
      }
    },

    board: function(){
      return this._board;
    },

    placeMarker: function(marker, row, column){
      this.checkFieldIsInBoardRange(row, column);
      this._board[row][column].claim(marker);
    },

    getMarker: function(row, column){
      this.checkFieldIsInBoardRange(row, column);
      return this._board[row][column].claimedBy();
    },

    checkMarker: function(row, column){
      var marker = this.getMarker(row, column);
      return marker !== null ? marker.isCross() : null;
    },

    checkFieldIsInBoardRange: function(row, column){
      if (row > BOARD_HEIGHT_AND_WIDTH || column > BOARD_HEIGHT_AND_WIDTH){
        throw "That field does not exist!";
      }
    }
  };

  exports.Board = Board;
})(this);
