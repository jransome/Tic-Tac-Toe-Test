(function(exports){
  function Marker(isCross){
    this._isCross = isCross;
  }

  Marker.prototype = {
    isCross: function(){
      return this._isCross;
    }
  };

  exports.Marker = Marker;
})(this);
