const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let mines = 0;

      for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
        for (
          let j = Math.max(0, col - 1);
          j <= Math.min(cols - 1, col + 1);
          j++
        ) {
          if (i === row && j === col) continue;

          if (matrix[i][j]) {
            mines++;
          }
        }
      }

      result[row][col] = mines;
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
