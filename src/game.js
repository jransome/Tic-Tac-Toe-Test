(function(exports){
  function Game(board, markerClass, gameStateChecker){
    this._board = board || new Board();
    this._markerClass = markerClass || Marker;
    this._gameStateChecker = gameStateChecker || new GameStateChecker(this._board);
    this._isCrossTurn = true;
    this._isDraw = false;
    this._xWin = false;
    this._oWin = false;
  }

  Game.prototype = {
    isCrossTurn: function(){
      return this._isCrossTurn;
    },

    playTurn: function(selectedRow, selectedColumn){
      if (this.isOver()) { throw "Game is over!"; }
      this._board.placeMarker(this.getMarkerForTurn(), selectedRow, selectedColumn);
      this.endTurn(selectedRow, selectedColumn);
    },

    getMarkerForTurn: function(){
      return (this.isCrossTurn() ? new this._markerClass(true) : new this._markerClass(false));
    },

    endTurn: function(selectedRow, selectedColumn){
      this.updateGameState(selectedRow, selectedColumn);
      this._isCrossTurn = !this._isCrossTurn;
    },

    updateGameState: function(lastRow, lastColumn){
      if (this._gameStateChecker.checkForWin(this.isCrossTurn(), lastRow, lastColumn)){
        this.recordWin();
      } else if (this._gameStateChecker.allFieldsClaimed()){
        this.recordDraw();
      }
    },

    recordWin: function(){
      this.isCrossTurn() ? this._xWin = true : this._oWin = true
    },

    recordDraw: function(){
      this._isDraw = true;
    },

    isOver: function(){
      return (this._xWin || this._oWin || this._isDraw);
    }
  };

  exports.Game = Game;
})(this);
