(function(exports){
  function Game(board = new Board(), markerClass = Marker){
    this._board = board;
    this._markerClass = markerClass;
    this._isCrossTurn = true;
  }

  Game.prototype = {
    isCrossTurn: function(){
      return this._isCrossTurn;
    },

    playTurn: function(selectedRow, selectedColumn){
      this._board.placeMarker(this.getMarkerForTurn(), selectedRow, selectedColumn);
      this.endTurn();
    },

    getMarkerForTurn: function(){
      return (this.isCrossTurn() ? new this._markerClass(true) : new this._markerClass(false));
    },

    endTurn: function(){
      this._isCrossTurn = !this._isCrossTurn;
    }
  };

  exports.Game = Game;
})(this);
