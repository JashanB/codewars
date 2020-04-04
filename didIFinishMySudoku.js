// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

// Rows:


// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

// Columns:


// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

// Regions


// A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:


// For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/

// Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");

// Test.assertEquals(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 9],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");


function doneOrNot(board) {
  let score = 0;
  let columnScore = 0;
  let rowCounter = 0;
  let boxScore = 0;
  let rowObject = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };
  let columnObject = {
  };
  let boxObject = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };
    for (let j = 0; j < board.length; j++) {
      for (let i = 0; i < board[j].length; i++) {
        if (rowObject[board[j][i]]) {
          rowObject[board[j][i]].push(board[j][i]);
        };
        if (i < 3) {
          boxObject[(1 + rowCounter).toString()].push(board[j][i]);
        } else if ( i >= 3 && i < 6) {
          boxObject[(2 + rowCounter).toString()].push(board[j][i]);
        } else if (i >= 6) {
          boxObject[(3 + rowCounter).toString()].push(board[j][i]);
        };
        if (columnObject[i]) {
          columnObject[i].push(board[j][i]);
        } else {
          columnObject[i] = [];
          columnObject[i].push(board[j][i]);
        };
        if (rowCounter < 4 && boxObject[(3 + rowCounter).toString()].length === 9) {
          rowCounter += 3;
        };
      };
    };
    for (let number of Object.keys(rowObject)) {
      if (rowObject[number].length === 9) {
        score += 1;
      };
    };
    for (let column of Object.keys(columnObject)) {
      if (columnObject[column].includes(1) && columnObject[column].includes(2) && columnObject[column].includes(3) && columnObject[column].includes(4) && columnObject[column].includes(5) && columnObject[column].includes(6) && columnObject[column].includes(7) && columnObject[column].includes(8) && columnObject[column].includes(9)) {
        columnScore += 1;
      };
    };
    for (let box of Object.keys(boxObject)) {
      if (boxObject[box].includes(1) && boxObject[box].includes(2) && boxObject[box].includes(3) && boxObject[box].includes(4) && boxObject[box].includes(5) && boxObject[box].includes(6) && boxObject[box].includes(7) && boxObject[box].includes(8) && boxObject[box].includes(9)) {
        boxScore += 1;
      };
    };
    if (score === 9 && columnScore === 9 && boxScore === 9) {
      return "Finished!";
    } else {
      return "Try again!";
    };
  };



































