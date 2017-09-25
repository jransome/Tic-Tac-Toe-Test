# Tic-Tac-Toe-Test

## Approach


### Requirements/Task

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

### User stories

From the above requirements, I distilled the following user stories:
```
As player 1
So I can play the game
I want to place a cross marker on an empty field on the board

As player 2
So I can play against player 1
I want to place a nought marker on an empty field on the board

As a player
So that the game is fair
I want turns to alternate between myself and my opponent

As a player
So that the emotional rollercoaster of the game eventually resolves
I want to have won the game if I make a row, column or diagonal with my markers

As a player
So that the emotional rollercoaster of the game eventually resolves
I want the game to be over when all fields are taken

```

### Domain model

I then mapped a domain model to guide my architecture and ensure my solution was object oriented, with the following classes:

```
Game
GameStateChecker
Board
Field
Marker
```

Using the Jasmine testing framework, I then drove the development of my solution using a TDD approach, aiming for 100% test coverage.

## Installation instructions

Run the following commands from the terminal in a directory of your choice:

```
$ git clone git@github.com:jransome/tic-tac-toe-test.git
$ cd tic-tac-toe-test
$ open SpecRunner.html
$ open Index.html
```

To interact with the program open Index.html in Chrome and open the console from the settings menu. To play a game, use the following commands:

* Create a new game instance with `var game = new Game()`.
* Play a turn (cross is first by default) with `game.playTurn(row, column)`, where row and column are zero indexed and (0, 0) is the top-left of the board.
* Executing `playTurn()` alternates between cross' and nought's turn, hence running it again will play nought's turn.
* If a game is over (by win or draw), `playTurn()` will throw an exception.

## Dependencies

Tests are dependent on the Jasmine testing framework.
