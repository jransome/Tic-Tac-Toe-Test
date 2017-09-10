function FieldClassDouble(){}

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
  var XMarkerField = new Field();
  XMarkerField.claim(new Marker(true));
  var OMarkerField = new Field();
  OMarkerField.claim(new Marker(false));
  var EmptyField = new Field();
  var board = new Board();
  board._board = [[XMarkerField, XMarkerField, XMarkerField],
                 [OMarkerField, XMarkerField, OMarkerField],
                 [EmptyField, XMarkerField, EmptyField]];
  return board;
}
