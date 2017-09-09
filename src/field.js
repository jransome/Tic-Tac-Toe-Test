(function(exports){
  function Field(){
    this._claimedBy = null;
  }

  Field.prototype = {
    claimedBy: function(){
      return this._claimedBy;
    },

    claim: function(marker){
      if(this._claimedBy === null) {
        this._claimedBy = marker;
      } else {
        throw "Field is already claimed!";
      }
    }
  };
  
  exports.Field = Field;
})(this);
