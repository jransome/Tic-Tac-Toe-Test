function boardPrinter(board){
  var output = [];
  for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
    var newRow = [];
    for (var j = 0; j < BOARD_HEIGHT_AND_WIDTH; j++) {
      newRow.push(markerPrinter(board.checkMarker(i, j)));
    }
    output.push(newRow);
  }
  return output;
}

function markerPrinter(isCross){
  var markerString = " ";
  if (isCross) {
    markerString = "X";
  }
  else if (isCross === false){ // as opposed to null
    markerString = "O";
  }
  return markerString;
}
