var x = fieldDoubleWithX;
var o = fieldDoubleWithO;
var empty = fieldDouble;

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
  var board = new Board();
  board._board = [[x, x, x],
                  [o, x, o],
                  [empty, empty, empty]];
  return board;
}

function constructColWinTestBoard(){
  var board = new Board();
  board._board = [[o, o, empty],
                  [o, x, empty],
                  [o, o, empty]];
  return board;
}

function constructDiagonalWinTestBoard(){
  var board = new Board();
  board._board = [[x, o, empty],
                  [o, x, empty],
                  [o, o, x]];
  return board;
}

function constructDiagonalLoseTestBoard(){
  var board = new Board();
  board._board = [[x, o, empty],
                  [o, x, empty],
                  [o, x, o]];
  return board;
}

function constructAntiDiagonalWinTestBoard(){
  var board = new Board();
  board._board = [[x, o, o],
                  [o, o, empty],
                  [o, x, x]];
  return board;
}

function constructAntiDiagonalLoseTestBoard(){
  var board = new Board();
  board._board = [[x, o, x],
                  [o, o, empty],
                  [o, x, x]];
  return board;
}
