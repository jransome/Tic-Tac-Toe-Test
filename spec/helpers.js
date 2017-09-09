function constructEmptyBoardDouble(fieldClassDouble){
  var board = [];
  for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
    var newRow = [];
    for (var j = 0; j < BOARD_HEIGHT_AND_WIDTH; j++) {
      newRow.push(new fieldClassDouble());
    }
    board.push(newRow);
  }
  return board;
}
