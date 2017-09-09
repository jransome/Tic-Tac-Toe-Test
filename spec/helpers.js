function constructEmptyBoardDouble(fieldClassDouble){
  var board = [];
  for (var i = 0; i < BOARD_HEIGHT; i++) {
    var newRow = [];
    for (var j = 0; j < BOARD_WIDTH; j++) {
      newRow.push(new fieldClassDouble());
    }
    board.push(newRow);
  }
  return board;
}
