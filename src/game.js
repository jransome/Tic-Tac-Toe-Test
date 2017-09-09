(function(exports){
  function Game(board, markerClass, gameStateChecker){
    this._board = board || new Board();
    this._markerClass = markerClass || Marker;
    this._gameStateChecker = gameStateChecker || new GameStateChecker(this._board);
    this._isCrossTurn = true;
    this._result = -1;
  }

  Game.prototype = {
    isCrossTurn: function(){
      return this._isCrossTurn;
    },

    playTurn: function(selectedRow, selectedColumn){
      this._board.placeMarker(this.getMarkerForTurn(), selectedRow, selectedColumn);
      this.endTurn(selectedRow, selectedColumn);
    },

    getMarkerForTurn: function(){
      return (this.isCrossTurn() ? new this._markerClass(true) : new this._markerClass(false));
    },

    endTurn: function(selectedRow, selectedColumn){
      this._gameStateChecker.updateGameState(this._isCrossTurn, selectedRow, selectedColumn);
      this._isCrossTurn = !this._isCrossTurn;
    }
  };

  exports.Game = Game;
})(this);
