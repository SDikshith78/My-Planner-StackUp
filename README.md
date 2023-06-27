                                                       Planner App – My Custom Widget 

Note:- I added one Widget custom of Tic Tac Toe game in the same code of Quest-3 of React-2 Campaign Planner-App.
In this custom widget I build a game called “Tic Tae Toe”, It a famous game and also one of the best practice for learning front-end-development. 
 

In this file you can find the source in src folder->widget->MyCustomWidget.js. 
 
My main reason to build this widget is that sometimes taking a break is mandatory and its fun too! To play with alone or someone who is close to with. 
 

State Variables: 

board: An array representing the Tic Tac Toe board. 

currentPlayer: A string representing the current player  either in "X" or in  "O" 

winner: A string representing the winner ("X" or "O"), or draw if there is no winner. 

winningLine: An array representing the winning line, which contains the indices of the cells forming the line. 

handleCellClick: 

It's the function called when a cell is clicked. 

It checks if the cell is empty and there is no winner yet. 

If conditions are met, it updates the board, currentPlayer, and checks for a winner. 

CheckWinner: 

It checks for a winner by iterating through the winningCombinations array. 

It compares the values in the cells and sets the winner and winningLine if a winning combination is found. 

ResetGame: 

It resets the game by resetting the board, currentPlayer, winner, and winningLine to their initial values. 

RenderCell: 

It renders a single cell based on its index. 

It applies the CSS classes for the cell and the winning cell based on the board and winningLine states. 

RenderLine: 

It renders a line element based on the winning line direction. 

It applies the CSS class for the line and makes it active if there is a winning line. 

Return: 

It renders the Tic Tac Toe component. 

It maps over the board array and renders each cell using the renderCell function. 

It renders the winning lines using the renderLine function. 

It renders the winner message and reset button if there is a winner. 

 FOR Css Style:- I have added some styles for the game "Tic Tae Toe" in the Styles folder at style.css just some basic styling and follwed by Quest-3 from StackUp  React-2 Campaign file.

 
