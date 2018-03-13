import { checker } from '../src/sudoku.js';
import { checkRows } from '../src/sudoku.js';

describe('checker', function() {
  it('returns true or false if an array has exactly 1 through 9 in any order', function() {
    var arr = [1,2,3,4,5,6,7,8,9];
    var arr2 = [1,3,3,4,5,6,7,9,9];
    expect(checker(arr)).toEqual(true);
    expect(checker(arr2)).toEqual(false);
  });
});

describe('checkRows', function() {
  it('returns true if all rows are 1-9', function() {
    var arr1 = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
    var arr2 = [[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9],[1,3,3,4,5,6,7,9,9]];
    expect(checkRows(arr1)).toEqual(true);
    expect(checkRows(arr2)).toEqual(false);
  });
});
