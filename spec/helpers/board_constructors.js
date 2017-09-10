function constructEmptyBoardDouble(){
  var board = [];
  for (var i = 0; i < BOARD_HEIGHT_AND_WIDTH; i++) {
    var newRow = [];
    for (var j = 0; j < BOARD_HEIGHT_AND_WIDTH; j++) {
      newRow.push(new FieldClassDouble());
    }
    board.push(newRow);
  }
  return board;
}

function constructRowWinTestBoard(){
  var x = fieldDoubleWithX;
  var o = fieldDoubleWithO;
  var empty = fieldDouble;
  var board = new Board();
  board._board = [[x, x, x],
                 [o, x, o],
                 [empty, x, empty]];
  return board;
}
