export function checker(x) {
  var string = "1,2,3,4,5,6,7,8,9";
  var testString = x.sort().toString();
  debugger
  if ( string === testString) {
    return true;
  } else {
    return false;
  }
}

export function checkRows(arrayObject) {
  for (var i = 0; i < 9; i++) {
    if (checker(arrayObject[i]) === false)  {
      return false;
    } // if
  } // for
  return true;
}
